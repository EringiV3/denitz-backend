/*
  Warnings:

  - You are about to drop the column `detailImageUrl` on the `DenimReport` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DenimReport" DROP COLUMN "detailImageUrl";

-- CreateTable
CREATE TABLE "DenimReportDetailImageUrl" (
    "id" TEXT NOT NULL,
    "sortKey" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "denimReportId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DenimReportDetailImageUrl" ADD FOREIGN KEY ("denimReportId") REFERENCES "DenimReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
