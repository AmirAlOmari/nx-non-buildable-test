import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject(AppService)
    private readonly appService: any
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
