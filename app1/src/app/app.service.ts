import { Injectable } from '@nestjs/common';
import { LibService } from '@tests/lib';

@Injectable()
export class AppService {
  constructor(private readonly libService: LibService) {}

  getData() {
    return {
      message: 'Hello API',
      libServiceLuxonString: this.libService.getLuxonString(),
    };
  }
}
