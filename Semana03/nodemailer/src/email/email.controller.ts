import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { EmailService } from './services/email/email.service'
import { SendEmailDto } from './dtos/send-email.dto';
import { TemplateValidationPipe } from './pipes/template-validation.pipe';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send-email')
  @UsePipes(TemplateValidationPipe)
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    return await this.emailService.sendEmail(sendEmailDto);
  }
}
