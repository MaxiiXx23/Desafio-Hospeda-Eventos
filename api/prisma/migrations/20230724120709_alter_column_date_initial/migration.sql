/*
  Warnings:

  - Changed the type of `dateInitial` on the `events` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "events" DROP COLUMN "dateInitial",
ADD COLUMN     "dateInitial" TIMESTAMP(3) NOT NULL;
