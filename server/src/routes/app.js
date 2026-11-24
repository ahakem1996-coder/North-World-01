import { Router } from "express";
import ExcelJS from "exceljs";
import { PDFDocument } from "pdf-lib";
import { z } from "zod";
import { prisma } from "../config/prisma.js";
import { requireAdmin } from "../middleware/auth.js";
import {
  attachmentMetadata,
  MAX_ATTACHMENTS,
  MAX_TOTAL_ATTACHMENT_SIZE,
  parseManualAttachments
} from "../utils/attachments.js";
import {
  hasCompleteManualDocumentReference,
  manualClearanceSchema,
  manualDocumentReferenceFields
} from "../utils/manual-input.js";
import { resolveSoftDeletedRecord } from "../utils/soft-delete.js";
import { extractFasahAppointmentPdf } from "../utils/fasah-appointment.js";
import { extractTransportDocumentReferencePdf } from "../utils/transport-document-reference.js";
import { hashPassword } from "../utils/password.js";

const router = Router();
const tripStages = [
  "EN_ROUTE_TO_PORT",
  "CONTAINER_PICKED_UP",
  "EN_ROUTE_TO_CUSTOMER",
  "ARRIVED_AT_CUSTOMER",
  "DELIVERED",
  "RETURNING_EMPTY",
  "EMPTY_RETURNED"
];
const truckStatuses = ["AVAILABLE", "ASSIGNED", "ON_TRIP", "MAINTENANCE", "INACTIVE"];
const ACTIVE_TRIP_FILTER = { emptyReturnedAt: null, cancelledAt: null };
const MAX_IMPORT_FILE_BYTES = 3 * 1024 * 1024;
const MAX_IMPORT_ROWS = 500;
const MAX_ARCHIVE_PDF_MERGE_BYTES = 50 * 1024 * 1024;
const archivePdfMergeSchema = z.object({
  tripIds: z.array(z.string().trim().min(1)).min(1).max(500)
    .refine(tripIds => new Set(tripIds).size === tripIds.length),
  source: z.enum(["clearance", "transport", "both"])
});
const domesticTripSchema = z.object({
  customerName: z.string().trim().min(1).max(160),
  origin: z.string().trim().min(1).max(240),
  destination: z.string().trim().min(1).max(240),
  truckId: z.string().min(1),
  driverId: z.string().min(1),
  manualDocumentDate: z.string().date().optional().or(z.literal(""))
});
const tripExpenseSchema = z.object({
  tripId: z.string().trim().min(1),
  amount: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).refine(value => Number(value) > 0),
  type: z.enum(["MAINTENANCE", "FUEL"]),
  notes: z.string().trim().max(500).optional().default("")
});
const tripExpenseUpdateSchema = tripExpenseSchema.omit({ tripId: true });
const fasahAppointmentSchema = z.object({
  bookingReferenceNumber: z.string().trim().min(1).max(80),
  operatorTicketNumber: z.string().trim().max(80).optional().default(""),
  zoneGateName: z.string().trim().max(160).optional().default(""),
  portContractorId: z.string().trim().max(80).optional().default(""),
  portContractorName: z.string().trim().max(160).optional().default(""),
  portName: z.string().trim().max(160).optional().default(""),
  appointmentDate: z.string().date().optional().or(z.literal("")),
  appointmentTime: z.string().regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/).optional().or(z.literal("")),
  vehiclePlateNumber: z.string().trim().max(64).optional().default(""),
  vehiclePlateType: z.string().trim().max(120).optional().default(""),
  vehicleColor: z.string().trim().max(64).optional().default(""),
  vehicleRefId: z.string().trim().max(80).optional().default(""),
  vehicleSerialId: z.string().trim().max(80).optional().default(""),
  vehicleModel: z.string().trim().max(120).optional().default(""),
  driverName: z.string().trim().max(160).optional().default(""),
  driverMobileNumber: z.string().trim().max(32).optional().default(""),
  driverLicenseNumber: z.string().trim().max(80).optional().default(""),
  entryLocation: z.string().trim().max(160).optional().default(""),
  entryBlNumber: z.string().trim().max(80).optional().default(""),
  entryDeclarationNumber: z.string().trim().max(80).optional().default(""),
  entryContainerNumber: z.string().trim().max(32).optional().default(""),
  entryCargoType: z.string().trim().max(160).optional().default(""),
  entrySerialNumber: z.string().trim().max(80).optional().default(""),
  exitLocation: z.string().trim().max(160).optional().default(""),
  exitBlNumber: z.string().trim().max(80).optional().default(""),
  exitDeclarationNumber: z.string().trim().max(80).optional().default(""),
  exitContainerNumber: z.string().trim().max(32).optional().default(""),
  exitCargoType: z.string().trim().max(160).optional().default(""),
  exitSerialNumber: z.string().trim().max(80).optional().default("")
});
const DRIVER_IMPORT_COLUMNS = [
  { key: "name", required: true, headers: ["اسم السائق", "name"] },
  { key: "nationalId", required: true, headers: ["رقم الهوية / الإقامة", "رقم الهوية", "national id", "nationalId"] },
  { key: "phone", required: true, headers: ["رقم الجوال", "الجوال", "phone", "mobile"] },
  { key: "passportNumber", required: true, headers: ["رقم جواز السفر", "جواز السفر", "passport number", "passportNumber"] }
];
const TRUCK_IMPORT_COLUMNS = [
  { key: "fleetNumber", required: true, headers: ["رقم الأسطول", "fleet number", "fleetNumber"] },
  { key: "plateNumber", required: true, headers: ["رقم السيارة (حروف وأرقام)", "رقم السيارة", "رقم اللوحة", "plate number", "plateNumber"] },
  { key: "serialNumber", required: true, headers: ["الرقم التسلسلي", "رقم الهيكل", "serial number", "serialNumber"] },
  { key: "model", required: true, headers: ["الموديل", "model"] },
  { key: "driverNationalId", required: false, headers: ["رقم هوية السائق (اختياري)", "رقم هوية السائق", "driver national id", "driverNationalId"] }
];
const driverImportRowSchema = z.object({
  name: z.string().trim().min(1).max(120),
  nationalId: z.string().trim().min(1).max(32),
  phone: z.string().trim().min(1).max(32),
  passportNumber: z.string().trim().min(1).max(64)
});
const truckImportRowSchema = z.object({
  fleetNumber: z.string().trim().min(1).max(32),
  plateNumber: z.string().trim().min(1).max(32),
  serialNumber: z.string().trim().min(1).max(64),
  model: z.string().trim().min(1).max(80),
  driverNationalId: z.string().trim().max(32).optional().default("")
});
const attachmentMetadataSelect = {
  id: true,
  originalName: true,
  contentType: true,
  size: true
};
const tripInclude = {
  truck: true,
  driver: true,
  customer: true,
  port: true,
  container: true,
  customsClearance: { include: { attachments: { select: attachmentMetadataSelect } } },
  transportDocument: { include: { attachments: { select: attachmentMetadataSelect } } },
  stageUpdates: { orderBy: { completedAt: "asc" } },
  invoice: { select: { id: true, invoiceNumber: true, status: true } }
};
const tripExpenseInclude = {
  attachments: { select: attachmentMetadataSelect },
  trip: {
    include: {
      driver: { select: { name: true, nationalId: true } },
      container: { select: { containerNumber: true } },
      customsClearance: { select: { declarationNumber: true } },
      transportDocument: { select: { documentNumber: true } }
    }
  }
};

function normalizedUsername(value) {
  return value.trim().toLocaleLowerCase("en");
}

function importFailure(code, statusCode = 400, details) {
  return Object.assign(new Error(code), { publicCode: code, statusCode, details });
}

function normalizedImportHeader(value) {
  return String(value || "").trim().toLocaleLowerCase("en").replace(/[\s_/\-()]+/g, "");
}

function importCellText(cell) {
  const value = cell.value;
  if (typeof value === "string" || typeof value === "number") return String(value).trim();
  if (value && typeof value === "object" && Array.isArray(value.richText)) {
    return value.richText.map(part => part.text || "").join("").trim();
  }
  return "";
}

function readImportRows(worksheet, columns, rowSchema) {
  if (worksheet.rowCount > MAX_IMPORT_ROWS + 1) {
    throw importFailure("import_row_limit_exceeded", 413);
  }
  const headerRow = worksheet.getRow(1);
  const headers = new Map();
  headerRow.eachCell((cell, columnNumber) => {
    headers.set(normalizedImportHeader(importCellText(cell)), columnNumber);
  });
  const columnNumbers = new Map();
  const missingHeaders = [];
  for (const column of columns) {
    const columnNumber = column.headers
      .map(normalizedImportHeader)
      .map(header => headers.get(header))
      .find(Boolean);
    if (columnNumber) columnNumbers.set(column.key, columnNumber);
    else if (column.required) missingHeaders.push(column.key);
  }
  if (missingHeaders.length) throw importFailure("invalid_import_headers", 400);

  const rows = [];
  const errors = [];
  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber += 1) {
    const data = {};
    for (const column of columns) {
      const columnNumber = columnNumbers.get(column.key);
      data[column.key] = columnNumber ? importCellText(worksheet.getRow(rowNumber).getCell(columnNumber)) : "";
    }
    if (Object.values(data).every(value => !value)) continue;
    const parsed = rowSchema.safeParse(data);
    if (!parsed.success) errors.push({ row: rowNumber, code: "invalid_row" });
    else rows.push({ row: rowNumber, data: parsed.data });
  }
  if (errors.length) throw importFailure("import_validation_failed", 422, errors);
  if (!rows.length) throw importFailure("import_empty", 400);
  return rows;
}

async function loadImportWorkbook(body, columns, rowSchema) {
  const input = z.object({
    fileName: z.string().trim().min(1).max(255).regex(/\.xlsx$/i),
    data: z.string().min(1).regex(/^[A-Za-z0-9+/]+={0,2}$/)
  }).safeParse(body);
  if (!input.success || input.data.data.length % 4 !== 0) throw importFailure("invalid_excel_file", 400);
  if (input.data.data.length > Math.ceil(MAX_IMPORT_FILE_BYTES / 3) * 4 + 4) {
    throw importFailure("import_file_too_large", 413);
  }
  const buffer = Buffer.from(input.data.data, "base64");
  if (!buffer.length || buffer.length > MAX_IMPORT_FILE_BYTES) throw importFailure("import_file_too_large", 413);

  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.load(buffer);
  } catch {
    throw importFailure("invalid_excel_file", 400);
  }
  const worksheet = workbook.worksheets[0];
  if (!worksheet) throw importFailure("invalid_excel_file", 400);
  return readImportRows(worksheet, columns, rowSchema);
}

function findDuplicateImportRows(rows, keys) {
  const seen = new Map();
  const errors = [];
  for (const row of rows) {
    for (const key of keys) {
      const value = String(row.data[key] || "").trim().toLocaleLowerCase("en");
      if (!value) continue;
      const identity = `${key}:${value}`;
      if (seen.has(identity)) errors.push({ row: row.row, code: "duplicate_in_file" });
      else seen.set(identity, row.row);
    }
  }
  return errors;
}

function mapClearance(clearance) {
  return {
    id: clearance.id,
    declarationNumber: clearance.declarationNumber,
    containerNumber: clearance.container.containerNumber,
    size: clearance.container.size === "FT_20" ? "20 قدم" : "40 قدم",
    type: clearance.container.type,
    sealNumber: clearance.shippingSealNumber,
    vesselName: clearance.vesselName,
    port: clearance.port.name,
    portCity: clearance.port.city,
    source: clearance.source,
    status: clearance.status,
    clearedAt: clearance.clearedAt?.toISOString().slice(0, 10) || null,
    attachments: (clearance.attachments || []).map(attachmentMetadata)
  };
}

