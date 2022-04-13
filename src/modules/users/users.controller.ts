import { Controller, Get, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('用户模块')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getInfo')
  @ApiOperation({ summary: '获取用户信息' })
  public getInfo(@Headers('Authorization') token) {
    return this.usersService.getInfo(token);
  }
}
