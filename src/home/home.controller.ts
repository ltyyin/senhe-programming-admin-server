import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';

@Controller('home')
@ApiTags('首页模块')
@ApiBearerAuth()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @ApiOperation({ summary: '获取首页数据' })
  public getListData() {
    return this.homeService.getListData();
  }
}
