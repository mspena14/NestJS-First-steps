import { Module } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { EmailTemplateAdapter } from './adapters/email-template.adapter';
import { NodemailerProvider } from '../emails/providers/nodemailerProvider';


@Module({
  controllers: [],
  providers: [TemplatesService, EmailTemplateAdapter, NodemailerProvider],
  exports: [TemplatesService]
})
export class TemplatesModule {}
