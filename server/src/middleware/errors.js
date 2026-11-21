export function notFound(req, res) {
  res.status(404).json({ error: "not_found" });
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);

  if (error?.type === "entity.too.large") {
    return res.status(413).json({ error: "request_too_large" });
  }
  if (error?.type === "entity.parse.failed") {
    return res.status(400).json({ error: "invalid_request_body" });
  }
  if (error?.publicCode) {
    return res.status(error.statusCode || 400).json({
      error: error.publicCode,
      ...(error.details ? { details: error.details } : {})
    });
  }
  if (error?.code === "P2002") {
    return res.status(409).json({ error: "record_already_exists" });
  }
  if (error?.code === "P2025") {
    return res.status(404).json({ error: "record_not_found" });
  }
  if (error?.code === "P2034") {
    return res.status(409).json({ error: "record_changed_retry" });
  }

  console.error("Request failed", {
    method: req.method,
    path: req.path,
    error: error instanceof Error ? error.message : "unknown"
  });
  res.status(500).json({ error: "internal_server_error" });
}
