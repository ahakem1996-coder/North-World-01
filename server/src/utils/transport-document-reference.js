import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const MAX_PDF_PAGES = 20;
const numberLabels = [
  /\b(?:transport\s+document|bayan\s+document|document)\s*(?:number|no\.?|#)/i,
  /رقم\s*(?:ال)?(?:وثيقة|مستند)\s*(?:النقل|بيان)?/iu,
  /(?:ال)?(?:وثيقة|مستند)\s*(?:النقل|بيان)\s*رقم/iu
];
const dateLabels = [
  /\b(?:transport\s+document\s+)?(?:issue|issued|issuance|document)\s+date\b/i,
  /\bdate\s+of\s+(?:issue|issuance)\b/i,
  /تاريخ\s*(?:(?:إصدار|اصدار)\s*)?(?:(?:ال)?(?:وثيقة|مستند|النقل|إصدار|الاصدار))/iu
];
const allLabels = [...numberLabels, ...dateLabels];

function extractionError(code, statusCode = 400) {
  return Object.assign(new Error(code), { publicCode: code, statusCode });
}

function normalizedText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/ـ/g, "")
    .replace(/[٠-٩۰-۹]/g, digit => String("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹".indexOf(digit) % 10))
    .replace(/\s+/g, " ")
    .trim();
}

function textAfterLabel(text, labels) {
  for (const label of labels) {
    const match = label.exec(text);
    if (!match) continue;

    const start = match.index + match[0].length;
    const tail = text.slice(start, start + 240);
    const nextLabelIndex = allLabels.reduce((nearest, nextLabel) => {
      const next = nextLabel.exec(tail);
      return next && next.index > 0 ? Math.min(nearest, next.index) : nearest;
    }, tail.length);
    return tail.slice(0, nextLabelIndex).replace(/^[\s:：#\-–]+/, "");
  }
  return "";
}

function validDate(yearValue, monthValue, dayValue) {
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (year < 1900 || date.getUTCFullYear() !== year ||
      date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return "";
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseDocumentDate(value) {
  const text = normalizedText(value);
  const yearFirst = text.match(/\b(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})\b/);
  if (yearFirst) return validDate(yearFirst[1], yearFirst[2], yearFirst[3]);

  const dayFirst = text.match(/\b(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})\b/);
  if (dayFirst) return validDate(dayFirst[3], dayFirst[2], dayFirst[1]);

  const months = {
    jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
    apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
    aug: 8, august: 8, sep: 9, sept: 9, september: 9,
    oct: 10, october: 10, nov: 11, november: 11, dec: 12, december: 12
  };
  const monthFirst = text.match(/\b([A-Za-z]+)\.?\s+(\d{1,2}),?\s+(\d{4})\b/);
  if (monthFirst && months[monthFirst[1].toLowerCase()]) {
    return validDate(monthFirst[3], months[monthFirst[1].toLowerCase()], monthFirst[2]);
  }
  const dayMonth = text.match(/\b(\d{1,2})\s+([A-Za-z]+)\.?,?\s+(\d{4})\b/);
  if (dayMonth && months[dayMonth[2].toLowerCase()]) {
    return validDate(dayMonth[3], months[dayMonth[2].toLowerCase()], dayMonth[1]);
  }
  return "";
}

function valueAfterLabel(text, labels, pattern, isValid) {
  const tail = textAfterLabel(text, labels);
  if (!tail) return "";
  for (const match of tail.matchAll(pattern)) {
    if (isValid(match[0])) return match[0];
  }
  return "";
}

export function parseTransportDocumentReferenceItems(items) {
  const text = normalizedText(items.map(item => item.str || "").join(" "));
  const documentNumber = valueAfterLabel(
    text,
    numberLabels,
    /\b[A-Z0-9][A-Z0-9/_-]{2,79}\b/gi,
    value => /\d/.test(value) && !parseDocumentDate(value)
  );
  const rawDate = valueAfterLabel(
    text,
    dateLabels,
    /\b(?:\d{4}[-/.]\d{1,2}[-/.]\d{1,2}|\d{1,2}[-/.]\d{1,2}[-/.]\d{4}|\d{1,2}\s+[A-Za-z]+\.?,?\s+\d{4}|[A-Za-z]+\.?\s+\d{1,2},?\s+\d{4})\b/g,
    value => Boolean(parseDocumentDate(value))
  );

  return { documentNumber, documentDate: parseDocumentDate(rawDate) };
}

export async function extractTransportDocumentReferencePdf(buffer) {
  let document;
  try {
    document = await getDocument({
      data: new Uint8Array(buffer),
      isEvalSupported: false,
      useSystemFonts: true
    }).promise;
    if (document.numPages > MAX_PDF_PAGES) {
      throw extractionError("transport_document_pdf_page_limit", 413);
    }

    const items = [];
    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
      const page = await document.getPage(pageNumber);
      const content = await page.getTextContent();
      items.push(...content.items.filter(item => typeof item.str === "string" && item.str.trim()));
    }
    if (!items.length) throw extractionError("transport_document_pdf_text_unavailable", 422);
    return parseTransportDocumentReferenceItems(items);
  } catch (error) {
    if (error?.publicCode) throw error;
    throw extractionError("invalid_transport_document_pdf");
  } finally {
    if (document) await document.destroy();
  }
}
