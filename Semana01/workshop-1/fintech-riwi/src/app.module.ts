import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MicrocreditsModule } from './microcredits/microcredits.module';
import { FinancialRecordsModule } from './financial-records/financial-records.module';

@Module({
  imports: [UsersModule, MicrocreditsModule, FinancialRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
