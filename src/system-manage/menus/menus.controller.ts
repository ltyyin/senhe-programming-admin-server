import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MenusService } from './menus.service';
import { mock } from 'mockjs';

@Controller('menus')
@ApiTags('菜单模块')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  @Get()
  @ApiOperation({ summary: '获取菜单列表' })
  public getMenuList() {
    // const total = mock('@integer(1, 9)')
    return this.menusService.getMenuList();
  }
}
