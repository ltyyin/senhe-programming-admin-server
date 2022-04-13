import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersMService } from './users-m.service';
import { mock } from 'mockjs';

@Controller('users-m')
@ApiTags('用户权限模块')
@ApiBearerAuth()
export class UsersMController {
  constructor(private readonly usersMService: UsersMService) {}

  @Get()
  @ApiOperation({ summary: '获取系统用户列表' })
  public getUserList() {
    const total = mock('@integer(50, 100)');
    return this.usersMService.getUsersList(total);
  }

  @Get('query')
  @ApiOperation({ summary: '查询系统用户列表' })
  public queryUserList(@Query() odds) {
    const total = mock('@integer(10, 20)');
    console.log(odds);
    return this.usersMService.getUsersList(total, odds.isFreeze);
  }

  @Patch()
  @ApiOperation({ summary: '获取系统用户账号' })
  public updateUserAccount() {
    return {
      code: 20000,
      message: '修改系统用户账号成功！',
    };
  }

  @Patch('set/role')
  @ApiOperation({ summary: '设置系统用户角色' })
  public setRole(@Body() data) {
    console.log(data);
    return {
      code: 20000,
      message: '角色设置成功!',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  public deleteUser(@Param('id') id) {
    return { code: 20000, message: '删除成功!' };
  }
}
