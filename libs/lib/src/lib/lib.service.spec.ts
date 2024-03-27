import { Test } from '@nestjs/testing';
import { LibService } from './lib.service';

describe('LibService', () => {
  let service: LibService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LibService],
    }).compile();

    service = module.get(LibService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
