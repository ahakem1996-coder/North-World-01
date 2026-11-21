import test from "node:test";
import assert from "node:assert/strict";
import { hashPassword, verifyPassword } from "../src/utils/password.js";

test("password hashes verify only the original password", async () => {
  const hash = await hashPassword("Correct horse battery staple 2026");

  assert.notEqual(hash, "Correct horse battery staple 2026");
  assert.equal(await verifyPassword("Correct horse battery staple 2026", hash), true);
  assert.equal(await verifyPassword("incorrect password", hash), false);
});

test("password verifier rejects unsupported hash formats", async () => {
  assert.equal(await verifyPassword("password", "plain$password"), false);
});
