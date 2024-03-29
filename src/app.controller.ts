import { Controller, Get, Req, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIp(@Req() req: Request) {
    return req.headers;
  }
}
