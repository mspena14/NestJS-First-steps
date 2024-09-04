import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ParamsValidationPipe } from 'src/common/pipes/params-validation.pipe';
import { SendEmailDto } from 'src/templates/dto/send-email.dto';
import { SendTelegramMessageDto } from 'src/templates/dto/send-telegram.dto';


@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @Post('/sendEmail')
  @UsePipes(ParamsValidationPipe)
  async sendEmail(@Body() body: SendEmailDto){
    return await this.notificationsService.sendEmail(body);
  }

  @Post('/sendMessage')
  @UsePipes(ParamsValidationPipe)
  async sendTelegramMessage(@Body() body: SendTelegramMessageDto){
    return await this.notificationsService.sendTelegramMessage(body);
  }

}

