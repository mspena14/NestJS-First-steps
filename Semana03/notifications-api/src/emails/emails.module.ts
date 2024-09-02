import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { NodemailerProvider } from './providers/nodemailerProvider';
import { TemplatesService } from 'src/templates/templates.service';
import { TemplatesModule } from 'src/templates/templates.module';
import { EmailTemplateAdapter } from 'src/templates/adapters/email-template.adapter';

@Module({
  imports: [],
  controllers: [],
  providers: [EmailsService, NodemailerProvider, TemplatesService, EmailTemplateAdapter],
  exports: [EmailsService]
})
export class EmailsModule {}
