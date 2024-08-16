import { Test, TestingModule } from '@nestjs/testing';
import { MicrocreditsController } from './microcredits.controller';
import { MicrocreditsService } from './microcredits.service';

describe('MicrocreditsController', () => {
  let controller: MicrocreditsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicrocreditsController],
      providers: [MicrocreditsService],
    }).compile();

    controller = module.get<MicrocreditsController>(MicrocreditsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
