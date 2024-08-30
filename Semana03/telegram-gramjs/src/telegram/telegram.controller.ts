import { Controller, Post, Body, Get } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('verify')
  async verifyCode(@Body('code') code: string): Promise<{ message: string }> {
    this.telegramService.resolvePhoneCode(code);
    return { message: 'Código de verificación recibido' };
  }

  @Post('send')
  async sendMessage(
    @Body('chatId') chatId: string,
    @Body('message') message: string,
  ): Promise<{ message: string }> {
    await this.startTelegram();
    await this.telegramService.sendMessage(chatId, message);
    return { message: `Mensaje enviado a ${chatId}` };
  }

  @Get('start-telegram')
  async startTelegram(): Promise<string> {
    const phoneNumber = '+573194746457'; // Asegúrate de formatearlo correctamente
    await this.telegramService.start(phoneNumber);
    return 'Telegram client started';
  }

}
