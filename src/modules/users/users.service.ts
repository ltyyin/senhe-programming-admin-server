import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) {}

  public getInfo(token: string) {
    if (token) {
      try {
        let currentUser = this.jwtService.verify(token.replace('Bearer ', ''));
      } catch (err) {
        // console.log(err);
        console.log('token过期');
      }
    }

    return {
      code: 20000,
      name: '前端很棒',
      avatar:
        'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
    };
  }
}
