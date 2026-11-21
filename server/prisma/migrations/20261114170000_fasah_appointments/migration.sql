CREATE TABLE "FasahAppointment" (
    "id" TEXT NOT NULL,
    "bookingReferenceNumber" TEXT NOT NULL,
    "operatorTicketNumber" TEXT,
    "zoneGateName" TEXT,
    "portContractorId" TEXT,
    "portContractorName" TEXT,
    "portName" TEXT,
    "appointmentDate" DATE,
    "appointmentTime" TEXT,
    "vehiclePlateNumber" TEXT,
    "vehiclePlateType" TEXT,
    "vehicleColor" TEXT,
    "vehicleRefId" TEXT,
    "vehicleSerialId" TEXT,
    "vehicleModel" TEXT,
    "driverName" TEXT,
    "driverMobileNumber" TEXT,
    "driverLicenseNumber" TEXT,
    "entryLocation" TEXT,
    "entryBlNumber" TEXT,
    "entryDeclarationNumber" TEXT,
    "entryContainerNumber" TEXT,
    "entryCargoType" TEXT,
    "entrySerialNumber" TEXT,
    "exitLocation" TEXT,
    "exitBlNumber" TEXT,
    "exitDeclarationNumber" TEXT,
    "exitContainerNumber" TEXT,
    "exitCargoType" TEXT,
    "exitSerialNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FasahAppointment_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "FasahAppointment_bookingReferenceNumber_key"
    ON "FasahAppointment"("bookingReferenceNumber");
CREATE INDEX "FasahAppointment_appointmentDate_createdAt_idx"
    ON "FasahAppointment"("appointmentDate", "createdAt");
CREATE INDEX "FasahAppointment_vehiclePlateNumber_idx"
    ON "FasahAppointment"("vehiclePlateNumber");
CREATE INDEX "FasahAppointment_exitDeclarationNumber_idx"
    ON "FasahAppointment"("exitDeclarationNumber");
CREATE INDEX "FasahAppointment_exitContainerNumber_idx"
    ON "FasahAppointment"("exitContainerNumber");

ALTER TABLE "OperationAttachment"
    DROP CONSTRAINT "OperationAttachment_one_parent_check";

ALTER TABLE "OperationAttachment"
    ADD COLUMN "fasahAppointmentId" TEXT,
    ADD CONSTRAINT "OperationAttachment_one_parent_check"
        CHECK (num_nonnulls("clearanceId", "transportDocumentId", "tripExpenseId", "fasahAppointmentId") = 1);

CREATE INDEX "OperationAttachment_fasahAppointmentId_createdAt_idx"
    ON "OperationAttachment"("fasahAppointmentId", "createdAt");

ALTER TABLE "OperationAttachment"
    ADD CONSTRAINT "OperationAttachment_fasahAppointmentId_fkey"
    FOREIGN KEY ("fasahAppointmentId") REFERENCES "FasahAppointment"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
