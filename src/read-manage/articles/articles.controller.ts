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
import { ArticlesService } from './articles.service';
import { mock } from 'mockjs';

@Controller('articles')
@ApiTags('文章模块')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOperation({ summary: '获取文章列表' })
  public getListData() {
    const total = mock('@integer(100, 200)');
    return this.articlesService.getListData(total);
  }

  @Get('query')
  @ApiOperation({ summary: '查询文章列表' })
  public queryDate(@Query() odds) {
    const total = mock('@integer(10, 30)');
    return this.articlesService.getListData(total, odds.status);
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
  public deleteArticle(@Param('id') id) {
    return {
      code: 20000,
      message: '删除文章成功！',
    };
  }
}
