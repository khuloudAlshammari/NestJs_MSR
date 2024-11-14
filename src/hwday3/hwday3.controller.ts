import { Controller, Get, Post, Body, Patch, Param, Delete ,Req,Res} from '@nestjs/common';
import { Hwday3Service } from './hwday3.service';
import { CreateHwday3Dto } from './dto/create-hwday3.dto';
import { UpdateHwday3Dto } from './dto/update-hwday3.dto';

@Controller('hwday3')
export class Hwday3Controller {
  constructor(private readonly hwday3Service: Hwday3Service) {}

  @Post()
  create(@Body() createHwday3Dto: CreateHwday3Dto) {
    return this.hwday3Service.create(createHwday3Dto);
  }

  @Get()
  findAll() {
    return this.hwday3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hwday3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHwday3Dto: UpdateHwday3Dto) {
    return this.hwday3Service.update(+id, updateHwday3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hwday3Service.remove(+id);
  }
  @Post('/hm_day1')
  postTitele(@Body('title')title : string ,@Req() req,@Res() res ){
    res.send(req.Body);
    return this.hwday3Service.posttTitel(title);
  }
}
