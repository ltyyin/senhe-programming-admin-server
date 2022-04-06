import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(private readonly jwtService: JwtService) {}

  public getInfo(token: string) {
    if (token) {
      let currentUser = this.jwtService.verify(token.replace('Bearer ', ''));
      // console.log(currentUser);
    }

    return {
      code: 20000,
      name: 'lisa',
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
    };
  }
}