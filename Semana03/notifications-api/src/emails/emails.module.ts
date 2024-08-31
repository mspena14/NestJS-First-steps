import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { NodemailerProvider } from './providers/nodemailerProvider';
import { TemplatesService } from 'src/templates/templates.service';

@Module({
  controllers: [EmailsController],
  providers: [EmailsService, NodemailerProvider, TemplatesService],
  exports: [EmailsService]
})
export class EmailsModule {}
