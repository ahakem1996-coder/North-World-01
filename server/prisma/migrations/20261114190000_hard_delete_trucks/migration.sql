ALTER TABLE "Trip"
    ADD COLUMN "truckFleetNumber" TEXT,
    ADD COLUMN "truckPlateNumber" TEXT,
    ADD COLUMN "truckSerialNumber" TEXT,
    ADD COLUMN "truckModel" TEXT;

UPDATE "Trip" AS trip
SET
    "truckFleetNumber" = truck."fleetNumber",
    "truckPlateNumber" = truck."plateNumber",
    "truckSerialNumber" = truck."serialNumber",
    "truckModel" = truck."model"
FROM "Truck" AS truck
WHERE trip."truckId" = truck."id";

ALTER TABLE "Trip"
    ALTER COLUMN "truckFleetNumber" SET NOT NULL,
    ALTER COLUMN "truckPlateNumber" SET NOT NULL,
    ALTER COLUMN "truckSerialNumber" SET NOT NULL,
    ALTER COLUMN "truckModel" SET NOT NULL,
    ALTER COLUMN "truckId" DROP NOT NULL;

ALTER TABLE "Trip" DROP CONSTRAINT "Trip_truckId_fkey";
ALTER TABLE "Trip"
    ADD CONSTRAINT "Trip_truckId_fkey"
    FOREIGN KEY ("truckId") REFERENCES "Truck"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;

DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM "Truck" AS truck
        JOIN "Trip" AS trip ON trip."truckId" = truck."id"
        WHERE truck."deletedAt" IS NOT NULL
          AND trip."emptyReturnedAt" IS NULL
    ) THEN
        RAISE EXCEPTION 'Cannot purge a soft-deleted truck with an active trip';
    END IF;
END $$;

DELETE FROM "Truck" WHERE "deletedAt" IS NOT NULL;
