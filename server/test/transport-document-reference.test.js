import test from "node:test";
import assert from "node:assert/strict";
import { parseTransportDocumentReferenceItems } from "../src/utils/transport-document-reference.js";

function item(str) {
  return { str };
}

test("extracts a labeled English transport document number and date", () => {
  const reference = parseTransportDocumentReferenceItems([
    item("Transport Document Number:"),
    item("BAY-2026-0018"),
    item("Issue Date:"),
    item("2026-11-14")
  ]);

  assert.deepEqual(reference, {
    documentNumber: "BAY-2026-0018",
    documentDate: "2026-11-14"
  });
});

test("extracts Arabic-labeled references and normalizes Arabic numerals", () => {
  const reference = parseTransportDocumentReferenceItems([
    item("رقم وثيقة النقل:"),
    item("١٢٣٤٥٦٧٨"),
    item("تاريخ إصدار الوثيقة:"),
    item("١٤/١١/٢٠٢٦")
  ]);

  assert.deepEqual(reference, {
    documentNumber: "12345678",
    documentDate: "2026-11-14"
  });
});

test("does not mistake unrelated numbers for a document reference", () => {
  const reference = parseTransportDocumentReferenceItems([
    item("Customs Declaration: 551234"),
    item("Container: MSCU1234567"),
    item("Operation Date: 2026-11-14")
  ]);

  assert.deepEqual(reference, { documentNumber: "", documentDate: "" });
});
