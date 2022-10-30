import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailServ: MailerService) {}

  async sendEmail(userEmail: string) {
    const test = await this.mailServ.sendMail({
      to: userEmail,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', 
      context: {
        name: 'test',
      },
    });

    console.log(test)
  }
}