function mapFasahAppointment(appointment) {
  return {
    id: appointment.id,
    bookingReferenceNumber: appointment.bookingReferenceNumber,
    operatorTicketNumber: appointment.operatorTicketNumber || "",
    zoneGateName: appointment.zoneGateName || "",
    portContractorId: appointment.portContractorId || "",
    portContractorName: appointment.portContractorName || "",
    portName: appointment.portName || "",
    appointmentDate: appointment.appointmentDate?.toISOString().slice(0, 10) || "",
    appointmentTime: appointment.appointmentTime || "",
    vehiclePlateNumber: appointment.vehiclePlateNumber || "",
    vehiclePlateType: appointment.vehiclePlateType || "",
    vehicleColor: appointment.vehicleColor || "",
    vehicleRefId: appointment.vehicleRefId || "",
    vehicleSerialId: appointment.vehicleSerialId || "",
    vehicleModel: appointment.vehicleModel || "",
    driverName: appointment.driverName || "",
    driverMobileNumber: appointment.driverMobileNumber || "",
    driverLicenseNumber: appointment.driverLicenseNumber || "",
    entryLocation: appointment.entryLocation || "",
    entryBlNumber: appointment.entryBlNumber || "",
    entryDeclarationNumber: appointment.entryDeclarationNumber || "",
    entryContainerNumber: appointment.entryContainerNumber || "",
    entryCargoType: appointment.entryCargoType || "",
    entrySerialNumber: appointment.entrySerialNumber || "",
    exitLocation: appointment.exitLocation || "",
    exitBlNumber: appointment.exitBlNumber || "",
    exitDeclarationNumber: appointment.exitDeclarationNumber || "",
    exitContainerNumber: appointment.exitContainerNumber || "",
    exitCargoType: appointment.exitCargoType || "",
    exitSerialNumber: appointment.exitSerialNumber || "",
    createdAt: appointment.createdAt.toISOString(),
    attachments: (appointment.attachments || []).map(attachmentMetadata)
  };
}

function mapTrip(trip) {
  const completed = Boolean(trip.emptyReturnedAt);
  const stageIndex = trip.currentStage ? tripStages.indexOf(trip.currentStage) : -1;
  const isDomestic = trip.tripType === "DOMESTIC";
  return {
    id: trip.transportDocument?.id || trip.id,
    tripId: trip.id,
    tripType: trip.tripType || "PORT",
    documentNumber: trip.transportDocument?.documentNumber || trip.cargoWaybillNumber || null,
    status: trip.cancelledAt ? "CANCELLED" : trip.transportDocument?.status || "DRAFT",
    source: trip.transportDocument?.source || "INTERNAL_DRAFT",
    issuedAt: trip.transportDocument?.issuedAt?.toISOString().slice(0, 10) ||
      trip.operationAt.toISOString().slice(0, 10),
    clearanceDate: trip.customsClearance?.clearedAt?.toISOString().slice(0, 10) || "",
    clearanceId: trip.customsClearanceId || null,
    declarationNumber: trip.customsClearance?.declarationNumber || (isDomestic ? "نقل خارجي" : null),
    containerNumber: trip.container?.containerNumber || trip.cargoDescription || (isDomestic ? "نقل داخلي" : null),
    size: trip.container?.size ? (trip.container.size === "FT_20" ? "20 قدم" : "40 قدم") : (trip.cargoDescription || "بضائع عامة"),
    type: trip.container?.type || "DOMESTIC",
    sealNumber: trip.customsClearance?.shippingSealNumber || null,
    vesselName: trip.customsClearance?.vesselName || null,
    port: trip.port?.name || trip.originLocation || "الموقع الميداني",
    origin: trip.originLocation || trip.port?.name || "الميناء",
    destination: trip.deliveryDestination,
    cargoDescription: trip.cargoDescription || null,
    cargoWaybillNumber: trip.cargoWaybillNumber || null,
    clientRate: trip.clientRate ? trip.clientRate.toString() : null,
    driverFee: trip.driverFee ? trip.driverFee.toString() : null,
    billingStatus: trip.billingStatus || "UNBILLED",
    invoiceId: trip.invoiceId || null,
    invoiceNumber: trip.invoice?.invoiceNumber || null,
    customerName: trip.customer?.name || "",
    customerId: trip.customerId,
    truckId: trip.truckId || "",
    truckFleetNumber: trip.truckFleetNumber,
    truckPlateNumber: trip.truckPlateNumber,
    truckSerialNumber: trip.truckSerialNumber,
    truckModel: trip.truckModel,
    driverId: trip.driverId,
    returnDueAt: trip.emptyReturnDueAt?.toISOString().slice(0, 10) || "",
    freeTimeEndsAt: trip.freeTimeEndsAt?.toISOString().slice(0, 10) || "",
    requestStatus: trip.cancelledAt ? "CANCELLED" : trip.driverAcceptedAt ? "ACCEPTED" : "PENDING",
    cancelledAt: trip.cancelledAt?.toISOString() || "",
    acceptedAt: trip.driverAcceptedAt?.toISOString() || "",
    tripStageIndex: completed ? tripStages.length - 1 : trip.driverAcceptedAt ? Math.max(0, stageIndex) : -1,
    stageHistory: (trip.stageUpdates || []).map(update => ({
      stage: update.stage,
      completedAt: update.completedAt.toISOString()
    })),
    returnedAt: trip.emptyReturnedAt?.toISOString().slice(0, 10) || "",
    eir: trip.eirReceiptNumber || "",
    clearanceAttachments: (trip.customsClearance?.attachments || []).map(attachmentMetadata),
    attachments: (trip.transportDocument?.attachments || []).map(attachmentMetadata)
  };
}

function mapTripExpense(expense) {
  return {
    id: expense.id,
    tripId: expense.tripId,
    amount: expense.amount.toString(),
    type: expense.type,
    notes: expense.notes || "",
    createdAt: expense.createdAt.toISOString(),
    attachments: (expense.attachments || []).map(attachmentMetadata),
    driverId: expense.trip.driverId,
    driverName: expense.trip.driver?.name || "",
    nationalId: expense.trip.driver?.nationalId || "",
    plateNumber: expense.trip.truck?.plateNumber || expense.trip.truckPlateNumber,
    containerNumber: expense.trip.container?.containerNumber || expense.trip.cargoDescription || null,
    declarationNumber: expense.trip.customsClearance?.declarationNumber || "نقل خارجي",
    documentNumber: expense.trip.transportDocument?.documentNumber || null
  };
}

function mapTariff(rate) {
  return {
    id: rate.id,
    customerId: rate.customerId,
    customerName: rate.customer?.name || "",
    origin: rate.origin,
    destination: rate.destination,
    cargoType: rate.cargoType || "",
    price: rate.price.toString(),
    driverCost: rate.driverCost ? rate.driverCost.toString() : "",
    notes: rate.notes || "",
    createdAt: rate.createdAt.toISOString()
  };
}

function mapInvoice(inv) {
  return {
    id: inv.id,
    invoiceNumber: inv.invoiceNumber,
    customerId: inv.customerId,
    customerName: inv.customer?.name || "",
    customerTaxNumber: inv.customer?.taxNumber || "",
    issueDate: inv.issueDate.toISOString().slice(0, 10),
    dueDate: inv.dueDate ? inv.dueDate.toISOString().slice(0, 10) : "",
    status: inv.status,
    subtotal: inv.subtotal.toString(),
    taxRate: inv.taxRate.toString(),
    taxAmount: inv.taxAmount.toString(),
    totalAmount: inv.totalAmount.toString(),
    notes: inv.notes || "",
    tripCount: inv.trips ? inv.trips.length : 0,
    trips: (inv.trips || []).map(mapTrip),
    createdAt: inv.createdAt.toISOString()
  };
}

function stateTruck(truck) {
  return {
    id: truck.id,
    fleetNumber: truck.fleetNumber,
    plateNumber: truck.plateNumber,
    serialNumber: truck.serialNumber,
    model: truck.model,
    status: truck.status,
    driverId: truck.assignedDriverId || "",
    deletedAt: truck.deletedAt?.toISOString() || null
  };
}

function stateDriver(driver) {
  return {
    id: driver.id,
    name: driver.name,
    nationalId: driver.nationalId,
    phone: driver.phone,
    passportNumber: driver.passportNumber,
    isActive: driver.isActive,
    deletedAt: driver.deletedAt?.toISOString() || null
  };
}

async function writeAudit(tx, req, action, entityType, entityId, metadata) {
  await tx.auditLog.create({
    data: {
      actorId: req.user.id,
      action,
      entityType,
      entityId,
      metadata
    }
  });
}

async function getAppState(req) {
  const isDriver = req.user.role === "DRIVER";
  const driverId = isDriver ? req.user.driverId : undefined;
  const [trucks, drivers, clearances, trips, accounts, ports, tripExpenses, fasahAppointments, tariffs, invoices, customers] = await Promise.all([
    prisma.truck.findMany({
      where: isDriver
        ? { trips: { some: { driverId } } }
        : {},
      orderBy: { fleetNumber: "asc" }
    }),
    prisma.driver.findMany({
      where: isDriver ? { id: driverId } : {},
      orderBy: { name: "asc" }
    }),
    prisma.customsClearance.findMany({
      where: isDriver ? { trip: { driverId } } : {},
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } },
      orderBy: { createdAt: "desc" }
    }),
    prisma.trip.findMany({
      where: isDriver ? { driverId } : {},
      include: tripInclude,
      orderBy: { operationAt: "desc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.user.findMany({
      where: { deletedAt: null },
      select: {
        id: true,
        username: true,
        role: true,
        isActive: true,
        driverId: true,
        createdAt: true,
        deletedAt: true
      },
      orderBy: { createdAt: "asc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.port.findMany({ orderBy: { name: "asc" } }),
    prisma.tripExpense.findMany({
      where: isDriver ? { trip: { is: { driverId } } } : {},
      include: tripExpenseInclude,
      orderBy: { createdAt: "desc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.fasahAppointment.findMany({
      include: { attachments: { select: attachmentMetadataSelect } },
      orderBy: { createdAt: "desc" },
      take: 100
    }),
    isDriver ? Promise.resolve([]) : prisma.companyRate.findMany({
      include: { customer: true },
      orderBy: [{ customer: { name: "asc" } }, { origin: "asc" }]
    }),
    isDriver ? Promise.resolve([]) : prisma.invoice.findMany({
      include: { customer: true, trips: { include: tripInclude } },
      orderBy: { issueDate: "desc" }
    }),
    isDriver ? Promise.resolve([]) : prisma.customer.findMany({
      select: { id: true, name: true, phone: true, email: true, address: true, taxNumber: true },
      orderBy: { name: "asc" }
    })
  ]);
  return {
    trucks: trucks.map(stateTruck),
    drivers: drivers.map(stateDriver),
    clearances: clearances.map(mapClearance),
    docs: trips.map(mapTrip),
    tripExpenses: tripExpenses.map(mapTripExpense),
    fasahAppointments: fasahAppointments.map(mapFasahAppointment),
    accounts: accounts.map(account => ({ ...account, createdAt: account.createdAt.toISOString() })),
    ports,
    tariffs: (tariffs || []).map(mapTariff),
    invoices: (invoices || []).map(mapInvoice),
    customers: customers || []
  };
}

router.get("/app-state", async (req, res) => {
  res.json(await getAppState(req));
});

router.get("/fasah/lookup", requireAdmin, async (req, res) => {
  const query = z.string().trim().min(1).max(100).safeParse(req.query.q);
  if (!query.success) return res.status(400).json({ error: "invalid_search_query" });

  const [clearances, appointments] = await Promise.all([
    prisma.customsClearance.findMany({
      where: {
        OR: [
          { declarationNumber: { contains: query.data, mode: "insensitive" } },
          { container: { containerNumber: { contains: query.data, mode: "insensitive" } } }
        ]
      },
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } },
      orderBy: { createdAt: "desc" },
      take: 50
    }),
    prisma.fasahAppointment.findMany({
      where: {
        OR: [
          { bookingReferenceNumber: { contains: query.data, mode: "insensitive" } },
          { entryDeclarationNumber: { contains: query.data, mode: "insensitive" } },
          { entryContainerNumber: { contains: query.data, mode: "insensitive" } },
          { entryBlNumber: { contains: query.data, mode: "insensitive" } },
          { exitDeclarationNumber: { contains: query.data, mode: "insensitive" } },
          { exitContainerNumber: { contains: query.data, mode: "insensitive" } },
          { exitBlNumber: { contains: query.data, mode: "insensitive" } },
          { vehiclePlateNumber: { contains: query.data, mode: "insensitive" } },
          { driverName: { contains: query.data, mode: "insensitive" } }
        ]
      },
      include: { attachments: { select: attachmentMetadataSelect } },
      orderBy: { createdAt: "desc" },
      take: 50
    })
  ]);
  res.json({
    clearances: clearances.map(mapClearance),
    appointments: appointments.map(mapFasahAppointment)
  });
});

router.post("/fasah/appointments/preview", requireAdmin, async (req, res) => {
  const input = z.object({
    fileName: z.string().trim().min(1).max(255).regex(/\.pdf$/i),
    data: z.string().min(1)
  }).safeParse(req.body);
  if (!input.success) return res.status(400).json({ error: "invalid_fasah_pdf" });

  const [file] = parseManualAttachments([{
    name: input.data.fileName,
    type: "application/pdf",
    data: input.data.data
  }]);
  const fields = await extractFasahAppointmentPdf(file.data);
  res.json({ fields });
});

router.post("/fasah/appointments", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  if (attachments.length !== 1 || attachments[0].contentType !== "application/pdf") {
    return res.status(400).json({ error: "invalid_fasah_pdf" });
  }
  const parsed = fasahAppointmentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_fasah_appointment" });
  const extracted = await extractFasahAppointmentPdf(attachments[0].data);
  if (extracted.bookingReferenceNumber &&
      extracted.bookingReferenceNumber !== parsed.data.bookingReferenceNumber) {
    return res.status(409).json({ error: "fasah_pdf_reference_mismatch" });
  }

  let appointment;
  try {
    appointment = await prisma.$transaction(async tx => {
      const created = await tx.fasahAppointment.create({
        data: {
          ...parsed.data,
          appointmentDate: parsed.data.appointmentDate
            ? new Date(`${parsed.data.appointmentDate}T00:00:00.000Z`)
            : null,
          attachments: { create: attachments }
        },
        include: { attachments: { select: attachmentMetadataSelect } }
      });
      await writeAudit(tx, req, "fasah_appointment.created", "FasahAppointment", created.id, {
        bookingReferenceNumber: created.bookingReferenceNumber,
        attachmentCount: attachments.length
      });
      return created;
    });
  } catch (error) {
    if (error?.code === "P2002") {
      throw Object.assign(new Error("fasah_appointment_exists"), {
        statusCode: 409,
        publicCode: "fasah_appointment_exists"
      });
    }
    throw error;
  }
  res.status(201).json(mapFasahAppointment(appointment));
});

