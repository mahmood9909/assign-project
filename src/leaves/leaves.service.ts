import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class LeavesService {
  constructor(private readonly meailSrv: MailService) {}
  async sendEmial() {
    await this.meailSrv.sendEmail("fatema.m2906@gmail.com");
  }
}
