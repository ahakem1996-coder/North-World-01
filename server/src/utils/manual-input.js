import { z } from "zod";

export const manualDocumentReferenceFields = {
  manualDocumentNumber: z.string().trim().max(80).optional().or(z.literal("")),
  manualDocumentDate: z.string().date().optional().or(z.literal(""))
};

export function hasCompleteManualDocumentReference(value) {
  return Boolean(value.manualDocumentNumber) === Boolean(value.manualDocumentDate);
}

export const manualDocumentReferenceSchema = z.object(manualDocumentReferenceFields)
  .refine(hasCompleteManualDocumentReference, {
    path: ["manualDocumentDate"],
    message: "manual_document_date_must_match_number"
  });

export const manualClearanceSchema = z.object({
  declarationNumber: z.string().trim().min(1).max(64),
  containerNumber: z.string().trim().min(4).max(32).transform(value => value.toUpperCase()),
  size: z.enum(["FT_20", "FT_40"]),
  type: z.enum(["DRY", "REFRIGERATED", "OPEN_TOP", "FLAT_RACK", "TANK", "OTHER"]),
  sealNumber: z.string().trim().max(64).optional().default(""),
  vesselName: z.string().trim().max(120).optional().default(""),
  portName: z.string().trim().min(1).max(120),
  portCity: z.string().trim().min(1).max(120),
  status: z.enum(["PENDING", "CLEARED", "ON_HOLD", "REJECTED"]),
  clearedAt: z.string().date().optional().or(z.literal("")),
  clearanceConfirmed: z.boolean().optional().default(false)
}).refine(value => value.status !== "CLEARED" || Boolean(value.clearedAt), {
  path: ["clearedAt"],
  message: "cleared_date_required"
}).refine(value => value.status !== "CLEARED" || value.clearanceConfirmed, {
  path: ["clearanceConfirmed"],
  message: "clearance_confirmation_required"
});
