/*
  Warnings:

  - You are about to drop the column `instagramUrl` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `twitterUrl` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "instagramUrl",
DROP COLUMN "twitterUrl",
ADD COLUMN     "instagramUserName" TEXT,
ADD COLUMN     "twitterUserName" TEXT;
