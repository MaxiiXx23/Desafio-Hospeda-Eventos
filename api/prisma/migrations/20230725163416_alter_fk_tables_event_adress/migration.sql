/*
  Warnings:

  - You are about to drop the column `created_at` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `addressId` on the `events` table. All the data in the column will be lost.
  - Added the required column `eventId` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_addressId_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "created_at",
ADD COLUMN     "eventId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "events" DROP COLUMN "addressId";

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
