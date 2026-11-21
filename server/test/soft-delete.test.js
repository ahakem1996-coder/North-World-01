import assert from "node:assert/strict";
import test from "node:test";
import { resolveSoftDeletedRecord } from "../src/utils/soft-delete.js";

const fields = ["fleetNumber", "plateNumber"];

test("soft-deleted record can be restored by a unique identity match", () => {
  const deleted = { id: "truck-1", fleetNumber: "TR-1", plateNumber: "ABC-123", deletedAt: new Date() };

  assert.deepEqual(
    resolveSoftDeletedRecord([deleted], { fleetNumber: "TR-1", plateNumber: "XYZ-999" }, fields),
    { kind: "restore", record: deleted }
  );
});

test("active or ambiguous identity matches remain conflicts", () => {
  const active = { id: "truck-1", fleetNumber: "TR-1", plateNumber: "ABC-123", deletedAt: null };
  const deleted = { id: "truck-2", fleetNumber: "TR-2", plateNumber: "XYZ-999", deletedAt: new Date() };

  assert.deepEqual(
    resolveSoftDeletedRecord([active], { fleetNumber: "TR-1", plateNumber: "NEW-1" }, fields),
    { kind: "conflict" }
  );
  assert.deepEqual(
    resolveSoftDeletedRecord([active, deleted], { fleetNumber: "TR-1", plateNumber: "XYZ-999" }, fields),
    { kind: "conflict" }
  );
});

test("no identity match creates a new record", () => {
  assert.deepEqual(
    resolveSoftDeletedRecord([], { fleetNumber: "TR-2", plateNumber: "XYZ-999" }, fields),
    { kind: "new" }
  );
});
