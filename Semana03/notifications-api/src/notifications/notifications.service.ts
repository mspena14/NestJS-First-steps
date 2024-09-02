import { Injectable } from '@nestjs/common';
import { EmailsService } from 'src/emails/emails.service';
import { TelegramService } from 'src/telegrams/telegram.service';
import { SendEmailDto } from 'src/templates/dto/send-email.dto';
import { SendTelegramMessageDto } from 'src/templates/dto/send-telegram.dto';

@Injectable()
export class NotificationsService {
    constructor(
        private readonly emailService: EmailsService,
        private readonly telegramService: TelegramService
    ){}

    async sendEmail(body: SendEmailDto){
        return await this.emailService.sendEmail(body);
    }

    async sendTelegramMessage(body: SendTelegramMessageDto){
        return await this.telegramService.sendMessage(body);
    }

}
