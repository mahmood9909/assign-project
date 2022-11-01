import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { leaveSelection } from '../dto/leaves';

@Injectable()
export class LeavesService {
  constructor(
    private readonly meailSrv: MailService,
    private readonly prisma: PrismaService,
  ) {}

  async findAll(): Promise<any[]> {
    return await this.prisma.leavesRequests.findMany({
      select: leaveSelection,
    });
  }

  async sendEmial() {
    await this.meailSrv.sendEmail('fatema.m2906@gmail.com');
  }
}
