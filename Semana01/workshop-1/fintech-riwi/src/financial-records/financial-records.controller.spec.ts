import { Test, TestingModule } from '@nestjs/testing';
import { FinancialRecordsController } from './financial-records.controller';
import { FinancialRecordsService } from './financial-records.service';

describe('FinancialRecordsController', () => {
  let controller: FinancialRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialRecordsController],
      providers: [FinancialRecordsService],
    }).compile();

    controller = module.get<FinancialRecordsController>(FinancialRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
