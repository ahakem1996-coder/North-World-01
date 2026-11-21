-- CreateEnum
CREATE TYPE "TripType" AS ENUM ('PORT', 'DOMESTIC');

-- CreateEnum
CREATE TYPE "BillingStatus" AS ENUM ('UNBILLED', 'INVOICED', 'PAID');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('DRAFT', 'ISSUED', 'PAID', 'CANCELLED');

-- AlterTable Customer
ALTER TABLE "Customer" ADD COLUMN "taxNumber" TEXT;

-- AlterTable Trip: make customsClearanceId, portId, containerId nullable, and add new fields
ALTER TABLE "Trip" ALTER COLUMN "portId" DROP NOT NULL;
ALTER TABLE "Trip" ALTER COLUMN "containerId" DROP NOT NULL;
ALTER TABLE "Trip" ALTER COLUMN "customsClearanceId" DROP NOT NULL;
ALTER TABLE "Trip" ADD COLUMN "tripType" "TripType" NOT NULL DEFAULT 'PORT';
ALTER TABLE "Trip" ADD COLUMN "originLocation" TEXT;
ALTER TABLE "Trip" ADD COLUMN "cargoDescription" TEXT;
ALTER TABLE "Trip" ADD COLUMN "cargoWaybillNumber" TEXT;
ALTER TABLE "Trip" ADD COLUMN "clientRate" DECIMAL(12,2);
ALTER TABLE "Trip" ADD COLUMN "driverFee" DECIMAL(12,2);
ALTER TABLE "Trip" ADD COLUMN "billingStatus" "BillingStatus" NOT NULL DEFAULT 'UNBILLED';
ALTER TABLE "Trip" ADD COLUMN "invoiceId" TEXT;

-- CreateTable CompanyRate
CREATE TABLE "CompanyRate" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "cargoType" TEXT,
    "price" DECIMAL(12,2) NOT NULL,
    "driverCost" DECIMAL(12,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable Invoice
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "status" "InvoiceStatus" NOT NULL DEFAULT 'ISSUED',
    "subtotal" DECIMAL(12,2) NOT NULL,
    "taxRate" DECIMAL(5,2) NOT NULL DEFAULT 15.00,
    "taxAmount" DECIMAL(12,2) NOT NULL,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndexes
CREATE INDEX "CompanyRate_customerId_idx" ON "CompanyRate"("customerId");
CREATE INDEX "CompanyRate_origin_destination_idx" ON "CompanyRate"("origin", "destination");

CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");
CREATE INDEX "Invoice_customerId_issueDate_idx" ON "Invoice"("customerId", "issueDate");
CREATE INDEX "Invoice_status_idx" ON "Invoice"("status");

CREATE INDEX "Trip_tripType_operationAt_idx" ON "Trip"("tripType", "operationAt");
CREATE INDEX "Trip_billingStatus_idx" ON "Trip"("billingStatus");
CREATE INDEX "Trip_invoiceId_idx" ON "Trip"("invoiceId");

-- AddForeignKeys
ALTER TABLE "CompanyRate" ADD CONSTRAINT "CompanyRate_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
