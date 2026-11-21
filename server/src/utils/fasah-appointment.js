import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const MAX_PDF_PAGES = 5;

function extractionError(code, statusCode = 400) {
  return Object.assign(new Error(code), { publicCode: code, statusCode });
}

function normalizedText(value) {
  return String(value || "").normalize("NFKC").replace(/\s+/g, " ").trim();
}

function findLabel(items, label, start = 0, end = items.length) {
  const expected = normalizedText(label).toLocaleLowerCase("en");
  for (let index = start; index < end; index += 1) {
    if (normalizedText(items[index].str).toLocaleLowerCase("en") === expected) return index;
  }
  return -1;
}

function valueInColumn(items, labelIndex) {
  if (labelIndex < 0) return "";
  const label = items[labelIndex];
  const labelX = label.transform[4];
  const expectedY = label.transform[5] - 15;
  const columnEnd = labelX < 260 ? 260 : Number.POSITIVE_INFINITY;
  const candidates = items
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => index !== labelIndex &&
      Math.abs(item.transform[5] - expectedY) <= 2 &&
      item.transform[4] > labelX &&
      item.transform[4] < columnEnd &&
      normalizedText(item.str))
    .sort((left, right) => left.item.transform[4] - right.item.transform[4]);
  return normalizedText(candidates[0]?.item.str);
}

function findTableValue(items, sectionLabel, fieldLabel) {
  const sectionIndex = findLabel(items, sectionLabel);
  if (sectionIndex < 0) return "";
  const sectionY = items[sectionIndex].transform[5];
  const nextSectionIndex = sectionLabel === "Entry Information"
    ? findLabel(items, "Exit Information", sectionIndex + 1)
    : -1;
  const nextSectionY = nextSectionIndex < 0
    ? Number.NEGATIVE_INFINITY
    : items[nextSectionIndex].transform[5];
  const labelY = sectionY - 30;
  const sectionItems = items.filter(item => item.transform[5] < sectionY &&
    item.transform[5] > nextSectionY);
  const labelIndex = sectionItems.findIndex(item =>
    Math.abs(item.transform[5] - labelY) <= 2 &&
    normalizedText(item.str).toLocaleLowerCase("en") === normalizedText(fieldLabel).toLocaleLowerCase("en")
  );
  if (labelIndex < 0) return "";

  const label = sectionItems[labelIndex];
  const laterColumnX = sectionItems
    .filter(item => Math.abs(item.transform[5] - labelY) <= 2 &&
      item.transform[4] > label.transform[4] &&
      ["Location Within Port", "BL No", "Declaration No / Container No", "Cargo Type / Purpose"]
        .includes(normalizedText(item.str)))
    .map(item => item.transform[4])
    .sort((left, right) => left - right)[0] || Number.POSITIVE_INFINITY;
  const candidates = sectionItems
    .filter(item => item.transform[5] < labelY - 15 &&
      item.transform[5] > labelY - 50 &&
      item.transform[4] >= label.transform[4] &&
      item.transform[4] < laterColumnX &&
      normalizedText(item.str))
    .sort((left, right) => Math.abs(left.transform[5] - (labelY - 32)) -
      Math.abs(right.transform[5] - (labelY - 32)));
  return normalizedText(candidates[0]?.str);
}

function splitDeclarationAndContainer(value) {
  const text = normalizedText(value);
  if (!text) return { declarationNumber: "", containerNumber: "" };
  const containerMatch = text.match(/[A-Z]{4}\s*\d{7}/i);
  if (containerMatch) {
    return {
      declarationNumber: text.slice(0, containerMatch.index).replace(/[\/|,\s-]+$/g, "").trim(),
      containerNumber: containerMatch[0].replace(/\s+/g, "").toUpperCase()
    };
  }
  const parts = text.split(/\s*[\/|]\s*/, 2);
  return {
    declarationNumber: normalizedText(parts[0]),
    containerNumber: normalizedText(parts[1] || "")
  };
}

