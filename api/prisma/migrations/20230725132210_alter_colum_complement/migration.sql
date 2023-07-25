/*
  Warnings:

  - Made the column `complement` on table `addresses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "complement" SET NOT NULL;
