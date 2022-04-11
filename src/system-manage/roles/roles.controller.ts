import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { mock } from 'mockjs';

@Controller('roles')
@ApiTags('角色模块')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  @ApiOperation({ summary: '获取角色列表' })
  public getRoleList() {
    const total = mock('@integer(10, 30)');
    return this.rolesService.getRoleList(total);
  }

  @Get('query')
  @ApiOperation({ summary: '查询角色列表' })
  public queryRole(@Query() odds) {
    console.log(odds);
    const total = mock('@integer(5, 10)');
    return this.rolesService.getRoleList(total);
  }

  @Post('add')
  @ApiOperation({ summary: '新增角色' })
  public addRole(@Body() data) {
    return { code: 20000, message: '新增成功!' };
  }

  @Patch('modify')
  @ApiOperation({ summary: '修改角色' })
  public updateRole(@Body() id) {
    return { code: 20000, message: '修改成功!' };
  }

  @Get('power/list')
  @ApiOperation({ summary: '获取可操控的按钮列表' })
  public getPowerMenuList() {
    return this.rolesService.getPowerMenuList();
  }

  @Patch('modify/power')
  @ApiOperation({ summary: '修改用户的权限' })
  public updateRolePowers() {
    return {
      code: 20000,
      message: '修改权限成功！',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除角色' })
  public deleteRole(@Param('id') id) {
    return { code: 20000, message: '删除成功!' };
  }
}
