-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "TruckStatus" AS ENUM ('AVAILABLE', 'ASSIGNED', 'ON_TRIP', 'MAINTENANCE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "TripStage" AS ENUM ('EN_ROUTE_TO_PORT', 'CONTAINER_PICKED_UP', 'EN_ROUTE_TO_CUSTOMER', 'ARRIVED_AT_CUSTOMER', 'DELIVERED', 'RETURNING_EMPTY', 'EMPTY_RETURNED');

-- CreateEnum
CREATE TYPE "ContainerSize" AS ENUM ('FT_20', 'FT_40');

-- CreateEnum
CREATE TYPE "ContainerType" AS ENUM ('DRY', 'REFRIGERATED', 'OPEN_TOP', 'FLAT_RACK', 'TANK', 'OTHER');

-- CreateEnum
CREATE TYPE "ClearanceStatus" AS ENUM ('PENDING', 'CLEARED', 'ON_HOLD', 'REJECTED');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('DRAFT', 'ISSUED', 'CANCELLED', 'EXPIRED', 'FAILED');

-- CreateEnum
CREATE TYPE "ClearanceSource" AS ENUM ('MANUAL', 'OFFICIAL_INTEGRATION');

-- CreateEnum
CREATE TYPE "DocumentSource" AS ENUM ('INTERNAL_DRAFT', 'MANUAL_ENTRY', 'OFFICIAL_INTEGRATION');

-- CreateEnum
CREATE TYPE "IntegrationProvider" AS ENUM ('FASAH', 'BAYAN', 'NAQL', 'RABIT');

-- CreateEnum
CREATE TYPE "IntegrationStatus" AS ENUM ('CONNECTED', 'DISCONNECTED', 'DEGRADED', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'DRIVER');

-- CreateTable
CREATE TABLE "Truck" (
    "id" TEXT NOT NULL,
    "fleetNumber" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "status" "TruckStatus" NOT NULL DEFAULT 'AVAILABLE',
    "assignedDriverId" TEXT,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'DRIVER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deletedAt" TIMESTAMP(3),
    "driverId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminSetupClaim" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminSetupClaim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Port" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Port_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Container" (
    "id" TEXT NOT NULL,
    "containerNumber" TEXT NOT NULL,
    "size" "ContainerSize" NOT NULL,
    "type" "ContainerType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Container_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomsClearance" (
    "id" TEXT NOT NULL,
    "declarationNumber" TEXT NOT NULL,
    "status" "ClearanceStatus" NOT NULL DEFAULT 'PENDING',
    "source" "ClearanceSource" NOT NULL DEFAULT 'MANUAL',
    "clearedAt" TIMESTAMP(3),
    "vesselName" TEXT,
    "shippingSealNumber" TEXT,
    "containerId" TEXT NOT NULL,
    "portId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomsClearance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "operationAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryDestination" TEXT NOT NULL,
    "emptyReturnDueAt" TIMESTAMP(3),
    "emptyReturnedAt" TIMESTAMP(3),
    "eirReceiptNumber" TEXT,
    "freeTimeEndsAt" TIMESTAMP(3),
    "driverAcceptedAt" TIMESTAMP(3),
    "currentStage" "TripStage",
    "truckId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "portId" TEXT NOT NULL,
    "containerId" TEXT NOT NULL,
    "customsClearanceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripStageUpdate" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "stage" "TripStage" NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripStageUpdate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransportDocument" (
    "id" TEXT NOT NULL,
    "documentNumber" TEXT,
    "status" "DocumentStatus" NOT NULL DEFAULT 'DRAFT',
    "source" "DocumentSource" NOT NULL DEFAULT 'INTERNAL_DRAFT',
    "issuedAt" TIMESTAMP(3),
    "pdfUrl" TEXT,
    "externalReference" TEXT,
    "tripId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransportDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IntegrationHealth" (
    "id" TEXT NOT NULL,
    "provider" "IntegrationProvider" NOT NULL,
    "status" "IntegrationStatus" NOT NULL DEFAULT 'UNKNOWN',
    "checkedAt" TIMESTAMP(3),
    "message" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IntegrationHealth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Truck_fleetNumber_key" ON "Truck"("fleetNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Truck_plateNumber_key" ON "Truck"("plateNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Truck_serialNumber_key" ON "Truck"("serialNumber");

-- CreateIndex
CREATE INDEX "Truck_status_idx" ON "Truck"("status");

-- CreateIndex
CREATE INDEX "Truck_assignedDriverId_idx" ON "Truck"("assignedDriverId");

-- CreateIndex
CREATE INDEX "Truck_deletedAt_idx" ON "Truck"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_nationalId_key" ON "Driver"("nationalId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_licenseNumber_key" ON "Driver"("licenseNumber");

-- CreateIndex
CREATE INDEX "Driver_name_idx" ON "Driver"("name");

-- CreateIndex
CREATE INDEX "Driver_isActive_idx" ON "Driver"("isActive");

-- CreateIndex
CREATE INDEX "Driver_deletedAt_idx" ON "Driver"("deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_driverId_key" ON "User"("driverId");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_isActive_deletedAt_idx" ON "User"("isActive", "deletedAt");

-- CreateIndex
CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");

-- CreateIndex
CREATE INDEX "Session_userId_expiresAt_idx" ON "Session"("userId", "expiresAt");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "AuditLog_actorId_createdAt_idx" ON "AuditLog"("actorId", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_createdAt_idx" ON "AuditLog"("entityType", "entityId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_name_key" ON "Customer"("name");

-- CreateIndex
CREATE INDEX "Customer_name_idx" ON "Customer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Port_name_key" ON "Port"("name");

-- CreateIndex
CREATE INDEX "Port_city_idx" ON "Port"("city");

-- CreateIndex
CREATE UNIQUE INDEX "Container_containerNumber_key" ON "Container"("containerNumber");

-- CreateIndex
CREATE INDEX "Container_type_size_idx" ON "Container"("type", "size");

-- CreateIndex
CREATE UNIQUE INDEX "CustomsClearance_declarationNumber_key" ON "CustomsClearance"("declarationNumber");

-- CreateIndex
CREATE INDEX "CustomsClearance_status_clearedAt_idx" ON "CustomsClearance"("status", "clearedAt");

-- CreateIndex
CREATE INDEX "CustomsClearance_portId_createdAt_idx" ON "CustomsClearance"("portId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Trip_customsClearanceId_key" ON "Trip"("customsClearanceId");

-- CreateIndex
CREATE INDEX "Trip_operationAt_idx" ON "Trip"("operationAt");

-- CreateIndex
CREATE INDEX "Trip_customerId_operationAt_idx" ON "Trip"("customerId", "operationAt");

-- CreateIndex
CREATE INDEX "Trip_portId_operationAt_idx" ON "Trip"("portId", "operationAt");

-- CreateIndex
CREATE INDEX "Trip_emptyReturnDueAt_emptyReturnedAt_idx" ON "Trip"("emptyReturnDueAt", "emptyReturnedAt");

-- CreateIndex
CREATE INDEX "Trip_truckId_operationAt_idx" ON "Trip"("truckId", "operationAt");

-- CreateIndex
CREATE INDEX "Trip_containerId_operationAt_idx" ON "Trip"("containerId", "operationAt");

-- CreateIndex
CREATE INDEX "Trip_driverId_driverAcceptedAt_idx" ON "Trip"("driverId", "driverAcceptedAt");

-- CreateIndex
CREATE INDEX "TripStageUpdate_tripId_completedAt_idx" ON "TripStageUpdate"("tripId", "completedAt");

-- CreateIndex
CREATE UNIQUE INDEX "TripStageUpdate_tripId_stage_key" ON "TripStageUpdate"("tripId", "stage");

-- CreateIndex
CREATE UNIQUE INDEX "TransportDocument_documentNumber_key" ON "TransportDocument"("documentNumber");

-- CreateIndex
CREATE UNIQUE INDEX "TransportDocument_tripId_key" ON "TransportDocument"("tripId");

-- CreateIndex
CREATE INDEX "TransportDocument_status_issuedAt_idx" ON "TransportDocument"("status", "issuedAt");

-- CreateIndex
CREATE UNIQUE INDEX "IntegrationHealth_provider_key" ON "IntegrationHealth"("provider");

-- AddForeignKey
ALTER TABLE "Truck" ADD CONSTRAINT "Truck_assignedDriverId_fkey" FOREIGN KEY ("assignedDriverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomsClearance" ADD CONSTRAINT "CustomsClearance_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomsClearance" ADD CONSTRAINT "CustomsClearance_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "Truck"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_portId_fkey" FOREIGN KEY ("portId") REFERENCES "Port"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_containerId_fkey" FOREIGN KEY ("containerId") REFERENCES "Container"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_customsClearanceId_fkey" FOREIGN KEY ("customsClearanceId") REFERENCES "CustomsClearance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripStageUpdate" ADD CONSTRAINT "TripStageUpdate_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransportDocument" ADD CONSTRAINT "TransportDocument_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;
