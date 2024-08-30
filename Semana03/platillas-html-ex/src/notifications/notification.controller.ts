import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('sendEmail')
  async sendNotification(@Body() notificationData: { template: string, params: any, to: string, subject:string}) {
    await this.notificationService.sendNotification(notificationData.template, notificationData.params, notificationData.to, notificationData.subject);
  }
}
