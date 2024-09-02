import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { NodemailerProvider } from './providers/nodemailerProvider';
import { TemplatesService } from 'src/templates/templates.service';
import { SendEmailDto } from 'src/templates/dto/send-email.dto';

@Injectable()
export class EmailsService {

  constructor(
    private readonly nodemailerService: NodemailerProvider,
    private readonly emailAdapter: TemplatesService
  ) { }

  async sendEmail(body: SendEmailDto) {
    try {
      const { template, subjectEmail, sendTo, params } = body;
      const html = await this.emailAdapter.getEmailTemplate(template, params);
      await this.nodemailerService.sendEmail(subjectEmail, sendTo, html);
      return {
        success: true,
        message: `Email sent successfully to ${sendTo}`,
        data: {
          subject: subjectEmail,
          recipient: sendTo,
          templateUsed: template,
          params: params,
        },
      };
    } catch (error) {
      console.error('Error sending email:', error);

      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to send email',
        error: error.message,
      });
    }
  }

  async healthCheck() {
    try {
      await this.nodemailerService.testEmail();
      return { statusService: 'UP' };
    } catch (error) {
      throw error;
    }
  }
}
