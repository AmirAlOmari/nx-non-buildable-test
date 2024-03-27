import { Module } from '@nestjs/common';

import { LibModule } from '@tests/lib';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [LibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
