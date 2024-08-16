import { Test, TestingModule } from '@nestjs/testing';
import { MicrocreditsService } from './microcredits.service';

describe('MicrocreditsService', () => {
  let service: MicrocreditsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicrocreditsService],
    }).compile();

    service = module.get<MicrocreditsService>(MicrocreditsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
