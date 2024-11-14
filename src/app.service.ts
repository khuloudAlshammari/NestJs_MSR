import { Injectable } from '@nestjs/common';

@Injectable()

export class AppService {
  getHm(): string {
    return 'Hm msr for day 1 ';
  }
  posttTitel (title: string): string {
    return 'hellow msr _ hw day 1 ';
  }

}
