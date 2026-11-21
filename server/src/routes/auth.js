import { randomBytes } from "node:crypto";
import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { z } from "zod";
import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";
import { clearSessionCookie, hashSessionToken, requireAuth, setSessionCookie } from "../middleware/auth.js";
import { hashPassword, verifyPassword } from "../utils/password.js";

const router = Router();
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const usernameSchema = z.string().trim().min(3).max(64).transform(value => value.toLocaleLowerCase("en"));
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false
});

function publicUser(user) {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    driverId: user.driverId,
    driverName: user.driver?.name || null
  };
}

async function createSession(user, res) {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await prisma.session.deleteMany({ where: { expiresAt: { lte: new Date() } } });
  await prisma.session.create({
    data: { tokenHash: hashSessionToken(token), userId: user.id, expiresAt }
  });
  setSessionCookie(res, token, SESSION_TTL_MS / 1000, env.NODE_ENV === "production");
  return { user: publicUser(user) };
}

router.get("/setup-status", async (req, res) => {
  const [adminCount, setupClaim] = await Promise.all([
    prisma.user.count({ where: { role: "ADMIN", deletedAt: null } }),
    prisma.adminSetupClaim.findUnique({ where: { id: "initial-admin" }, select: { id: true } })
  ]);
  res.json({ setupRequired: adminCount === 0 && !setupClaim });
});

router.post("/setup", loginLimiter, async (req, res) => {
  const bodySchema = z.object({
    username: usernameSchema,
    password: z.string().min(12).max(128)
  });
  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_setup_input" });

  const { username, password } = parsed.data;
  const existingAdminCount = await prisma.user.count({ where: { role: "ADMIN", deletedAt: null } });
  if (existingAdminCount > 0) return res.status(409).json({ error: "setup_already_complete" });
  const passwordHash = await hashPassword(password);
  try {
    const user = await prisma.$transaction(async tx => {
      const adminCount = await tx.user.count({ where: { role: "ADMIN", deletedAt: null } });
      if (adminCount > 0) throw Object.assign(new Error("setup_already_complete"), { code: "SETUP_COMPLETE" });

      await tx.adminSetupClaim.create({ data: { id: "initial-admin" } });
      return tx.user.create({ data: { username, passwordHash, role: "ADMIN" } });
    }, { isolationLevel: "Serializable" });

    res.status(201).json(await createSession(user, res));
  } catch (error) {
    if (error.code === "SETUP_COMPLETE" || error.code === "P2002" || error.code === "P2034") {
      return res.status(409).json({ error: "setup_already_complete" });
    }
    throw error;
  }
});

router.post("/login", loginLimiter, async (req, res) => {
  const bodySchema = z.object({
    username: usernameSchema,
    password: z.string().min(1).max(128)
  });
  const parsed = bodySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_login_input" });

  const user = await prisma.user.findUnique({
    where: { username: parsed.data.username },
    include: { driver: true }
  });
  if (!user || !user.isActive || user.deletedAt || !await verifyPassword(parsed.data.password, user.passwordHash)) {
    return res.status(401).json({ error: "invalid_credentials" });
  }
  if (user.role === "DRIVER" && (!user.driver || !user.driver.isActive || user.driver.deletedAt)) {
    return res.status(403).json({ error: "driver_account_inactive" });
  }

  res.json(await createSession(user, res));
});

router.get("/session", requireAuth, (req, res) => {
  res.json({ user: publicUser(req.user) });
});

router.post("/logout", requireAuth, async (req, res) => {
  await prisma.session.deleteMany({ where: { id: req.sessionId } });
  clearSessionCookie(res, env.NODE_ENV === "production");
  res.status(204).end();
});

export default router;
