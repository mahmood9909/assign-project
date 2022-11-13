import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

@Injectable()
export class MailService {
  constructor(private readonly mailServ: MailerService) {}

  async sendEmail(array : string[], status : Status) {
    const test = await this.mailServ.sendMail({
      to: array,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', 
      context: {
        name: 'test',
      },
    });

    console.log(test)
  }
}