function splitDriverNameAndMobile(value) {
  const text = normalizedText(value);
  const mobile = text.match(/(?:\+?966|00966)?\s*0?5\d{8}\b|\+?\d[\d\s()-]{8,18}\d/);
  return {
    driverName: normalizedText(mobile ? text.replace(mobile[0], "").replace(/[\/|]+/g, " ") : text),
    driverMobileNumber: normalizedText(mobile?.[0]).replace(/[\s()-]/g, "")
  };
}

function parseAppointmentDateTime(value) {
  const match = normalizedText(value).match(/^(\d{4})-(\d{2})-(\d{2})\s+(\d{1,2}):(\d{2})$/);
  return match
    ? { appointmentDate: `${match[1]}-${match[2]}-${match[3]}`, appointmentTime: `${match[4].padStart(2, "0")}:${match[5]}` }
    : { appointmentDate: "", appointmentTime: "" };
}

function tableFields(items, sectionLabel, prefix) {
  const declarationAndContainer = splitDeclarationAndContainer(
    findTableValue(items, sectionLabel, "Declaration No / Container No")
  );
  return {
    [`${prefix}Location`]: findTableValue(items, sectionLabel, "Location Within Port"),
    [`${prefix}BlNumber`]: findTableValue(items, sectionLabel, "BL No"),
    [`${prefix}DeclarationNumber`]: declarationAndContainer.declarationNumber,
    [`${prefix}ContainerNumber`]: declarationAndContainer.containerNumber,
    [`${prefix}CargoType`]: findTableValue(items, sectionLabel, "Cargo Type / Purpose"),
    [`${prefix}SerialNumber`]: ""
  };
}

export function parseFasahAppointmentItems(items) {
  if (!Array.isArray(items) || !items.some(item =>
    normalizedText(item.str).toLocaleLowerCase("en") === "appointment confirmation ticket"
  )) {
    throw extractionError("unsupported_fasah_pdf");
  }

  const field = label => valueInColumn(items, findLabel(items, label));
  const driver = splitDriverNameAndMobile(field("Driver Name / Mobile Number"));
  const dateTime = parseAppointmentDateTime(field("Appointment Date & Time"));
  const contractor = field("Port Contractor Name / ID");
  const contractorMatch = contractor.match(/^\s*(\d{1,12})\s*[\/|]\s*(.+)$/);
  const values = {
    operatorTicketNumber: field("Operator Ticket Number"),
    zoneGateName: field("Zone / Gate ID / Name"),
    portContractorId: contractorMatch?.[1] || "",
    portContractorName: contractorMatch?.[2] || contractor,
    bookingReferenceNumber: field("Booking Reference Number"),
    portName: field("Port"),
    ...dateTime,
    vehiclePlateNumber: field("Vehicle Plate Number"),
    vehiclePlateType: field("Vehicle Plate Type"),
    vehicleColor: field("Major Color"),
    vehicleRefId: field("Vehicle Ref ID"),
    vehicleSerialId: field("Vehicle Serial ID"),
    vehicleModel: field("Vehicle Maker Model"),
    ...driver,
    driverLicenseNumber: field("Driver License Number"),
    ...tableFields(items, "Entry Information", "entry"),
    ...tableFields(items, "Exit Information", "exit")
  };

  return {
    ...values,
    missingFields: ["bookingReferenceNumber", "portName", "vehiclePlateNumber"]
      .filter(key => !values[key])
  };
}

export async function extractFasahAppointmentPdf(buffer) {
  let document;
  try {
    document = await getDocument({
      data: new Uint8Array(buffer),
      isEvalSupported: false,
      useSystemFonts: true
    }).promise;
    if (document.numPages > MAX_PDF_PAGES) throw extractionError("fasah_pdf_page_limit", 413);

    const items = [];
    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
      const page = await document.getPage(pageNumber);
      const content = await page.getTextContent();
      items.push(...content.items.filter(item => typeof item.str === "string" && item.str.trim()));
    }
    if (items.length < 5) throw extractionError("fasah_pdf_text_unavailable", 422);
    return parseFasahAppointmentItems(items);
  } catch (error) {
    if (error?.publicCode) throw error;
    throw extractionError("invalid_fasah_pdf");
  } finally {
    if (document) await document.destroy();
  }
}
