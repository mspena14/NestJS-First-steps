import { Module } from '@nestjs/common';
import { EmailsModule } from './emails/emails.module';
import { TelegramsModule } from './telegrams/telegrams.module';
import { TemplatesModule } from './templates/templates.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV? `.${process.env.NODE_ENV}.env`
      : '.development.env',
      isGlobal: true
  })

    , EmailsModule, TelegramsModule, TemplatesModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
