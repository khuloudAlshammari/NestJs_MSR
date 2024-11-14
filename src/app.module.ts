import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hwday3Module } from './hwday3/hwday3.module';

@Module({
  imports: [Hwday3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
