import { Injectable } from '@nestjs/common';
import { EmailsService } from 'src/emails/emails.service';
import { SendEmailDto } from 'src/templates/dto/send-email.dto';

@Injectable()
export class NotificationsService {
    constructor(private readonly emailService: EmailsService){}

    async sendEmail(body: SendEmailDto){
        return await this.emailService.sendEmail(body);
    }


}
