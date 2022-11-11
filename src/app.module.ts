import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { LeavesModule } from './leaves/leaves.module';
import { EmployeeModule } from './employee/employee.module';
import { DummyAuthModule } from './dummy-auth/dummy-auth.module';

@Module({
  imports: [PrismaModule, MailModule, LeavesModule, EmployeeModule, DummyAuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
