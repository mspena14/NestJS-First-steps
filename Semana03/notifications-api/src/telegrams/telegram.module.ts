import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { TelegramTemplateAdapter } from 'src/templates/adapters/telegram-template.adapter';

@Module({
  controllers: [TelegramController],
  providers: [TelegramService, TelegramTemplateAdapter],
})
export class TelegramsModule {}
