import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { EmailsService } from 'src/emails/emails.service';
import { NodemailerProvider } from 'src/emails/providers/nodemailerProvider';
import { TemplatesService } from 'src/templates/templates.service';
import { EmailTemplateAdapter } from 'src/templates/adapters/email-template.adapter';
import { TelegramService } from 'src/telegrams/telegram.service';
import { TelegramTemplateAdapter } from 'src/templates/adapters/telegram-template.adapter';
import { TelegramsModule } from 'src/telegrams/telegram.module';

@Module({
  imports:[TelegramsModule],
  controllers: [NotificationsController],
  providers: [NotificationsService, EmailsService, NodemailerProvider, TemplatesService, EmailTemplateAdapter, TelegramTemplateAdapter],
  exports: [NotificationsService]
})
export class NotificationsModule {}
