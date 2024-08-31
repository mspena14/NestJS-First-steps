import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { EmailTemplateAdapter } from './adapters/email-template.adapter';


@Injectable()
export class TemplatesService {

  constructor(private readonly emailAdapter: EmailTemplateAdapter){}
  async getEmailTemplate(template: string, params: Object) {
    return 'This action adds a new template';
  }

}
