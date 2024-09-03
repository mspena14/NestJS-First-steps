import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { TelegramTemplateAdapter } from 'src/templates/adapters/telegram-template.adapter';
import { NotificationsService } from 'src/notifications/notifications.service';

@Module({
  controllers: [TelegramController],
  providers: [TelegramService, TelegramTemplateAdapter],
  exports: [TelegramService]
})
export class TelegramsModule {}
