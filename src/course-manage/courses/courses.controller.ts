import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { mock } from 'mockjs';

@Controller('courses')
@ApiTags('课程模块')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  @ApiOperation({ summary: '获取课程列表' })
  public getListData() {
    const total = mock('@integer(40, 100)');
    return this.coursesService.getListData(total);
  }

  @Get('query')
  @ApiOperation({ summary: '查询文章列表' })
  public queryDate(@Query() odds) {
    const total = mock('@integer(6, 15)');
    return this.coursesService.getListData(total, odds.isFree, odds.isAudit);
  }

  @Get('/audit/success')
  @ApiOperation({ summary: '审核通过' })
  public auditSuccess(@Query('id') id) {
    return {
      code: 20000,
      message: '审核通过成功！',
    };
  }

  @Get('/audit/fail')
  @ApiOperation({ summary: '审核不通过' })
  public auditFail(@Query('id') id) {
    return {
      code: 20000,
      message: '审核不通过成功！',
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '审核不通过' })
  public deleteCourse(@Param('id') id) {
    return {
      code: 20000,
      message: '删除课程成功！',
    };
  }
}
