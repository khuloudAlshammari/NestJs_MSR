import { Module } from '@nestjs/common';
import { Hwday3Service } from './hwday3.service';
import { Hwday3Controller } from './hwday3.controller';

@Module({
  controllers: [Hwday3Controller],
  providers: [Hwday3Service],
})
export class Hwday3Module {}
