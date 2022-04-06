import { Controller, Get, Headers } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('用户模块')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getInfo')
  @ApiOperation({ summary: '获取用户信息' })
  public getInfo(@Headers('authorization') token) {
    return this.usersService.getInfo(token);
  }
}
