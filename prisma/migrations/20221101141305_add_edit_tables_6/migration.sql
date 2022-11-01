/*
  Warnings:

  - You are about to drop the column `EndsOn` on the `LeavesRequests` table. All the data in the column will be lost.
  - Added the required column `endsOn` to the `LeavesRequests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `LeavesRequests` DROP COLUMN `EndsOn`,
    ADD COLUMN `endsOn` DATETIME(3) NOT NULL;
