CREATE TABLE "OperationAttachment" (
    "id" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "data" BYTEA NOT NULL,
    "clearanceId" TEXT,
    "transportDocumentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OperationAttachment_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "OperationAttachment_one_parent_check"
        CHECK (("clearanceId" IS NULL) <> ("transportDocumentId" IS NULL))
);

CREATE INDEX "OperationAttachment_clearanceId_createdAt_idx"
    ON "OperationAttachment"("clearanceId", "createdAt");

CREATE INDEX "OperationAttachment_transportDocumentId_createdAt_idx"
    ON "OperationAttachment"("transportDocumentId", "createdAt");

ALTER TABLE "OperationAttachment"
    ADD CONSTRAINT "OperationAttachment_clearanceId_fkey"
    FOREIGN KEY ("clearanceId") REFERENCES "CustomsClearance"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "OperationAttachment"
    ADD CONSTRAINT "OperationAttachment_transportDocumentId_fkey"
    FOREIGN KEY ("transportDocumentId") REFERENCES "TransportDocument"("id")
    ON DELETE CASCADE ON UPDATE CASCADE;
