import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      code: 20000,
      msg: 'Hello',
    };
  }
}
