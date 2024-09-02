import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TelegramService } from './telegram.service';


@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get("start")
  async create() {
    await this.telegramService.connect();
  }

  @Post("send")
  async findAll(@Body()data ) {
    await this.telegramService.sendMessage(data);
  }

}