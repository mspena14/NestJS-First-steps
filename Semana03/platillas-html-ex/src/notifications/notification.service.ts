import { Injectable } from '@nestjs/common';
import { TemplateAdapter } from './template.adapter';

@Injectable()
export class NotificationService {
  constructor(private readonly templateAdapter: TemplateAdapter) {}

  async sendNotification(templateName: string, context: any, recipient: string, subject: string) {
    try {
      const renderedTemplate = await this.templateAdapter.render(templateName, context);
      // Aquí se enviaría el correo o mensaje usando la plantilla renderizada
      console.log(`Notificación enviada a ${recipient}:\nsubject: ${subject} \n${renderedTemplate}`);
    } catch (error) {
      console.error('Error enviando la notificación:', error);
    }
  }
}
