import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import moment from 'moment';

@Injectable()
export class LibService {
  constructor() {
    console.log('LibService constructor', moment().toISOString());
  }

  public getLuxonString(): string {
    return `1 + ${DateTime.now().toISO()}`;
  }
}