router.patch("/fasah/appointments/:id", requireAdmin, async (req, res) => {
  const parsed = fasahAppointmentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_fasah_appointment" });
  const attachments = req.body?.attachments === undefined
    ? []
    : parseManualAttachments(req.body.attachments);
  if (attachments.length > 1 || attachments.some(attachment => attachment.contentType !== "application/pdf")) {
    return res.status(400).json({ error: "invalid_fasah_pdf" });
  }
  if (attachments.length) {
    const extracted = await extractFasahAppointmentPdf(attachments[0].data);
    if (extracted.bookingReferenceNumber &&
        extracted.bookingReferenceNumber !== parsed.data.bookingReferenceNumber) {
      return res.status(409).json({ error: "fasah_pdf_reference_mismatch" });
    }
  }

  try {
    const appointment = await prisma.$transaction(async tx => {
      const current = await tx.fasahAppointment.findUnique({ where: { id: req.params.id } });
      if (!current) throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
      const updated = await tx.fasahAppointment.update({
        where: { id: current.id },
        data: {
          ...parsed.data,
          appointmentDate: parsed.data.appointmentDate
            ? new Date(`${parsed.data.appointmentDate}T00:00:00.000Z`)
            : null,
          ...(attachments.length ? {
            attachments: { deleteMany: {}, create: attachments }
          } : {})
        },
        include: { attachments: { select: attachmentMetadataSelect } }
      });
      await writeAudit(tx, req, "fasah_appointment.updated", "FasahAppointment", updated.id, {
        bookingReferenceNumber: updated.bookingReferenceNumber,
        attachmentReplaced: attachments.length > 0
      });
      return updated;
    });
    res.json(mapFasahAppointment(appointment));
  } catch (error) {
    if (error?.code === "P2002") {
      throw Object.assign(new Error("fasah_appointment_exists"), {
        statusCode: 409,
        publicCode: "fasah_appointment_exists"
      });
    }
    throw error;
  }
});

router.delete("/fasah/appointments/:id", requireAdmin, async (req, res) => {
  await prisma.$transaction(async tx => {
    const appointment = await tx.fasahAppointment.findUnique({ where: { id: req.params.id } });
    if (!appointment) {
      throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
    }
    await writeAudit(tx, req, "fasah_appointment.deleted", "FasahAppointment", appointment.id, {
      bookingReferenceNumber: appointment.bookingReferenceNumber
    });
    await tx.fasahAppointment.delete({ where: { id: appointment.id } });
  });
  res.json({ id: req.params.id });
});

router.get("/import-templates/:type", requireAdmin, async (req, res) => {
  const type = req.params.type;
  const columns = type === "drivers" ? DRIVER_IMPORT_COLUMNS
    : type === "trucks" ? TRUCK_IMPORT_COLUMNS
      : null;
  if (!columns) return res.status(404).json({ error: "record_not_found" });

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "North World Transport Management";
  const worksheet = workbook.addWorksheet(type === "drivers" ? "السائقون" : "السيارات");
  worksheet.views = [{ rightToLeft: true }];
  worksheet.columns = columns.map(column => ({
    header: column.headers[0],
    key: column.key,
    width: column.key === "name" ? 28 : 24,
    style: { numFmt: "@" }
  }));
  worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  worksheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF173B5E" } };
  const instructions = workbook.addWorksheet("تعليمات");
  instructions.views = [{ rightToLeft: true }];
  instructions.getColumn(1).width = 95;
  instructions.addRows([
    ["استخدم الورقة الأولى لإدخال البيانات، واترك صف العناوين كما هو."],
    ["ارفع ملف بصيغة .xlsx، والحد الأقصى 500 صف و3 MB."],
    ...(type === "drivers"
      ? [["جميع حقول السائق مطلوبة. يجب أن يكون رقم الهوية ورقم جواز السفر غير مستخدمين مسبقاً."]]
      : [["رقم هوية السائق اختياري؛ عند إدخاله يجب أن يطابق هوية سائق نشط مسجل بالنظام."],
        ["يجب أن تكون أرقام الأسطول واللوحات والأرقام التسلسلية فريدة."]])
  ]);
  const buffer = Buffer.from(await workbook.xlsx.writeBuffer());
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", `attachment; filename="north-world-${type}-template.xlsx"`);
  res.setHeader("Content-Length", buffer.length);
  res.send(buffer);
});

router.post("/drivers/import", requireAdmin, async (req, res) => {
  const rows = await loadImportWorkbook(req.body, DRIVER_IMPORT_COLUMNS, driverImportRowSchema);
  const fileDuplicates = findDuplicateImportRows(rows, ["nationalId", "passportNumber"]);
  if (fileDuplicates.length) throw importFailure("import_conflict", 409, fileDuplicates);

  await prisma.$transaction(async tx => {
    const identityFields = ["nationalId", "passportNumber"];
    const existing = await tx.driver.findMany({
      where: {
        OR: [
          { nationalId: { in: rows.map(row => row.data.nationalId) } },
          { passportNumber: { in: rows.map(row => row.data.passportNumber) } }
        ]
      },
      select: { id: true, nationalId: true, passportNumber: true, deletedAt: true }
    });
    const resolutions = rows.map(row => ({
      row,
      resolution: resolveSoftDeletedRecord(existing, row.data, identityFields)
    }));
    const restoredIds = new Set();
    const conflicts = [];
    for (const { row, resolution } of resolutions) {
      if (resolution.kind === "conflict" ||
          resolution.kind === "restore" && restoredIds.has(resolution.record.id)) {
        conflicts.push({ row: row.row, code: "already_exists" });
      } else if (resolution.kind === "restore") {
        restoredIds.add(resolution.record.id);
      }
    }
    if (conflicts.length) throw importFailure("import_conflict", 409, conflicts);

    const rowsToCreate = [];
    for (const { row, resolution } of resolutions) {
      if (resolution.kind === "restore") {
        const driver = await tx.driver.update({
          where: { id: resolution.record.id },
          data: { ...row.data, isActive: true, deletedAt: null }
        });
        await writeAudit(tx, req, "driver.restored", "Driver", driver.id, { row: row.row });
      } else {
        rowsToCreate.push(row);
      }
    }
    if (rowsToCreate.length) {
      await tx.driver.createMany({ data: rowsToCreate.map(row => row.data) });
      const createdDrivers = await tx.driver.findMany({
        where: { nationalId: { in: rowsToCreate.map(row => row.data.nationalId) } },
        select: { id: true, nationalId: true }
      });
      const driverIds = new Map(createdDrivers.map(driver => [driver.nationalId, driver.id]));
      await tx.auditLog.createMany({
        data: rowsToCreate.map(row => ({
          actorId: req.user.id,
          action: "driver.imported",
          entityType: "Driver",
          entityId: driverIds.get(row.data.nationalId),
          metadata: { row: row.row }
        }))
      });
    }
  }, { timeout: 60_000 });
  res.status(201).json({ imported: rows.length });
});

router.post("/trucks/import", requireAdmin, async (req, res) => {
  const rows = await loadImportWorkbook(req.body, TRUCK_IMPORT_COLUMNS, truckImportRowSchema);
  const identityFields = ["fleetNumber", "plateNumber", "serialNumber"];
  const fileDuplicates = findDuplicateImportRows(rows, identityFields);
  if (fileDuplicates.length) throw importFailure("import_conflict", 409, fileDuplicates);

  await prisma.$transaction(async tx => {
    const existingTrucks = await tx.truck.findMany({
      where: {
        OR: [
          { fleetNumber: { in: rows.map(row => row.data.fleetNumber) } },
          { plateNumber: { in: rows.map(row => row.data.plateNumber) } },
          { serialNumber: { in: rows.map(row => row.data.serialNumber) } }
        ]
      },
      select: { id: true, fleetNumber: true, plateNumber: true, serialNumber: true, deletedAt: true }
    });
    const resolutions = rows.map(row => ({
      row,
      resolution: resolveSoftDeletedRecord(existingTrucks, row.data, identityFields)
    }));
    const restoredIds = new Set();
    const conflicts = [];
    for (const { row, resolution } of resolutions) {
      if (resolution.kind === "conflict" ||
          resolution.kind === "restore" && restoredIds.has(resolution.record.id)) {
        conflicts.push({ row: row.row, code: "already_exists" });
      } else if (resolution.kind === "restore") {
        restoredIds.add(resolution.record.id);
      }
    }

    const driverNationalIds = [...new Set(rows.map(row => row.data.driverNationalId).filter(Boolean))];
    const drivers = driverNationalIds.length ? await tx.driver.findMany({
      where: { nationalId: { in: driverNationalIds }, isActive: true, deletedAt: null },
      select: { id: true, nationalId: true }
    }) : [];
    const driverIds = new Map(drivers.map(driver => [driver.nationalId, driver.id]));
    for (const row of rows) {
      if (row.data.driverNationalId && !driverIds.has(row.data.driverNationalId)) {
        conflicts.push({ row: row.row, code: "driver_not_found" });
      }
    }
    if (conflicts.length) throw importFailure("import_conflict", 409, conflicts);

    const rowsToCreate = [];
    for (const { row, resolution } of resolutions) {
      const assignedDriverId = driverIds.get(row.data.driverNationalId) || null;
      if (resolution.kind === "restore") {
        const truck = await tx.truck.update({
          where: { id: resolution.record.id },
          data: {
            fleetNumber: row.data.fleetNumber,
            plateNumber: row.data.plateNumber,
            serialNumber: row.data.serialNumber,
            model: row.data.model,
            status: "AVAILABLE",
            deletedAt: null,
            assignedDriverId
          }
        });
        await writeAudit(tx, req, "truck.restored", "Truck", truck.id, { row: row.row });
      } else {
        rowsToCreate.push({ row, assignedDriverId });
      }
    }
    if (rowsToCreate.length) {
      await tx.truck.createMany({
        data: rowsToCreate.map(({ row, assignedDriverId }) => ({
          fleetNumber: row.data.fleetNumber,
          plateNumber: row.data.plateNumber,
          serialNumber: row.data.serialNumber,
          model: row.data.model,
          assignedDriverId
        }))
      });
      const createdTrucks = await tx.truck.findMany({
        where: { fleetNumber: { in: rowsToCreate.map(({ row }) => row.data.fleetNumber) } },
        select: { id: true, fleetNumber: true }
      });
      const truckIds = new Map(createdTrucks.map(truck => [truck.fleetNumber, truck.id]));
      await tx.auditLog.createMany({
        data: rowsToCreate.map(({ row }) => ({
          actorId: req.user.id,
          action: "truck.imported",
          entityType: "Truck",
          entityId: truckIds.get(row.data.fleetNumber),
          metadata: { row: row.row }
        }))
      });
    }
  }, { timeout: 60_000 });
  res.status(201).json({ imported: rows.length });
});

