import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Res,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('auth')
@ApiTags('验证模块')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  @ApiOperation({ summary: '登录验证' })
  @UseGuards(AuthGuard('local'))
  public login(@Body() loginDto: LoginDto, @CurrentUser() account) {
    return this.authService.getToken(account);
  }

  @Get('refresh/token')
  @ApiOperation({ summary: '刷新token' })
  @ApiBearerAuth()
  public refreshToken(
    @Headers('Authorization') token,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const { name, password } = this.jwtService.verify(
        token.replace('Bearer ', ''),
      );
      const newToken = this.jwtService.sign(
        { name, password },
        { expiresIn: '3min' },
      );
      return {
        code: 20000,
        token: newToken,
      };
    } catch (err) {
      if (err.message == 'jwt malformed') {
        res.status(HttpStatus.UNAUTHORIZED);
        res.send({ code: 50008, message: '无效令牌，请重新登录！' });
      } else {
        res.status(HttpStatus.UNAUTHORIZED);
        res.send({ code: 50014, message: '令牌过期，请重新登录！' });
      }
    }
  }
}
