import express from "express";
import helmet from "helmet";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { env } from "./config/env.js";
import { prisma } from "./config/prisma.js";
import { requireAdmin, requireAuth, requireSameOrigin } from "./middleware/auth.js";
import { errorHandler, notFound } from "./middleware/errors.js";
import { MAX_ATTACHMENT_REQUEST_SIZE } from "./utils/attachments.js";
import authRoutes from "./routes/auth.js";
import appRoutes from "./routes/app.js";

const app = express();
const clientDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../client");

if (env.NODE_ENV === "production") app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      upgradeInsecureRequests: env.NODE_ENV === "production" ? [] : null
    }
  },
  strictTransportSecurity: env.NODE_ENV === "production" ? undefined : false
}));
app.use(requireSameOrigin);
app.post("/api/clearances/manual", requireAuth, requireAdmin, express.json({ limit: MAX_ATTACHMENT_REQUEST_SIZE }));
app.patch("/api/clearances/:id", requireAuth, requireAdmin, express.json({ limit: MAX_ATTACHMENT_REQUEST_SIZE }));
app.post("/api/trips", requireAuth, requireAdmin, express.json({ limit: MAX_ATTACHMENT_REQUEST_SIZE }));
app.post("/api/trip-expenses", requireAuth, express.json({ limit: MAX_ATTACHMENT_REQUEST_SIZE }));
app.post("/api/fasah/appointments/preview", requireAuth, requireAdmin, express.json({ limit: "8mb" }));
app.post("/api/fasah/appointments", requireAuth, requireAdmin, express.json({ limit: MAX_ATTACHMENT_REQUEST_SIZE }));
app.post("/api/trips/document-reference/preview", requireAuth, requireAdmin, express.json({ limit: "8mb" }));
app.post("/api/drivers/import", requireAuth, requireAdmin, express.json({ limit: "5mb" }));
app.post("/api/trucks/import", requireAuth, requireAdmin, express.json({ limit: "5mb" }));
app.use(express.json({ limit: "256kb" }));

app.get("/api/health/live", (req, res) => res.json({ status: "ok" }));
app.get("/api/health/ready", async (req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ status: "ready" });
});
app.use("/api/auth", authRoutes);
app.use("/api", (req, res, next) => req.user ? next() : requireAuth(req, res, next), appRoutes);
app.get("/api/integrations", requireAuth, (req, res) => {
  res.json({
    fasah: { status: "DISCONNECTED", message: "Official adapter is not configured." },
    bayan: { status: "DISCONNECTED", message: "Official adapter is not configured." },
    naql: { status: "DISCONNECTED", message: "Official adapter is not configured." }
  });
});
app.use(express.static(clientDirectory, {
  index: "index.html",
  setHeaders(res, filePath) {
    if (filePath.endsWith(".html") || filePath.endsWith(".css") || filePath.endsWith(".js")) {
      res.setHeader("Cache-Control", "no-store");
    }
  }
}));
app.use(notFound);
app.use(errorHandler);

const server = app.listen(env.PORT, env.HOST, () => {
  console.log(`North World transport server listening on ${env.HOST}:${env.PORT}`);
});

async function shutdown(signal) {
  console.log(`${signal} received; shutting down.`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