router.post("/clearances/manual", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  const parsed = manualClearanceSchema.safeParse(req.body);
  if (!parsed.success) {
    const confirmationRequired = parsed.error.issues.some(issue => issue.path[0] === "clearanceConfirmed");
    return res.status(400).json({
      error: confirmationRequired ? "clearance_confirmation_required" : "invalid_manual_clearance_input"
    });
  }

  const clearance = await prisma.$transaction(async tx => {
    const port = await tx.port.upsert({
      where: { name: parsed.data.portName },
      create: { name: parsed.data.portName, city: parsed.data.portCity },
      update: { city: parsed.data.portCity }
    });
    let container = await tx.container.findUnique({
      where: { containerNumber: parsed.data.containerNumber }
    });
    if (container && (container.size !== parsed.data.size || container.type !== parsed.data.type)) {
      throw Object.assign(new Error("container_details_conflict"), {
        statusCode: 409,
        publicCode: "container_details_conflict"
      });
    }
    if (!container) {
      container = await tx.container.create({
        data: {
          containerNumber: parsed.data.containerNumber,
          size: parsed.data.size,
          type: parsed.data.type
        }
      });
    }
    const created = await tx.customsClearance.create({
      data: {
        declarationNumber: parsed.data.declarationNumber,
        status: parsed.data.status,
        clearedAt: parsed.data.clearedAt
          ? new Date(`${parsed.data.clearedAt}T00:00:00.000Z`)
          : null,
        vesselName: parsed.data.vesselName || null,
        shippingSealNumber: parsed.data.sealNumber || null,
        containerId: container.id,
        portId: port.id,
        ...(attachments.length ? {
          attachments: { create: attachments }
        } : {})
      },
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } }
    });
    await writeAudit(tx, req, "clearance.manually_created", "CustomsClearance", created.id, {
      declarationNumber: created.declarationNumber,
      containerNumber: container.containerNumber,
      status: created.status,
      attachmentCount: attachments.length
    });
    return created;
  });
  res.status(201).json(mapClearance(clearance));
});

router.patch("/clearances/:id", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  const parsed = manualClearanceSchema.safeParse(req.body);
  if (!parsed.success) {
    const confirmationRequired = parsed.error.issues.some(issue => issue.path[0] === "clearanceConfirmed");
    return res.status(400).json({
      error: confirmationRequired ? "clearance_confirmation_required" : "invalid_manual_clearance_input"
    });
  }

  const clearance = await prisma.$transaction(async tx => {
    const current = await tx.customsClearance.findUnique({
      where: { id: req.params.id },
      include: {
        container: true,
        trip: { select: { id: true } },
        attachments: { select: { id: true, size: true } }
      }
    });
    if (!current) return null;
    if (current.trip) {
      throw Object.assign(new Error("clearance_has_trip"), {
        statusCode: 409,
        publicCode: "clearance_has_trip"
      });
    }

    const duplicateDeclaration = await tx.customsClearance.findFirst({
      where: { declarationNumber: parsed.data.declarationNumber, id: { not: current.id } },
      select: { id: true }
    });
    if (duplicateDeclaration) {
      throw Object.assign(new Error("record_already_exists"), {
        statusCode: 409,
        publicCode: "record_already_exists"
      });
    }

    if (current.attachments.length + attachments.length > MAX_ATTACHMENTS) {
      throw Object.assign(new Error("attachment_count_exceeded"), {
        statusCode: 400,
        publicCode: "attachment_count_exceeded"
      });
    }
    if (current.attachments.reduce((total, attachment) => total + attachment.size, 0) +
        attachments.reduce((total, attachment) => total + attachment.size, 0) > MAX_TOTAL_ATTACHMENT_SIZE) {
      throw Object.assign(new Error("attachment_size_exceeded"), {
        statusCode: 400,
        publicCode: "attachment_size_exceeded"
      });
    }

    const port = await tx.port.upsert({
      where: { name: parsed.data.portName },
      create: { name: parsed.data.portName, city: parsed.data.portCity },
      update: { city: parsed.data.portCity }
    });
    let container = await tx.container.findUnique({
      where: { containerNumber: parsed.data.containerNumber }
    });
    if (container && (container.size !== parsed.data.size || container.type !== parsed.data.type)) {
      const [otherClearances, trips] = await Promise.all([
        tx.customsClearance.count({ where: { containerId: container.id, id: { not: current.id } } }),
        tx.trip.count({ where: { containerId: container.id } })
      ]);
      if (otherClearances || trips) {
        throw Object.assign(new Error("container_details_conflict"), {
          statusCode: 409,
          publicCode: "container_details_conflict"
        });
      }
      container = await tx.container.update({
        where: { id: container.id },
        data: { size: parsed.data.size, type: parsed.data.type }
      });
    } else if (!container) {
      container = await tx.container.create({
        data: {
          containerNumber: parsed.data.containerNumber,
          size: parsed.data.size,
          type: parsed.data.type
        }
      });
    }

    const updated = await tx.customsClearance.update({
      where: { id: current.id },
      data: {
        declarationNumber: parsed.data.declarationNumber,
        status: parsed.data.status,
        clearedAt: parsed.data.clearedAt
          ? new Date(`${parsed.data.clearedAt}T00:00:00.000Z`)
          : null,
        vesselName: parsed.data.vesselName || null,
        shippingSealNumber: parsed.data.sealNumber || null,
        containerId: container.id,
        portId: port.id,
        ...(attachments.length ? { attachments: { create: attachments } } : {})
      },
      include: { container: true, port: true, attachments: { select: attachmentMetadataSelect } }
    });

    if (current.containerId !== container.id) {
      const [otherClearances, trips] = await Promise.all([
        tx.customsClearance.count({ where: { containerId: current.containerId } }),
        tx.trip.count({ where: { containerId: current.containerId } })
      ]);
      if (!otherClearances && !trips) {
        await tx.container.delete({ where: { id: current.containerId } });
      }
    }
    await writeAudit(tx, req, "clearance.updated", "CustomsClearance", updated.id, {
      declarationNumber: updated.declarationNumber,
      containerNumber: container.containerNumber,
      status: updated.status,
      attachmentCount: attachments.length
    });
    return updated;
  }, { isolationLevel: "Serializable" });

  if (!clearance) return res.status(404).json({ error: "record_not_found" });
  res.json(mapClearance(clearance));
});

router.post("/trucks", requireAdmin, async (req, res) => {
  const schema = z.object({
    fleetNumber: z.string().trim().min(1).max(32),
    plateNumber: z.string().trim().min(1).max(32),
    serialNumber: z.string().trim().min(1).max(64),
    model: z.string().trim().min(1).max(80),
    driverId: z.string().min(1)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_input" });
  const { driverId, ...truckData } = parsed.data;
  const driver = await prisma.driver.findFirst({
    where: { id: driverId, isActive: true, deletedAt: null }
  });
  if (!driver) return res.status(400).json({ error: "active_driver_required" });

  const truck = await prisma.$transaction(async tx => {
    const identityFields = ["fleetNumber", "plateNumber", "serialNumber"];
    const matches = await tx.truck.findMany({
      where: {
        OR: identityFields.map(field => ({ [field]: truckData[field] }))
      },
      select: {
        id: true,
        fleetNumber: true,
        plateNumber: true,
        serialNumber: true,
        deletedAt: true
      }
    });
    const resolution = resolveSoftDeletedRecord(matches, truckData, identityFields);
    if (resolution.kind === "conflict") {
      throw Object.assign(new Error("truck_details_conflict"), { statusCode: 409, publicCode: "truck_details_conflict" });
    }

    let saved;
    if (resolution.kind === "restore") {
      const activeTrip = await tx.trip.findFirst({
        where: { truckId: resolution.record.id, ...ACTIVE_TRIP_FILTER },
        select: { id: true }
      });
      if (activeTrip) {
        throw Object.assign(new Error("truck_has_active_trip"), { statusCode: 409, publicCode: "truck_has_active_trip" });
      }
      saved = await tx.truck.update({
        where: { id: resolution.record.id },
        data: { ...truckData, status: "AVAILABLE", deletedAt: null, assignedDriverId: driver.id }
      });
    } else {
      saved = await tx.truck.create({
        data: { ...truckData, assignedDriverId: driver.id }
      });
    }
    await writeAudit(tx, req, resolution.kind === "restore" ? "truck.restored" : "truck.created", "Truck", saved.id);
    return saved;
  });
  res.status(201).json(stateTruck(truck));
});

router.patch("/trucks/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    fleetNumber: z.string().trim().min(1).max(32).optional(),
    plateNumber: z.string().trim().min(1).max(32).optional(),
    serialNumber: z.string().trim().min(1).max(64).optional(),
    model: z.string().trim().min(1).max(80).optional(),
    status: z.enum(truckStatuses).optional(),
    driverId: z.string().nullable().optional()
  }).refine(value => Object.keys(value).length > 0);
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_update" });

  const truck = await prisma.$transaction(async tx => {
    const current = await tx.truck.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.deletedAt) {
      throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
    }
    const identityFields = ["fleetNumber", "plateNumber", "serialNumber"];
    const changedIdentityFields = identityFields.filter(field =>
      parsed.data[field] !== undefined && parsed.data[field] !== current[field]
    );
    if (changedIdentityFields.length) {
      const duplicate = await tx.truck.findFirst({
        where: {
          id: { not: current.id },
          OR: changedIdentityFields.map(field => ({ [field]: parsed.data[field] }))
        },
        select: { id: true }
      });
      if (duplicate) {
        throw Object.assign(new Error("truck_details_conflict"), { statusCode: 409, publicCode: "truck_details_conflict" });
      }
    }
    const activeTrip = await tx.trip.findFirst({
      where: { truckId: current.id, ...ACTIVE_TRIP_FILTER },
      select: { id: true }
    });
    if (activeTrip && (parsed.data.status && parsed.data.status !== current.status ||
        parsed.data.driverId !== undefined && parsed.data.driverId !== current.assignedDriverId)) {
      throw Object.assign(new Error("truck_has_active_trip"), { statusCode: 409, publicCode: "truck_has_active_trip" });
    }

    let assignedDriverId = current.assignedDriverId;
    if (parsed.data.driverId !== undefined) {
      if (parsed.data.driverId === null || parsed.data.driverId === "") {
        assignedDriverId = null;
      } else {
        const driver = await tx.driver.findFirst({
          where: { id: parsed.data.driverId, isActive: true, deletedAt: null }
        });
        if (!driver) throw Object.assign(new Error("active_driver_required"), { statusCode: 400, publicCode: "active_driver_required" });
        assignedDriverId = driver.id;
      }
    }
    const updated = await tx.truck.update({
      where: { id: current.id },
      data: {
        ...(parsed.data.fleetNumber !== undefined ? { fleetNumber: parsed.data.fleetNumber } : {}),
        ...(parsed.data.plateNumber !== undefined ? { plateNumber: parsed.data.plateNumber } : {}),
        ...(parsed.data.serialNumber !== undefined ? { serialNumber: parsed.data.serialNumber } : {}),
        ...(parsed.data.model !== undefined ? { model: parsed.data.model } : {}),
        ...(parsed.data.status ? { status: parsed.data.status } : {}),
        ...(parsed.data.driverId !== undefined ? { assignedDriverId } : {})
      }
    });
    await writeAudit(tx, req, "truck.updated", "Truck", updated.id, parsed.data);
    return updated;
  });
  res.json(stateTruck(truck));
});

