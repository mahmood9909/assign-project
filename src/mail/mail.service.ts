import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Status } from '@prisma/client';

@Injectable()
export class MailService {
  constructor(private readonly mailServ: MailerService) {}

  async sendConfirmationEmail(array: string[], name : string): Promise<void> {
    try {
      const test = await this.mailServ.sendMail({
        to: array,
        subject: 'Email Confirmation',
        template: './confirmation',
        context: {
          name: name,
        },
      });

      console.log(test);
    } catch (error) {
      console.log(`error cause by : ${error}`);
    }
  }

  async sendRejectionEmail(array: string[], name: string): Promise<void> {
    try {
      const test = await this.mailServ.sendMail({
        to: array,
        subject: 'Emnil Confirmation',
        template: './rejection',
        context: {
          name: name
        },
      });

      console.log(test);
    } catch (error) {
      console.log(`error cause by : ${error}`);
    }
  }
}
