import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Post('add')
  @ApiOperation({ summary: '新增轮播图' })
  public addBanner(@Body() data) {
    return { code: 20000, message: '新增成功!' };
  }

  @Patch('modify')
  @ApiOperation({ summary: '修改轮播图' })
  public updateBanner(@Body() id) {
    return { code: 20000, message: '修改成功!' };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除轮播图' })
  public deleteBanner(@Param('id') id) {
    console.log('删除标签id:', id);
    return { code: 20000, message: '删除成功!' };
  }
}
