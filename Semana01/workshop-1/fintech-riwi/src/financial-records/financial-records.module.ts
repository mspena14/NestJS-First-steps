import { Module } from '@nestjs/common';
import { FinancialRecordsService } from './financial-records.service';
import { FinancialRecordsController } from './financial-records.controller';

@Module({
  controllers: [FinancialRecordsController],
  providers: [FinancialRecordsService],
})
export class FinancialRecordsModule {}
