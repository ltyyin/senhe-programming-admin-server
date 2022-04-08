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
import { LabelsService } from './labels.service';
import { mock } from 'mockjs';

@Controller('labels')
@ApiTags('标签模块')
export class LabelsController {
  constructor(private readonly labelsService: LabelsService) {}

  @Get()
  @ApiOperation({ summary: '获取标签数据列表' })
  public labelListData() {
    let total = mock('@integer(100, 200)');
    return this.labelsService.labelData(total);
  }

  @Get('query')
  @ApiOperation({ summary: '条件查询标签类别' })
  public queryLabelList(@Query() odds) {
    let total = mock('@integer(10, 80)');
    console.log(odds);
    return this.labelsService.labelData(total);
  }

  @Post('add')
  @ApiOperation({ summary: '新增标签' })
  public addLabel(@Body() data) {
    return { code: 20000, message: '新增成功!' };
  }

  @Patch('modify')
  @ApiOperation({ summary: '修改标签' })
  public updateLabel(@Body() id) {
    return { code: 20000, message: '修改成功!' };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除标签' })
  public deleteLabel(@Param('id') id) {
    console.log('删除标签id:', id);
    return { code: 20000, message: '删除成功!' };
  }
}
