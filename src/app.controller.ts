import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/cats')
  getAllCats(): string {
    return 'This action returns all cats';
  }

  @Get('/query_test')
  getQuery(@Req() req: Request): string {
    return (
      'This action is testing query: ' + JSON.stringify(req.query, null, '\t')
    );
  }
}
