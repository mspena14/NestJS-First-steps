import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendEmailDto } from '../../dtos/send-email.dto';
import { TemplateAdapter } from '../../template.adapter';
import { Email } from '../../providers/email/email';

@Injectable()
export class EmailService {
    constructor(
        private emailProvider: Email,
        private readonly templateAdapter: TemplateAdapter
    ) {}

    async sendEmail(body: SendEmailDto) {
        try {
            const { template, subjectEmail, sendTo, params } = body;
            const html = await this.templateAdapter.render(template, params);
            await this.emailProvider.sendEmail(subjectEmail, sendTo, html);
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
            await this.emailProvider.testEmail();
            return { statusService: 'UP' };
        } catch (error) {
            throw error;
        }
    }
}
