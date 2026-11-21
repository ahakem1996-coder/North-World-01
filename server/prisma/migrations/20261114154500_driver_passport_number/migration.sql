ALTER TABLE "Driver"
    ADD COLUMN "passportNumber" TEXT,
    ALTER COLUMN "licenseNumber" DROP NOT NULL;

CREATE UNIQUE INDEX "Driver_passportNumber_key" ON "Driver"("passportNumber");
