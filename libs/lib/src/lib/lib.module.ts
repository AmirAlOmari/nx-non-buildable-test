import { Module } from '@nestjs/common';
import { LibService } from './lib.service';

@Module({
  controllers: [],
  providers: [LibService],
  exports: [LibService],
})
export class LibModule {}