async function deleteTruckRecord(truckId, tx) {
  const truck = await tx.truck.findUniqueOrThrow({ where: { id: truckId } });
  const activeTrip = await tx.trip.findFirst({ where: { truckId, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
  if (activeTrip) throw Object.assign(new Error("truck_has_active_trip"), { statusCode: 409, publicCode: "truck_has_active_trip" });
  await tx.truck.delete({ where: { id: truck.id } });
  return truck;
}

router.delete("/trucks/:id", requireAdmin, async (req, res) => {
  const truck = await prisma.$transaction(async tx => {
    const deleted = await deleteTruckRecord(req.params.id, tx);
    await writeAudit(tx, req, "truck.deleted", "Truck", deleted.id);
    return deleted;
  }, { isolationLevel: "Serializable" });
  res.json({ id: truck.id });
});

router.post("/trucks/bulk-delete", requireAdmin, async (req, res) => {
  const parsed = z.object({ ids: z.array(z.string()).min(1).max(200) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_truck_ids" });
  const result = await prisma.$transaction(async tx => {
    const deleted = [];
    const blocked = [];
    for (const id of new Set(parsed.data.ids)) {
      const truck = await tx.truck.findUnique({ where: { id } });
      if (!truck) continue;
      const activeTrip = await tx.trip.findFirst({ where: { truckId: id, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
      if (activeTrip) {
        blocked.push(id);
        continue;
      }
      await tx.truck.delete({ where: { id } });
      deleted.push(id);
      await writeAudit(tx, req, "truck.deleted", "Truck", id);
    }
    return { deleted, blocked };
  }, { isolationLevel: "Serializable" });
  res.json(result);
});

router.post("/drivers", requireAdmin, async (req, res) => {
  const schema = z.object({
    name: z.string().trim().min(1).max(120),
    nationalId: z.string().trim().min(1).max(32),
    phone: z.string().trim().min(1).max(32),
    passportNumber: z.string().trim().min(1).max(64)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_input" });

  const driver = await prisma.$transaction(async tx => {
    const identityFields = ["nationalId", "passportNumber"];
    const matches = await tx.driver.findMany({
      where: {
        OR: identityFields.map(field => ({ [field]: parsed.data[field] }))
      },
      select: { id: true, nationalId: true, passportNumber: true, deletedAt: true }
    });
    const resolution = resolveSoftDeletedRecord(matches, parsed.data, identityFields);
    if (resolution.kind === "conflict") {
      throw Object.assign(new Error("driver_details_conflict"), { statusCode: 409, publicCode: "driver_details_conflict" });
    }

    let saved;
    if (resolution.kind === "restore") {
      const activeTrip = await tx.trip.findFirst({
        where: { driverId: resolution.record.id, ...ACTIVE_TRIP_FILTER },
        select: { id: true }
      });
      if (activeTrip) {
        throw Object.assign(new Error("driver_has_active_trip"), { statusCode: 409, publicCode: "driver_has_active_trip" });
      }
      saved = await tx.driver.update({
        where: { id: resolution.record.id },
        data: { ...parsed.data, isActive: true, deletedAt: null }
      });
    } else {
      saved = await tx.driver.create({ data: parsed.data });
    }
    await writeAudit(tx, req, resolution.kind === "restore" ? "driver.restored" : "driver.created", "Driver", saved.id);
    return saved;
  });
  res.status(201).json(stateDriver(driver));
});

router.patch("/drivers/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    name: z.string().trim().min(1).max(120),
    nationalId: z.string().trim().min(1).max(32),
    phone: z.string().trim().min(1).max(32),
    passportNumber: z.string().trim().min(1).max(64)
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_input" });

  const driver = await prisma.$transaction(async tx => {
    const current = await tx.driver.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.deletedAt) {
      throw Object.assign(new Error("record_not_found"), { statusCode: 404, publicCode: "record_not_found" });
    }
    const duplicate = await tx.driver.findFirst({
      where: {
        id: { not: current.id },
        OR: [
          { nationalId: parsed.data.nationalId },
          { passportNumber: parsed.data.passportNumber }
        ]
      },
      select: { id: true }
    });
    if (duplicate) {
      throw Object.assign(new Error("driver_details_conflict"), { statusCode: 409, publicCode: "driver_details_conflict" });
    }
    const updated = await tx.driver.update({ where: { id: current.id }, data: parsed.data });
    await writeAudit(tx, req, "driver.updated", "Driver", updated.id);
    return updated;
  });
  res.json(stateDriver(driver));
});

async function softDeleteDriver(req, driverId, tx = prisma) {
  const driver = await tx.driver.findUniqueOrThrow({ where: { id: driverId } });
  const activeTrip = await tx.trip.findFirst({ where: { driverId, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
  if (activeTrip) throw Object.assign(new Error("driver_has_active_trip"), { statusCode: 409, publicCode: "driver_has_active_trip" });

  await tx.truck.updateMany({ where: { assignedDriverId: driverId }, data: { assignedDriverId: null } });
  await tx.user.updateMany({ where: { driverId }, data: { isActive: false } });
  await tx.session.deleteMany({ where: { user: { driverId } } });
  return tx.driver.update({ where: { id: driverId }, data: { deletedAt: new Date(), isActive: false } });
}

router.delete("/drivers/:id", requireAdmin, async (req, res) => {
  const driver = await prisma.$transaction(async tx => {
    const deleted = await softDeleteDriver(req, req.params.id, tx);
    await writeAudit(tx, req, "driver.deleted", "Driver", deleted.id);
    return deleted;
  });
  res.json(stateDriver(driver));
});

router.post("/drivers/bulk-delete", requireAdmin, async (req, res) => {
  const parsed = z.object({ ids: z.array(z.string()).min(1).max(200) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_driver_ids" });
  const result = await prisma.$transaction(async tx => {
    const deleted = [];
    const blocked = [];
    for (const id of new Set(parsed.data.ids)) {
      const activeTrip = await tx.trip.findFirst({ where: { driverId: id, ...ACTIVE_TRIP_FILTER }, select: { id: true } });
      if (activeTrip) {
        blocked.push(id);
        continue;
      }
      const driver = await tx.driver.findUnique({ where: { id } });
      if (!driver || driver.deletedAt) continue;
      const updated = await softDeleteDriver(req, id, tx);
      deleted.push(updated.id);
      await writeAudit(tx, req, "driver.deleted", "Driver", updated.id);
    }
    return { deleted, blocked };
  });
  res.json(result);
});

router.post("/accounts", requireAdmin, async (req, res) => {
  const schema = z.object({
    username: z.string().trim().min(3).max(64),
    password: z.string().min(12).max(128),
    role: z.enum(["ADMIN", "DRIVER"]),
    driverId: z.string().optional().default("")
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_account_input" });

  const username = normalizedUsername(parsed.data.username);
  if (parsed.data.role === "DRIVER" && !parsed.data.driverId) {
    return res.status(400).json({ error: "active_driver_required" });
  }
  if (parsed.data.role === "ADMIN" && parsed.data.driverId) {
    return res.status(400).json({ error: "admin_must_not_link_driver" });
  }
  if (parsed.data.driverId) {
    const driver = await prisma.driver.findFirst({
      where: { id: parsed.data.driverId, isActive: true, deletedAt: null, user: null }
    });
    if (!driver) return res.status(409).json({ error: "driver_account_unavailable" });
  }
  const passwordHash = await hashPassword(parsed.data.password);
  const account = await prisma.$transaction(async tx => {
    const created = await tx.user.create({
      data: {
        username,
        passwordHash,
        role: parsed.data.role,
        driverId: parsed.data.role === "DRIVER" ? parsed.data.driverId : null
      },
      select: { id: true, username: true, role: true, driverId: true, createdAt: true, deletedAt: true }
    });
    await writeAudit(tx, req, "account.created", "User", created.id, { role: created.role });
    return created;
  });
  res.status(201).json({ ...account, createdAt: account.createdAt.toISOString() });
});

router.patch("/accounts/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    username: z.string().trim().min(3).max(64),
    role: z.enum(["ADMIN", "DRIVER"]),
    driverId: z.string().optional().default(""),
    password: z.string().min(12).max(128).optional()
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_account_input" });

  const current = await prisma.user.findUniqueOrThrow({ where: { id: req.params.id } });
  if (current.deletedAt) return res.status(404).json({ error: "record_not_found" });
  if (current.role === "ADMIN" && parsed.data.role !== "ADMIN") {
    const adminCount = await prisma.user.count({ where: { role: "ADMIN", isActive: true, deletedAt: null } });
    if (adminCount <= 1) return res.status(409).json({ error: "last_admin_required" });
  }
  if (parsed.data.role === "DRIVER" && !parsed.data.driverId) {
    return res.status(400).json({ error: "active_driver_required" });
  }
  if (parsed.data.role === "ADMIN" && parsed.data.driverId) {
    return res.status(400).json({ error: "admin_must_not_link_driver" });
  }
  if (parsed.data.driverId) {
    const driver = await prisma.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { id: { not: current.id } } }
      }
    });
    if (!driver) return res.status(409).json({ error: "driver_account_unavailable" });
  }

  const account = await prisma.$transaction(async tx => {
    const updated = await tx.user.update({
      where: { id: current.id },
      data: {
        username: normalizedUsername(parsed.data.username),
        role: parsed.data.role,
        driverId: parsed.data.role === "DRIVER" ? parsed.data.driverId : null,
        ...(parsed.data.password ? { passwordHash: await hashPassword(parsed.data.password) } : {})
      },
      select: { id: true, username: true, role: true, driverId: true, createdAt: true, deletedAt: true }
    });
    await tx.session.deleteMany({ where: { userId: current.id } });
    await writeAudit(tx, req, "account.updated", "User", updated.id, { role: updated.role });
    return updated;
  });
  res.json({ ...account, createdAt: account.createdAt.toISOString() });
});

router.post("/trips/document-reference/preview", requireAdmin, async (req, res) => {
  const input = z.object({
    fileName: z.string().trim().min(1).max(255).regex(/\.pdf$/i),
    data: z.string().min(1)
  }).safeParse(req.body);
  if (!input.success) return res.status(400).json({ error: "invalid_transport_document_pdf" });

  const [file] = parseManualAttachments([{
    name: input.data.fileName,
    type: "application/pdf",
    data: input.data.data
  }]);
  const reference = await extractTransportDocumentReferencePdf(file.data);
  res.json(reference);
});

router.post("/trips", requireAdmin, async (req, res) => {
  const attachments = parseManualAttachments(req.body?.attachments);
  const schema = z.object({
    clearanceId: z.string().min(1),
    truckId: z.string().min(1),
    driverId: z.string().min(1),
    customerName: z.string().trim().min(1).max(160),
    destination: z.string().trim().min(1).max(240),
    returnDueAt: z.string().date().optional().or(z.literal("")),
    clientRate: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).optional().or(z.literal("")),
    ...manualDocumentReferenceFields
  }).refine(hasCompleteManualDocumentReference, {
    path: ["manualDocumentDate"],
    message: "manual_document_date_must_match_number"
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_input" });

  const trip = await prisma.$transaction(async tx => {
    const clearance = await tx.customsClearance.findUnique({
      where: { id: parsed.data.clearanceId },
      include: { container: true, port: true, trip: true }
    });
    if (!clearance || clearance.status !== "CLEARED" || clearance.trip) {
      throw Object.assign(new Error("clearance_unavailable"), { statusCode: 409, publicCode: "clearance_unavailable" });
    }
    const truck = await tx.truck.findFirst({
      where: { id: parsed.data.truckId, status: "AVAILABLE", deletedAt: null }
    });
    if (!truck) throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });
    const driver = await tx.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { role: "DRIVER", isActive: true, deletedAt: null } }
      }
    });
    if (!driver) throw Object.assign(new Error("driver_account_required"), { statusCode: 409, publicCode: "driver_account_required" });

    const customer = await tx.customer.upsert({
      where: { name: parsed.data.customerName },
      create: { name: parsed.data.customerName },
      update: {}
    });
    const created = await tx.trip.create({
      data: {
        tripType: "PORT",
        originLocation: clearance.port.name,
        deliveryDestination: parsed.data.destination,
        clientRate: parsed.data.clientRate ? Number(parsed.data.clientRate) : null,
        billingStatus: "UNBILLED",
        emptyReturnDueAt: parsed.data.returnDueAt ? new Date(`${parsed.data.returnDueAt}T00:00:00.000Z`) : null,
        truckId: truck.id,
        truckFleetNumber: truck.fleetNumber,
        truckPlateNumber: truck.plateNumber,
        truckSerialNumber: truck.serialNumber,
        truckModel: truck.model,
        driverId: driver.id,
        customerId: customer.id,
        portId: clearance.portId,
        containerId: clearance.containerId,
        customsClearanceId: clearance.id,
        transportDocument: {
          create: {
            documentNumber: parsed.data.manualDocumentNumber || null,
            status: parsed.data.manualDocumentNumber ? "ISSUED" : "DRAFT",
            source: parsed.data.manualDocumentNumber ? "MANUAL_ENTRY" : "INTERNAL_DRAFT",
            issuedAt: parsed.data.manualDocumentDate
              ? new Date(`${parsed.data.manualDocumentDate}T00:00:00.000Z`)
              : null,
            ...(attachments.length ? {
              attachments: { create: attachments }
            } : {})
          }
        }
      },
      include: tripInclude
    });
    await tx.truck.update({
      where: { id: truck.id },
      data: { status: "ASSIGNED", assignedDriverId: driver.id }
    });
    await writeAudit(tx, req, "trip.created", "Trip", created.id, {
      clearanceId: clearance.id,
      attachmentCount: attachments.length
    });
    return created;
  }, { isolationLevel: "Serializable" });
  res.status(201).json(mapTrip(trip));
});

router.post("/trips/domestic", requireAdmin, async (req, res) => {
  const parsed = domesticTripSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_domestic_trip_input" });

  const trip = await prisma.$transaction(async tx => {
    const truck = await tx.truck.findFirst({
      where: { id: parsed.data.truckId, status: "AVAILABLE", deletedAt: null }
    });
    if (!truck) throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });

    const driver = await tx.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { role: "DRIVER", isActive: true, deletedAt: null } }
      }
    });
    if (!driver) throw Object.assign(new Error("driver_account_required"), { statusCode: 409, publicCode: "driver_account_required" });

    const customer = await tx.customer.upsert({
      where: { name: parsed.data.customerName },
      create: { name: parsed.data.customerName },
      update: {}
    });

    const created = await tx.trip.create({
      data: {
        tripType: "DOMESTIC",
        operationAt: parsed.data.manualDocumentDate
          ? new Date(`${parsed.data.manualDocumentDate}T00:00:00.000Z`)
          : new Date(),
        originLocation: parsed.data.origin,
        deliveryDestination: parsed.data.destination,
        billingStatus: "UNBILLED",
        truckId: truck.id,
        truckFleetNumber: truck.fleetNumber,
        truckPlateNumber: truck.plateNumber,
        truckSerialNumber: truck.serialNumber,
        truckModel: truck.model,
        driverId: driver.id,
        customerId: customer.id
      },
      include: tripInclude
    });

    await tx.truck.update({
      where: { id: truck.id },
      data: { status: "ASSIGNED", assignedDriverId: driver.id }
    });

    await writeAudit(tx, req, "trip.domestic_created", "Trip", created.id, {
      customerName: customer.name
    });

    return created;
  }, { isolationLevel: "Serializable" });

  res.status(201).json(mapTrip(trip));
});

