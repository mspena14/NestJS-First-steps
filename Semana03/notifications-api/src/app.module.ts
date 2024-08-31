import { Module } from '@nestjs/common';
import { EmailsModule } from './emails/emails.module';
import { TelegramsModule } from './telegrams/telegrams.module';
import { TemplatesModule } from './templates/templates.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [EmailsModule, TelegramsModule, TemplatesModule, NotificationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
