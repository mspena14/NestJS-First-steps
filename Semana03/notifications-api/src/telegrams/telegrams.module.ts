import { Module } from '@nestjs/common';
import { TelegramsService } from './telegrams.service';
import { TelegramsController } from './telegrams.controller';

@Module({
  controllers: [TelegramsController],
  providers: [TelegramsService],
})
export class TelegramsModule {}
