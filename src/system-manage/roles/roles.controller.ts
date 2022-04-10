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
    const total = mock('@integer(50, 100)');
    return this.rolesService.getRoleList(total);
  }

  @Get('query')
  @ApiOperation({ summary: '查询角色列表' })
  public queryRole(@Query() odds) {
    console.log(odds);
    const total = mock('@integer(10, 30)');
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

  @Delete(':id')
  @ApiOperation({ summary: '删除角色' })
  public deleteRole(@Param('id') id) {
    return { code: 20000, message: '删除成功!' };
  }
}
