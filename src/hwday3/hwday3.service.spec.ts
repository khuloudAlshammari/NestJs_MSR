import { Test, TestingModule } from '@nestjs/testing';
import { Hwday3Service } from './hwday3.service';

describe('Hwday3Service', () => {
  let service: Hwday3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Hwday3Service],
    }).compile();

    service = module.get<Hwday3Service>(Hwday3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
