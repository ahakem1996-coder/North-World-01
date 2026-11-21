export const MAX_ATTACHMENTS = 4;
export const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;
export const MAX_TOTAL_ATTACHMENT_SIZE = 8 * 1024 * 1024;
export const MAX_ATTACHMENT_REQUEST_SIZE = 12 * 1024 * 1024;

const MIME_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);

function invalidAttachments(code = "invalid_attachments") {
  return Object.assign(new Error(code), { statusCode: 400, publicCode: code });
}

function hasExpectedSignature(data, contentType) {
  if (contentType === "application/pdf") return data.subarray(0, 5).toString("ascii") === "%PDF-";
  if (contentType === "image/png") {
    return data.length >= 24 &&
      data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) &&
      data.subarray(12, 16).toString("ascii") === "IHDR";
  }
  return contentType === "image/jpeg" &&
    data.length >= 3 && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff;
}

export function parseManualAttachments(input) {
  if (input === undefined) return [];
  if (!Array.isArray(input) || input.length > MAX_ATTACHMENTS) {
    throw invalidAttachments("attachment_count_exceeded");
  }

  let totalSize = 0;
  return input.map(file => {
    if (!file || typeof file !== "object" ||
        typeof file.name !== "string" || !file.name.trim() || file.name.length > 255 ||
        typeof file.type !== "string" || !MIME_TYPES.has(file.type) ||
        typeof file.data !== "string" || !file.data || file.data.length > Math.ceil(MAX_ATTACHMENT_SIZE / 3) * 4 ||
        file.data.length % 4 !== 0) {
      throw invalidAttachments();
    }

    const data = Buffer.from(file.data, "base64");
    if (data.toString("base64") !== file.data) throw invalidAttachments();
    if (!data.length || data.length > MAX_ATTACHMENT_SIZE) {
      throw invalidAttachments("attachment_size_exceeded");
    }
    totalSize += data.length;
    if (totalSize > MAX_TOTAL_ATTACHMENT_SIZE) throw invalidAttachments("attachment_size_exceeded");
    if (!hasExpectedSignature(data, file.type)) throw invalidAttachments("attachment_type_invalid");

    const originalName = file.name.replace(/[\\/\u0000-\u001f\u007f]/g, "_").trim().slice(0, 255);
    if (!originalName) throw invalidAttachments();

    return {
      originalName,
      contentType: file.type,
      size: data.length,
      data
    };
  });
}

export function attachmentMetadata(attachment) {
  return {
    id: attachment.id,
    name: attachment.originalName,
    contentType: attachment.contentType,
    size: attachment.size
  };
}
