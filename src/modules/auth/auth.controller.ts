import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('验证模块')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: '登录验证' })
  @UseGuards(AuthGuard('local'))
  public login(@Body() loginDto: LoginDto, @CurrentUser() account) {
    return this.authService.getToken(account);
  }

  @Post('logout')
  @ApiOperation({ summary: '退出登录' })
  public logout() {
    return {
      code: 20000,
      message: '退出登录成功',
    };
  }
}
