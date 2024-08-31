import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './services/email/email.service';
import { Email } from './providers/email/email';
import { TemplateAdapter } from './template.adapter';

@Module({
  controllers: [EmailController],
  providers: [EmailService, Email, TemplateAdapter]
})
export class EmailModule {}
