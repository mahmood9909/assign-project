import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    MailerModule.forRootAsync({
      inject : [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configSrv : ConfigService) => ({
        transport: {
          host: configSrv.get("MAIL_HOST"),
          secure: false,
          port: configSrv.get<number>("MAIL_PORT"),
          auth: {
            user: configSrv.get("MAIL_USER"),
            pass: configSrv.get("MAIL_PASS"),
          },
        },
        defaults: {
          from: '"No Reply" <noreply@example.com>',
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
