import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { LeavesModule } from './leaves/leaves.module';

@Module({
  imports: [PrismaModule, MailModule, LeavesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
