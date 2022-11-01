/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Manager` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Manager` DROP FOREIGN KEY `Manager_employeeId_fkey`;

-- AlterTable
ALTER TABLE `Employee` ADD COLUMN `employeeId` INTEGER NULL,
    ADD COLUMN `managerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Manager` DROP COLUMN `employeeId`,
    ADD COLUMN `managerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `Manager`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
