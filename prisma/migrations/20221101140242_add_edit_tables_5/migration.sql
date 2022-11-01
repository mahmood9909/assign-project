-- AlterTable
ALTER TABLE `LeavesRequests` ADD COLUMN `employeeId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `LeavesRequests` ADD CONSTRAINT `LeavesRequests_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