async function findEditableDomesticTrip(tx, tripId) {
  const trip = await tx.trip.findUniqueOrThrow({
    where: { id: tripId },
    include: {
      truck: true,
      stageUpdates: { select: { id: true } },
      expenses: { select: { id: true } },
      transportDocument: { select: { id: true } }
    }
  });
  if (trip.tripType !== "DOMESTIC" ||
      trip.driverAcceptedAt ||
      trip.currentStage ||
      trip.emptyReturnedAt ||
      trip.billingStatus !== "UNBILLED" ||
      trip.invoiceId ||
      trip.stageUpdates.length ||
      trip.expenses.length ||
      trip.transportDocument ||
      !trip.truck ||
      trip.truck.status !== "ASSIGNED" ||
      trip.truck.assignedDriverId !== trip.driverId) {
    throw Object.assign(new Error("domestic_trip_unavailable"), {
      statusCode: 409,
      publicCode: "domestic_trip_unavailable"
    });
  }
  return trip;
}

router.patch("/trips/domestic/:id", requireAdmin, async (req, res) => {
  const parsed = domesticTripSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_domestic_trip_input" });

  const trip = await prisma.$transaction(async tx => {
    const current = await findEditableDomesticTrip(tx, req.params.id);
    const sameTruck = parsed.data.truckId === current.truckId;
    const truck = await tx.truck.findFirst({
      where: {
        id: parsed.data.truckId,
        deletedAt: null,
        ...(sameTruck ? { status: "ASSIGNED" } : { status: "AVAILABLE" })
      }
    });
    if (!truck) {
      throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });
    }

    const driver = await tx.driver.findFirst({
      where: {
        id: parsed.data.driverId,
        isActive: true,
        deletedAt: null,
        user: { is: { role: "DRIVER", isActive: true, deletedAt: null } }
      }
    });
    if (!driver) {
      throw Object.assign(new Error("driver_account_required"), { statusCode: 409, publicCode: "driver_account_required" });
    }

    const customer = await tx.customer.upsert({
      where: { name: parsed.data.customerName },
      create: { name: parsed.data.customerName },
      update: {}
    });

    if (sameTruck) {
      const assigned = await tx.truck.updateMany({
        where: {
          id: current.truckId,
          status: "ASSIGNED",
          assignedDriverId: current.driverId,
          deletedAt: null
        },
        data: { assignedDriverId: driver.id }
      });
      if (assigned.count !== 1) {
        throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });
      }
    } else {
      const assigned = await tx.truck.updateMany({
        where: { id: truck.id, status: "AVAILABLE", deletedAt: null },
        data: { status: "ASSIGNED", assignedDriverId: driver.id }
      });
      if (assigned.count !== 1) {
        throw Object.assign(new Error("truck_unavailable"), { statusCode: 409, publicCode: "truck_unavailable" });
      }
      const released = await tx.truck.updateMany({
        where: {
          id: current.truckId,
          status: "ASSIGNED",
          assignedDriverId: current.driverId,
          deletedAt: null
        },
        data: { status: "AVAILABLE", assignedDriverId: null }
      });
      if (released.count !== 1) {
        throw Object.assign(new Error("domestic_trip_unavailable"), {
          statusCode: 409,
          publicCode: "domestic_trip_unavailable"
        });
      }
    }

    const updated = await tx.trip.update({
      where: { id: current.id },
      data: {
        customerId: customer.id,
        originLocation: parsed.data.origin,
        deliveryDestination: parsed.data.destination,
        operationAt: parsed.data.manualDocumentDate
          ? new Date(`${parsed.data.manualDocumentDate}T00:00:00.000Z`)
          : new Date(),
        truckId: truck.id,
        truckFleetNumber: truck.fleetNumber,
        truckPlateNumber: truck.plateNumber,
        truckSerialNumber: truck.serialNumber,
        truckModel: truck.model,
        driverId: driver.id
      },
      include: tripInclude
    });
    await writeAudit(tx, req, "trip.domestic_updated", "Trip", updated.id, {
      customerName: customer.name,
      previousTruckId: current.truckId,
      truckId: truck.id,
      driverId: driver.id
    });
    return updated;
  }, { isolationLevel: "Serializable" });

  res.json(mapTrip(trip));
});

router.delete("/trips/domestic/:id", requireAdmin, async (req, res) => {
  await prisma.$transaction(async tx => {
    const trip = await findEditableDomesticTrip(tx, req.params.id);
    const released = await tx.truck.updateMany({
      where: {
        id: trip.truckId,
        status: "ASSIGNED",
        assignedDriverId: trip.driverId,
        deletedAt: null
      },
      data: { status: "AVAILABLE", assignedDriverId: null }
    });
    if (released.count !== 1) {
      throw Object.assign(new Error("domestic_trip_unavailable"), {
        statusCode: 409,
        publicCode: "domestic_trip_unavailable"
      });
    }
    await writeAudit(tx, req, "trip.domestic_deleted", "Trip", trip.id, {
      customerId: trip.customerId,
      truckId: trip.truckId
    });
    await tx.trip.delete({ where: { id: trip.id } });
  }, { isolationLevel: "Serializable" });

  res.json({ id: req.params.id });
});

router.get("/tariffs", requireAdmin, async (req, res) => {
  const customerId = req.query.customerId ? String(req.query.customerId) : undefined;
  const tariffs = await prisma.companyRate.findMany({
    where: customerId ? { customerId } : {},
    include: { customer: true },
    orderBy: [{ customer: { name: "asc" } }, { origin: "asc" }]
  });
  res.json(tariffs.map(mapTariff));
});

router.post("/tariffs", requireAdmin, async (req, res) => {
  const schema = z.object({
    customerName: z.string().trim().min(1).max(160),
    origin: z.string().trim().min(1).max(240),
    destination: z.string().trim().min(1).max(240),
    cargoType: z.string().trim().max(100).optional().default(""),
    price: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).refine(v => Number(v) >= 0),
    driverCost: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).optional().or(z.literal("")),
    notes: z.string().trim().max(500).optional().default("")
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_tariff_input" });

  const customer = await prisma.customer.upsert({
    where: { name: parsed.data.customerName },
    create: { name: parsed.data.customerName },
    update: {}
  });

  const created = await prisma.companyRate.create({
    data: {
      customerId: customer.id,
      origin: parsed.data.origin,
      destination: parsed.data.destination,
      cargoType: parsed.data.cargoType || null,
      price: Number(parsed.data.price),
      driverCost: parsed.data.driverCost ? Number(parsed.data.driverCost) : null,
      notes: parsed.data.notes || null
    },
    include: { customer: true }
  });

  res.status(201).json(mapTariff(created));
});

router.put("/tariffs/:id", requireAdmin, async (req, res) => {
  const schema = z.object({
    origin: z.string().trim().min(1).max(240),
    destination: z.string().trim().min(1).max(240),
    cargoType: z.string().trim().max(100).optional().default(""),
    price: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).refine(v => Number(v) >= 0),
    driverCost: z.string().trim().regex(/^\d{1,10}(?:\.\d{1,2})?$/).optional().or(z.literal("")),
    notes: z.string().trim().max(500).optional().default("")
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_tariff_input" });

  const updated = await prisma.companyRate.update({
    where: { id: req.params.id },
    data: {
      origin: parsed.data.origin,
      destination: parsed.data.destination,
      cargoType: parsed.data.cargoType || null,
      price: Number(parsed.data.price),
      driverCost: parsed.data.driverCost ? Number(parsed.data.driverCost) : null,
      notes: parsed.data.notes || null
    },
    include: { customer: true }
  });

  res.json(mapTariff(updated));
});

router.delete("/tariffs/:id", requireAdmin, async (req, res) => {
  await prisma.companyRate.delete({ where: { id: req.params.id } });
  res.json({ success: true });
});

router.get("/tariffs/suggest", requireAdmin, async (req, res) => {
  const { customerName, origin, destination } = req.query;
  if (!customerName || !destination) return res.json({ rate: null });

  const rate = await prisma.companyRate.findFirst({
    where: {
      customer: { name: { equals: String(customerName).trim(), mode: "insensitive" } },
      destination: { contains: String(destination).trim(), mode: "insensitive" },
      ...(origin ? { origin: { contains: String(origin).trim(), mode: "insensitive" } } : {})
    },
    orderBy: { updatedAt: "desc" }
  });

  res.json({
    rate: rate ? {
      price: rate.price.toString(),
      driverCost: rate.driverCost ? rate.driverCost.toString() : "",
      origin: rate.origin,
      destination: rate.destination,
      cargoType: rate.cargoType
    } : null
  });
});

router.get("/invoices", requireAdmin, async (req, res) => {
  const invoices = await prisma.invoice.findMany({
    include: {
      customer: true,
      trips: { include: tripInclude }
    },
    orderBy: { issueDate: "desc" }
  });
  res.json(invoices.map(mapInvoice));
});

router.post("/invoices", requireAdmin, async (req, res) => {
  const schema = z.object({
    customerName: z.string().trim().min(1).max(160),
    tripIds: z.array(z.string().min(1)).min(1),
    taxRate: z.number().min(0).max(100).default(15),
    notes: z.string().trim().max(500).optional().default(""),
    customInvoiceNumber: z.string().trim().max(60).optional()
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_invoice_input" });

  const invoice = await prisma.$transaction(async tx => {
    const customer = await tx.customer.upsert({
      where: { name: parsed.data.customerName },
      create: { name: parsed.data.customerName },
      update: {}
    });

    const trips = await tx.trip.findMany({
      where: {
        id: { in: parsed.data.tripIds },
        customerId: customer.id,
        billingStatus: "UNBILLED",
        cancelledAt: null
      }
    });

    if (trips.length === 0) {
      throw Object.assign(new Error("no_eligible_trips"), { statusCode: 400, publicCode: "no_eligible_trips" });
    }

    const subtotal = trips.reduce((acc, trip) => {
      return acc + (trip.clientRate ? Number(trip.clientRate) : 0);
    }, 0);

    const taxRate = parsed.data.taxRate;
    const taxAmount = Number(((subtotal * taxRate) / 100).toFixed(2));
    const totalAmount = Number((subtotal + taxAmount).toFixed(2));

    let invoiceNumber = parsed.data.customInvoiceNumber;
    if (!invoiceNumber) {
      const count = await tx.invoice.count();
      const year = new Date().getFullYear();
      invoiceNumber = `INV-${year}-${String(count + 1).padStart(4, "0")}`;
    }

    const created = await tx.invoice.create({
      data: {
        invoiceNumber,
        customerId: customer.id,
        status: "ISSUED",
        subtotal,
        taxRate,
        taxAmount,
        totalAmount,
        notes: parsed.data.notes || null,
        trips: {
          connect: trips.map(t => ({ id: t.id }))
        }
      },
      include: {
        customer: true,
        trips: { include: tripInclude }
      }
    });

    await tx.trip.updateMany({
      where: { id: { in: trips.map(t => t.id) } },
      data: {
        billingStatus: "INVOICED",
        invoiceId: created.id
      }
    });

    await writeAudit(tx, req, "invoice.created", "Invoice", created.id, {
      invoiceNumber,
      tripCount: trips.length,
      totalAmount
    });

    return created;
  });

  res.status(201).json(mapInvoice(invoice));
});

router.get("/invoices/:id", requireAdmin, async (req, res) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: req.params.id },
    include: {
      customer: true,
      trips: { include: tripInclude }
    }
  });
  if (!invoice) return res.status(404).json({ error: "invoice_not_found" });
  res.json(mapInvoice(invoice));
});

