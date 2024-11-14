import { Body, Controller, Get,Post,Req,Res ,} from '@nestjs/common';
import { AppService } from './app.service';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();

  }
  

}