ALTER TABLE "OperationAttachment"
    DROP CONSTRAINT "OperationAttachment_one_parent_check";

ALTER TABLE "OperationAttachment"
    ADD COLUMN "tripExpenseId" TEXT,
    ADD CONSTRAINT "OperationAttachment_one_parent_check"
        CHECK (num_nonnulls("clearanceId", "transportDocumentId", "tripExpenseId") = 1);

CREATE INDEX "OperationAttachment_tripExpenseId_createdAt_idx"
    ON "OperationAttachment"("tripExpenseId", "createdAt");

ALTER TABLE "OperationAttachment"
    ADD CONSTRAINT "OperationAttachment_tripExpenseId_fkey"
    FOREIGN KEY ("tripExpenseId") REFERENCES "TripExpense"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
