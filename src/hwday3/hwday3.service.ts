import { Injectable } from '@nestjs/common';
import { CreateHwday3Dto } from './dto/create-hwday3.dto';
import { UpdateHwday3Dto } from './dto/update-hwday3.dto';

@Injectable()
export class Hwday3Service {
  create(createHwday3Dto: CreateHwday3Dto) {
    return 'This action adds a new hwday3';
  }

  findAll() {
    return `This action returns all hwday3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hwday3`;
  }

  update(id: number, updateHwday3Dto: UpdateHwday3Dto) {
    return `This action updates a #${id} hwday3`;
  }

  remove(id: number) {
    return `This action removes a #${id} hwday3`;
  }

  getTitel(): string {
    return 'Hm msr for day 1 ';
  }
  posttTitel (title: string){
    return 'hellow msr _ hw day 1 ' + title ;
  }
}
