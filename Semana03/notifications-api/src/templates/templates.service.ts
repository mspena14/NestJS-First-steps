import { Injectable } from '@nestjs/common';
import { EmailTemplateAdapter } from './adapters/email-template.adapter';


@Injectable()
export class TemplatesService {

  constructor(private readonly emailAdapter: EmailTemplateAdapter){}
  async getEmailTemplate(template: string, params: Object) {
    
    return await this.emailAdapter.render(template, params);
  }

}