router.patch("/invoices/:id/status", requireAdmin, async (req, res) => {
  const schema = z.object({
    status: z.enum(["DRAFT", "ISSUED", "PAID", "CANCELLED"])
  });
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_status" });

  const updated = await prisma.$transaction(async tx => {
    const inv = await tx.invoice.findUnique({
      where: { id: req.params.id },
      include: { trips: true }
    });
    if (!inv) throw Object.assign(new Error("not_found"), { statusCode: 404 });

    const newStatus = parsed.data.status;
    const invUpdated = await tx.invoice.update({
      where: { id: inv.id },
      data: { status: newStatus },
      include: {
        customer: true,
        trips: { include: tripInclude }
      }
    });

    if (newStatus === "PAID") {
      await tx.trip.updateMany({
        where: { invoiceId: inv.id },
        data: { billingStatus: "PAID" }
      });
    } else if (newStatus === "CANCELLED") {
      await tx.trip.updateMany({
        where: { invoiceId: inv.id },
        data: { billingStatus: "UNBILLED", invoiceId: null }
      });
    } else if (newStatus === "ISSUED" || newStatus === "DRAFT") {
      await tx.trip.updateMany({
        where: { invoiceId: inv.id },
        data: { billingStatus: "INVOICED" }
      });
    }

    return invUpdated;
  });

  res.json(mapInvoice(updated));
});

router.post("/trip-expenses", async (req, res) => {
  if (req.user.role !== "DRIVER" || !req.user.driverId) {
    return res.status(403).json({ error: "driver_only" });
  }
  const attachments = parseManualAttachments(req.body?.attachments);
  const parsed = tripExpenseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_expense" });

  const expense = await prisma.$transaction(async tx => {
    const trip = await tx.trip.findFirst({
      where: {
        id: parsed.data.tripId,
        driverId: req.user.driverId,
        driverAcceptedAt: { not: null },
        cancelledAt: null
      },
      select: { id: true }
    });
    if (!trip) {
      throw Object.assign(new Error("expense_trip_unavailable"), {
        statusCode: 404,
        publicCode: "expense_trip_unavailable"
      });
    }

    const created = await tx.tripExpense.create({
      data: {
        tripId: trip.id,
        amount: parsed.data.amount,
        type: parsed.data.type,
        notes: parsed.data.notes || null,
        ...(attachments.length ? { attachments: { create: attachments } } : {})
      },
      include: tripExpenseInclude
    });
    await writeAudit(tx, req, "trip_expense.created", "TripExpense", created.id, {
      tripId: trip.id,
      amount: parsed.data.amount,
      type: parsed.data.type
    });
    return created;
  });
  res.status(201).json(mapTripExpense(expense));
});

router.patch("/trip-expenses/:id", requireAdmin, async (req, res) => {
  const parsed = tripExpenseUpdateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_expense" });
  const attachments = parseManualAttachments(req.body?.attachments);

  const expense = await prisma.$transaction(async tx => {
    const updated = await tx.tripExpense.update({
      where: { id: req.params.id },
      data: {
        amount: parsed.data.amount,
        type: parsed.data.type,
        notes: parsed.data.notes || null,
        ...(attachments.length ? {
          attachments: { deleteMany: {}, create: attachments }
        } : {})
      },
      include: tripExpenseInclude
    });
    await writeAudit(tx, req, "trip_expense.updated", "TripExpense", updated.id, {
      tripId: updated.tripId,
      amount: parsed.data.amount,
      type: parsed.data.type,
      attachmentsReplaced: attachments.length > 0
    });
    return updated;
  });
  res.json(mapTripExpense(expense));
});

router.delete("/trip-expenses/:id", requireAdmin, async (req, res) => {
  await prisma.$transaction(async tx => {
    const expense = await tx.tripExpense.findUniqueOrThrow({ where: { id: req.params.id } });
    await writeAudit(tx, req, "trip_expense.deleted", "TripExpense", expense.id, {
      tripId: expense.tripId,
      amount: expense.amount.toString(),
      type: expense.type
    });
    await tx.tripExpense.delete({ where: { id: expense.id } });
  });
  res.json({ id: req.params.id });
});

