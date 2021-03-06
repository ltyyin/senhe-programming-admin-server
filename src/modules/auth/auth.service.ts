import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  public async getToken(userAccount: Object) {
    return {
      code: 20000,
      token: this.jwtService.sign(userAccount, { expiresIn: '30s' }),
      refreshToken: this.jwtService.sign(userAccount, { expiresIn: '1min' }),
    };
  }
}
