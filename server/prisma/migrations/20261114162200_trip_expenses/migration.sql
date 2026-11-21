CREATE TYPE "TripExpenseType" AS ENUM ('MAINTENANCE', 'FUEL');

CREATE TABLE "TripExpense" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "type" "TripExpenseType" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TripExpense_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "TripExpense_tripId_createdAt_idx"
    ON "TripExpense"("tripId", "createdAt");

ALTER TABLE "TripExpense"
    ADD CONSTRAINT "TripExpense_tripId_fkey"
    FOREIGN KEY ("tripId") REFERENCES "Trip"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