router.post("/archive/merge-pdf", requireAdmin, async (req, res) => {
  const parsed = archivePdfMergeSchema.safeParse(req.body);
  if (!parsed.success) {
    const selectionLimit = parsed.error.issues.some(issue => issue.path[0] === "tripIds");
    return res.status(selectionLimit ? 400 : 400).json({
      error: selectionLimit ? "archive_selection_limit" : "invalid_archive_selection"
    });
  }

  const trips = await prisma.trip.findMany({
    where: { id: { in: parsed.data.tripIds } },
    include: {
      customsClearance: {
        include: { attachments: { where: { contentType: "application/pdf" }, select: { id: true, size: true, data: true } } }
      },
      transportDocument: {
        include: { attachments: { where: { contentType: "application/pdf" }, select: { id: true, size: true, data: true } } }
      }
    }
  });
  const tripById = new Map(trips.map(trip => [trip.id, trip]));
  const orderedTrips = parsed.data.tripIds.map(tripId => tripById.get(tripId)).filter(Boolean);

  const pdfAttachments = [];
  for (const trip of orderedTrips) {
    if (parsed.data.source !== "transport") {
      pdfAttachments.push(...(trip.customsClearance?.attachments || []));
    }
    if (parsed.data.source !== "clearance") {
      pdfAttachments.push(...(trip.transportDocument?.attachments || []));
    }
  }
  if (!pdfAttachments.length) return res.status(400).json({ error: "archive_pdf_no_files" });

  const totalSize = pdfAttachments.reduce((total, attachment) => total + attachment.size, 0);
  if (totalSize > MAX_ARCHIVE_PDF_MERGE_BYTES) {
    return res.status(413).json({ error: "archive_pdf_too_large" });
  }

  try {
    const merged = await PDFDocument.create();
    for (const attachment of pdfAttachments) {
      const sourcePdf = await PDFDocument.load(Buffer.from(attachment.data), {
        ignoreEncryption: false,
        updateMetadata: false
      });
      const copiedPages = await merged.copyPages(sourcePdf, sourcePdf.getPageIndices());
      copiedPages.forEach(page => merged.addPage(page));
    }
    const output = await merged.save();

    await prisma.auditLog.create({
      data: {
        actorId: req.user.id,
        action: "archive.pdf_merged",
        entityType: "Trip",
        entityId: orderedTrips.map(trip => trip.id).join(","),
        metadata: {
          tripCount: orderedTrips.length,
          source: parsed.data.source,
          pdfCount: pdfAttachments.length
        }
      }
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="north-world-archive-${new Date().toISOString().slice(0, 10)}.pdf"`);
    res.setHeader("Content-Length", output.length);
    res.send(Buffer.from(output));
  } catch {
    res.status(400).json({ error: "archive_pdf_invalid" });
  }
});

router.get("/attachments/:id", async (req, res) => {
  const attachment = await prisma.operationAttachment.findUnique({
    where: { id: req.params.id },
    include: {
      clearance: { select: { trip: { select: { driverId: true } } } },
      transportDocument: { select: { trip: { select: { driverId: true } } } },
      tripExpense: { select: { trip: { select: { driverId: true } } } },
      fasahAppointment: { select: { id: true } }
    }
  });
  if (!attachment) return res.status(404).json({ error: "record_not_found" });

  const allowedDriverIds = [
    attachment.clearance?.trip?.driverId,
    attachment.transportDocument?.trip?.driverId,
    attachment.tripExpense?.trip?.driverId
  ];
  if (req.user.role !== "ADMIN" && !allowedDriverIds.includes(req.user.driverId)) {
    return res.status(403).json({ error: "attachment_access_denied" });
  }

  const fallbackName = attachment.contentType === "application/pdf" ? "document.pdf"
    : attachment.contentType === "image/png" ? "document.png" : "document.jpg";
  const filename = attachment.originalName || fallbackName;
  const encodedFilename = encodeURIComponent(filename)
    .replace(/[!'()*]/g, character => `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
  res.setHeader("Content-Type", attachment.contentType);
  res.setHeader("Content-Length", attachment.size);
  res.setHeader("Content-Disposition", `attachment; filename="${fallbackName}"; filename*=UTF-8''${encodedFilename}`);
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.send(Buffer.from(attachment.data));
});

router.post("/trips/:id/accept", async (req, res) => {
  if (req.user.role !== "DRIVER") return res.status(403).json({ error: "driver_required" });
  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.driverId !== req.user.driverId || current.driverAcceptedAt || current.emptyReturnedAt || current.cancelledAt) {
      throw Object.assign(new Error("trip_request_unavailable"), { statusCode: 409, publicCode: "trip_request_unavailable" });
    }
    const acceptedAt = new Date();
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: { driverAcceptedAt: acceptedAt, currentStage: "EN_ROUTE_TO_PORT" },
      include: tripInclude
    });
    await tx.truck.update({ where: { id: current.truckId }, data: { status: "ON_TRIP" } });
    await writeAudit(tx, req, "trip.accepted", "Trip", updated.id);
    return updated;
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.post("/trips/:id/advance", async (req, res) => {
  if (req.user.role !== "DRIVER") return res.status(403).json({ error: "driver_required" });
  const parsed = z.object({ eir: z.string().trim().max(80).optional().default("") }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_update" });

  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    const index = current.currentStage ? tripStages.indexOf(current.currentStage) : -1;
    if (current.driverId !== req.user.driverId || !current.driverAcceptedAt ||
        current.emptyReturnedAt || current.cancelledAt || index < 0 || index >= tripStages.length - 1) {
      throw Object.assign(new Error("trip_stage_unavailable"), { statusCode: 409, publicCode: "trip_stage_unavailable" });
    }

    const completedStage = tripStages[index];
    const nextStage = tripStages[index + 1];
    const completedAt = new Date();
    await tx.tripStageUpdate.create({
      data: { tripId: current.id, stage: completedStage, completedAt }
    });
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: {
        currentStage: nextStage,
        ...(nextStage === "EMPTY_RETURNED" ? {
          emptyReturnedAt: completedAt,
          eirReceiptNumber: parsed.data.eir || null
        } : {})
      },
      include: tripInclude
    });
    if (nextStage === "EMPTY_RETURNED") {
      await tx.tripStageUpdate.create({
        data: { tripId: current.id, stage: "EMPTY_RETURNED", completedAt }
      });
      await tx.truck.update({ where: { id: current.truckId }, data: { status: "AVAILABLE" } });
    }
    await writeAudit(tx, req, "trip.stage.updated", "Trip", updated.id, { stage: nextStage });
    return tx.trip.findUniqueOrThrow({ where: { id: updated.id }, include: tripInclude });
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.post("/trips/:id/return", requireAdmin, async (req, res) => {
  const parsed = z.object({ eir: z.string().trim().max(80).optional().default("") }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "invalid_trip_return" });
  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({ where: { id: req.params.id } });
    if (current.cancelledAt) throw Object.assign(new Error("trip_cancelled"), { statusCode: 409, publicCode: "trip_cancelled" });
    if (current.emptyReturnedAt) throw Object.assign(new Error("trip_already_returned"), { statusCode: 409, publicCode: "trip_already_returned" });

    const completedAt = new Date();
    const existing = new Set((await tx.tripStageUpdate.findMany({
      where: { tripId: current.id },
      select: { stage: true }
    })).map(update => update.stage));
    for (const stage of tripStages) {
      if (!existing.has(stage)) {
        await tx.tripStageUpdate.create({ data: { tripId: current.id, stage, completedAt } });
      }
    }
    const updated = await tx.trip.update({
      where: { id: current.id },
      data: {
        driverAcceptedAt: current.driverAcceptedAt || completedAt,
        currentStage: "EMPTY_RETURNED",
        emptyReturnedAt: completedAt,
        eirReceiptNumber: parsed.data.eir || null
      },
      include: tripInclude
    });
    await tx.truck.update({ where: { id: current.truckId }, data: { status: "AVAILABLE" } });
    await writeAudit(tx, req, "trip.returned", "Trip", updated.id);
    return updated;
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.post("/trips/:id/cancel", requireAdmin, async (req, res) => {
  const trip = await prisma.$transaction(async tx => {
    const current = await tx.trip.findUniqueOrThrow({
      where: { id: req.params.id },
      include: { truck: true }
    });
    if (!current.driverAcceptedAt ||
        current.emptyReturnedAt ||
        current.cancelledAt ||
        current.currentStage === "EMPTY_RETURNED" ||
        current.billingStatus !== "UNBILLED" ||
        current.invoiceId ||
        !current.truck) {
      throw Object.assign(new Error("trip_cancel_unavailable"), {
        statusCode: 409,
        publicCode: "trip_cancel_unavailable"
      });
    }

    const released = await tx.truck.updateMany({
      where: {
        id: current.truckId,
        status: { in: ["ASSIGNED", "ON_TRIP"] },
        assignedDriverId: current.driverId,
        deletedAt: null
      },
      data: { status: "AVAILABLE", assignedDriverId: null }
    });
    if (released.count !== 1) {
      throw Object.assign(new Error("trip_cancel_unavailable"), {
        statusCode: 409,
        publicCode: "trip_cancel_unavailable"
      });
    }

    const cancelled = await tx.trip.update({
      where: { id: current.id },
      data: { cancelledAt: new Date() },
      include: tripInclude
    });
    await writeAudit(tx, req, "trip.cancelled", "Trip", cancelled.id, {
      previousStage: current.currentStage,
      truckId: current.truckId,
      driverId: current.driverId
    });
    return cancelled;
  }, { isolationLevel: "Serializable" });
  res.json(mapTrip(trip));
});

router.get("/clearances.xlsx", requireAdmin, async (req, res) => {
  const parsed = z.object({
    q: z.string().trim().max(100).optional().default("")
  }).safeParse(req.query);
  if (!parsed.success) return res.status(400).json({ error: "invalid_search_query" });

  const query = parsed.data.q;
  const clearances = await prisma.customsClearance.findMany({
    where: query ? {
      OR: [
        { declarationNumber: { contains: query, mode: "insensitive" } },
        { container: { is: { containerNumber: { contains: query, mode: "insensitive" } } } }
      ]
    } : {},
    include: { container: true, port: true, attachments: { select: { id: true } } },
    orderBy: { createdAt: "desc" }
  });
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("بيانات الفسح", { views: [{ rightToLeft: true }] });
  sheet.columns = [
    { header: "تاريخ تسجيل العملية", key: "createdAt", width: 22 },
    { header: "تاريخ الفسح", key: "clearedAt", width: 18 },
    { header: "رقم البيان الجمركي", key: "declarationNumber", width: 24 },
    { header: "رقم الحاوية", key: "containerNumber", width: 20 },
    { header: "المقاس", key: "size", width: 14 },
    { header: "نوع الحاوية", key: "type", width: 20 },
    { header: "رقم الرصاص الملاحي", key: "sealNumber", width: 22 },
    { header: "اسم الباخرة", key: "vesselName", width: 26 },
    { header: "الميناء", key: "port", width: 24 },
    { header: "مدينة الميناء", key: "portCity", width: 20 },
    { header: "حالة الفسح", key: "status", width: 18 },
    { header: "مصدر البيانات", key: "source", width: 20 },
    { header: "عدد المرفقات", key: "attachmentCount", width: 16 }
  ];
  sheet.views = [{ rightToLeft: true, state: "frozen", ySplit: 1 }];
  sheet.autoFilter = { from: "A1", to: "M1" };
  sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF17324D" } };
  sheet.getColumn(1).numFmt = "yyyy-mm-dd hh:mm";
  sheet.getColumn(2).numFmt = "yyyy-mm-dd";
  const clearanceStatuses = {
    CLEARED: "مفسوح",
    PENDING: "قيد الإجراء",
    ON_HOLD: "معلق",
    REJECTED: "مرفوض"
  };
  const containerTypes = {
    DRY: "جاف",
    REFRIGERATED: "مبرد",
    OPEN_TOP: "سقف مفتوح",
    FLAT_RACK: "مسطح",
    TANK: "صهريج",
    OTHER: "أخرى"
  };
  const clearanceSources = {
    MANUAL: "إدخال يدوي",
    OFFICIAL_INTEGRATION: "تكامل رسمي"
  };
  for (const clearance of clearances) {
    sheet.addRow({
      createdAt: clearance.createdAt,
      clearedAt: clearance.clearedAt || "",
      declarationNumber: clearance.declarationNumber,
      containerNumber: clearance.container.containerNumber,
      size: clearance.container.size === "FT_20" ? "20 قدم" : "40 قدم",
      type: containerTypes[clearance.container.type] || "أخرى",
      sealNumber: clearance.shippingSealNumber || "",
      vesselName: clearance.vesselName || "",
      port: clearance.port.name,
      portCity: clearance.port.city,
      status: clearanceStatuses[clearance.status] || clearance.status,
      source: clearanceSources[clearance.source] || clearance.source,
      attachmentCount: clearance.attachments.length
    });
  }
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", `attachment; filename="north-world-clearances-${new Date().toISOString().slice(0, 10)}.xlsx"`);
  await workbook.xlsx.write(res);
  res.end();
});

router.get("/reports.xlsx", requireAdmin, async (req, res) => {
  const filtersSchema = z.object({
    from: z.string().date().optional(),
    to: z.string().date().optional(),
    port: z.string().trim().max(120).optional(),
    customer: z.string().trim().max(160).optional(),
    returnStatus: z.enum(["returned", "active", "overdue", "soon"]).optional()
  });
  const parsed = filtersSchema.safeParse(req.query);
  if (!parsed.success) return res.status(400).json({ error: "invalid_report_filters" });
  const filters = parsed.data;
  const where = {
    cancelledAt: null,
    ...(filters.from || filters.to ? {
      operationAt: {
        ...(filters.from ? { gte: new Date(`${filters.from}T00:00:00.000Z`) } : {}),
        ...(filters.to ? { lte: new Date(`${filters.to}T23:59:59.999Z`) } : {})
      }
    } : {}),
    ...(filters.port ? { port: { name: filters.port } } : {}),
    ...(filters.customer ? { customer: { name: { contains: filters.customer, mode: "insensitive" } } } : {}),
    ...(filters.returnStatus === "returned" ? { emptyReturnedAt: { not: null } } : {}),
    ...(filters.returnStatus && filters.returnStatus !== "returned" ? { emptyReturnedAt: null } : {})
  };
  const trips = await prisma.trip.findMany({
    where,
    include: tripInclude,
    orderBy: { operationAt: "desc" }
  });
  const filtered = trips.filter(trip => {
    if (!filters.returnStatus || filters.returnStatus === "returned") return true;
    const freeTimeEndsAt = trip.freeTimeEndsAt || trip.emptyReturnDueAt;
    if (!freeTimeEndsAt) return filters.returnStatus === "active";
    const days = Math.ceil((freeTimeEndsAt.getTime() - Date.now()) / 86400000);
    if (filters.returnStatus === "overdue") return days < 0;
    if (filters.returnStatus === "soon") return days >= 0 && days <= 2;
    return days > 2;
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("تقرير العمليات", { views: [{ rightToLeft: true }] });
  sheet.columns = [
    { header: "تاريخ العملية", key: "operationAt", width: 18 },
    { header: "تاريخ الفسح", key: "clearedAt", width: 18 },
    { header: "الشركة المستلمة", key: "customer", width: 28 },
    { header: "اسم السائق", key: "driver", width: 24 },
    { header: "رقم الهوية / الإقامة", key: "nationalId", width: 22 },
    { header: "الجوال", key: "phone", width: 18 },
    { header: "رقم وثيقة بيان", key: "documentNumber", width: 24 },
    { header: "حالة الوثيقة", key: "documentStatus", width: 18 },
    { header: "رقم لوحة الشاحنة", key: "plateNumber", width: 22 },
    { header: "رقم الأسطول", key: "fleetNumber", width: 16 },
    { header: "رقم الحاوية", key: "containerNumber", width: 20 },
    { header: "المقاس", key: "size", width: 12 },
    { header: "النوع", key: "type", width: 16 },
    { header: "رقم الرصاص الملاحي", key: "sealNumber", width: 22 },
    { header: "رقم البيان الجمركي", key: "declarationNumber", width: 22 },
    { header: "من - الميناء", key: "port", width: 28 },
    { header: "إلى - الوجهة", key: "destination", width: 28 },
    { header: "موعد إعادة الفارغ", key: "returnDueAt", width: 20 },
    { header: "تاريخ عودة الفارغ", key: "returnedAt", width: 20 },
    { header: "رقم إيصال EIR", key: "eir", width: 20 },
    { header: "نهاية فترة السماح المجانية", key: "freeTimeEndsAt", width: 26 },
    { header: "حالة عودة الفارغ", key: "returnStatus", width: 22 }
  ];
  sheet.views = [{ rightToLeft: true, state: "frozen", ySplit: 1 }];
  sheet.autoFilter = { from: "A1", to: "V1" };
  sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF17324D" } };
  for (const column of [1, 2, 18, 19, 21]) {
    sheet.getColumn(column).numFmt = "yyyy-mm-dd";
  }
  for (const trip of filtered) {
    const freeTimeEndsAt = trip.freeTimeEndsAt || trip.emptyReturnDueAt;
    const daysRemaining = freeTimeEndsAt
      ? Math.ceil((freeTimeEndsAt.getTime() - Date.now()) / 86400000)
      : null;
    const returnStatus = trip.emptyReturnedAt
      ? "تمت الإعادة"
      : daysRemaining === null ? "غير محدد"
        : daysRemaining < 0 ? "متأخرة"
          : daysRemaining <= 2 ? "تقترب المهلة" : "ضمن المهلة";
    const row = sheet.addRow({
      operationAt: trip.operationAt,
      clearedAt: trip.customsClearance.clearedAt || "",
      customer: trip.customer.name,
      driver: trip.driver.name,
      nationalId: trip.driver.nationalId,
      phone: trip.driver.phone,
      documentNumber: trip.transportDocument?.documentNumber || "غير صادر",
      documentStatus: trip.transportDocument?.source === "MANUAL_ENTRY"
        ? "مدخل يدوياً"
        : trip.transportDocument?.status || "DRAFT",
      plateNumber: trip.truck?.plateNumber || trip.truckPlateNumber,
      fleetNumber: trip.truck?.fleetNumber || trip.truckFleetNumber,
      containerNumber: trip.container.containerNumber,
      size: trip.container.size === "FT_20" ? "20 قدم" : "40 قدم",
      type: trip.container.type,
      sealNumber: trip.customsClearance.shippingSealNumber || "",
      declarationNumber: trip.customsClearance.declarationNumber,
      port: trip.port.name,
      destination: trip.deliveryDestination,
      returnDueAt: trip.emptyReturnDueAt || "",
      returnedAt: trip.emptyReturnedAt || "",
      eir: trip.eirReceiptNumber || "",
      freeTimeEndsAt: freeTimeEndsAt || "",
      returnStatus
    });
    const returnCell = row.getCell(22);
    if (trip.emptyReturnedAt) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFDDF4E5" } };
    } else if (daysRemaining !== null && daysRemaining < 0) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFCE2E2" } };
    } else if (daysRemaining !== null && daysRemaining <= 2) {
      returnCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF1C7" } };
    }
  }
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  res.setHeader("Content-Disposition", `attachment; filename="north-world-report-${new Date().toISOString().slice(0, 10)}.xlsx"`);
  await workbook.xlsx.write(res);
  res.end();
});

router.get("/ports", requireAdmin, async (req, res) => {
  const ports = await prisma.port.findMany({ orderBy: { name: "asc" } });
  res.json(ports);
});

export default router;
