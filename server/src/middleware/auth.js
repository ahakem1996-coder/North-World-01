import { createHmac } from "node:crypto";
import { prisma } from "../config/prisma.js";
import { env } from "../config/env.js";

const COOKIE_NAME = "nw_session";

export function hashSessionToken(token) {
  return createHmac("sha256", env.SESSION_SECRET).update(token).digest("hex");
}

export function setSessionCookie(res, token, maxAgeSeconds, secure) {
  const flags = ["Path=/", "HttpOnly", "SameSite=Strict", `Max-Age=${maxAgeSeconds}`];
  if (secure) flags.push("Secure");
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=${token}; ${flags.join("; ")}`);
}

export function clearSessionCookie(res, secure) {
  const flags = ["Path=/", "HttpOnly", "SameSite=Strict", "Max-Age=0"];
  if (secure) flags.push("Secure");
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; ${flags.join("; ")}`);
}

function sessionToken(req) {
  const cookieHeader = req.headers.cookie || "";
  const cookie = cookieHeader.split(";").map(value => value.trim()).find(value => value.startsWith(`${COOKIE_NAME}=`));
  return cookie ? cookie.slice(COOKIE_NAME.length + 1) : "";
}

export async function requireAuth(req, res, next) {
  try {
    const token = sessionToken(req);
    if (!token) return res.status(401).json({ error: "authentication_required" });

    const session = await prisma.session.findUnique({
      where: { tokenHash: hashSessionToken(token) },
      include: { user: { include: { driver: true } } }
    });
    if (!session || session.expiresAt <= new Date() || !session.user.isActive || session.user.deletedAt) {
      if (session) await prisma.session.deleteMany({ where: { id: session.id } });
      return res.status(401).json({ error: "authentication_required" });
    }

    if (session.user.role === "DRIVER" &&
        (!session.user.driver || !session.user.driver.isActive || session.user.driver.deletedAt)) {
      await prisma.session.deleteMany({ where: { id: session.id } });
      return res.status(403).json({ error: "driver_account_inactive" });
    }

    req.user = session.user;
    req.sessionId = session.id;
    req.sessionTokenHash = session.tokenHash;
    next();
  } catch (error) {
    next(error);
  }
}

export function requireAdmin(req, res, next) {
  if (req.user?.role !== "ADMIN") return res.status(403).json({ error: "admin_required" });
  next();
}

export function requireSameOrigin(req, res, next) {
  const origin = req.get("origin");
  if (!origin) return next();

  const expected = `${req.protocol}://${req.get("host")}`;
  if (origin !== expected) return res.status(403).json({ error: "origin_not_allowed" });
  next();
}
