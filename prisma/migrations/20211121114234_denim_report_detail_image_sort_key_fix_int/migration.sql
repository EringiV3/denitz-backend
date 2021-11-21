/*
  Warnings:

  - Changed the type of `sortKey` on the `DenimReportDetailImageUrl` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "DenimReportDetailImageUrl" DROP COLUMN "sortKey",
ADD COLUMN     "sortKey" INTEGER NOT NULL;
