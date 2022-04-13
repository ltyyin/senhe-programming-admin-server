import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BannerService } from './banner.service';

@Controller('banner')
@ApiTags('banner模块')
@ApiBearerAuth()
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  @ApiOperation({ summary: '获取banner列表' })
  public getListData() {
    return this.bannerService.getListData();
  }
}
