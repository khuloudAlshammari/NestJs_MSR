import { Test, TestingModule } from '@nestjs/testing';
import { Hwday3Controller } from './hwday3.controller';
import { Hwday3Service } from './hwday3.service';

describe('Hwday3Controller', () => {
  let controller: Hwday3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Hwday3Controller],
      providers: [Hwday3Service],
    }).compile();

    controller = module.get<Hwday3Controller>(Hwday3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
