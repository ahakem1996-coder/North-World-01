import test from "node:test";
import assert from "node:assert/strict";
import {
  attachmentMetadata,
  parseManualAttachments
} from "../src/utils/attachments.js";

function encodedFile(name, type, content) {
  return { name, type, data: Buffer.from(content).toString("base64") };
}

test("manual attachments accept supported files and expose metadata without contents", () => {
  const [file] = parseManualAttachments([
    encodedFile("../clearance.pdf", "application/pdf", "%PDF-1.7\n")
  ]);
  assert.equal(file.originalName, ".._clearance.pdf");
  assert.equal(file.contentType, "application/pdf");
  assert.equal(file.size, 9);
  assert.deepEqual(attachmentMetadata({ ...file, id: "attachment-1" }), {
    id: "attachment-1",
    name: ".._clearance.pdf",
    contentType: "application/pdf",
    size: 9
  });
});

test("manual attachments reject mismatched signatures and excessive file counts", () => {
  assert.throws(
    () => parseManualAttachments([encodedFile("fake.pdf", "application/pdf", "not a pdf")]),
    error => error.publicCode === "attachment_type_invalid"
  );
  assert.throws(
    () => parseManualAttachments(Array.from({ length: 5 }, (_, index) =>
      encodedFile(`${index}.pdf`, "application/pdf", "%PDF-1.7")
    )),
    error => error.publicCode === "attachment_count_exceeded"
  );
});

test("manual attachments accept JPEG and PNG signatures", () => {
  const png = Buffer.alloc(24);
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(png);
  png.write("IHDR", 12, "ascii");
  const files = parseManualAttachments([
    encodedFile("photo.jpg", "image/jpeg", Buffer.from([0xff, 0xd8, 0xff, 0xd9])),
    encodedFile("scan.png", "image/png", png)
  ]);
  assert.deepEqual(files.map(file => file.contentType), ["image/jpeg", "image/png"]);
});

test("manual attachments reject files that exceed per-file size limits", () => {
  const data = Buffer.alloc(5 * 1024 * 1024 + 1);
  data.write("%PDF-1.7");
  assert.throws(
    () => parseManualAttachments([{ name: "large.pdf", type: "application/pdf", data: data.toString("base64") }]),
    error => error.publicCode === "attachment_size_exceeded"
  );
});

test("manual attachments reject a combined size above the attachment limit", () => {
  const content = Buffer.alloc(4.25 * 1024 * 1024);
  content.write("%PDF-1.7");
  assert.throws(
    () => parseManualAttachments([
      encodedFile("one.pdf", "application/pdf", content),
      encodedFile("two.pdf", "application/pdf", content)
    ]),
    error => error.publicCode === "attachment_size_exceeded"
  );
});
