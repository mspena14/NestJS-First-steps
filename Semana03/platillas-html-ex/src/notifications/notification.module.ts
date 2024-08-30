import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { TemplateAdapter } from './template.adapter';

@Module({
  controllers: [NotificationController],  // Aquí se registra el controlador
  providers: [NotificationService, TemplateAdapter],
  exports: [NotificationService],
})
export class NotificationModule {}
