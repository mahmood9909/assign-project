import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { LeavesModule } from './leaves/leaves.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [PrismaModule, MailModule, LeavesModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
