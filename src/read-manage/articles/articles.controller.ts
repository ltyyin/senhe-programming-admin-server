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
@ApiTags('文章管理')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get('category')
  @ApiOperation({ summary: '文章分类数据列表' })
  public categoryListData(@Query() odds) {
    let total = mock('@integer(100, 200)');
    return this.articlesService.categoryData(total);
  }

  @Get('category/search')
  @ApiOperation({ summary: '文章分类查询' })
  public categorySearch(@Query() odds) {
    let total = mock('@integer(10, 30)');
    return this.articlesService.categoryData(total, odds.status);
  }

  @Get('normal-list')
  @ApiOperation({ summary: '查询状态为正常的分类列表' })
  public categoryList() {
    // let total = mock('@integer(100, 200)');
    return this.articlesService.normalList();
  }

  @Post('category/add')
  @ApiOperation({ summary: '新增文章分类' })
  public addCategory(@Body() data) {
    return { code: 20000, message: '新增成功!' };
  }

  @Patch('category/modify')
  @ApiOperation({ summary: '修改文章分类' })
  public updateCategory(@Body() id) {
    return { code: 20000, message: '修改成功!' };
  }

  @Delete('category/:id')
  @ApiOperation({ summary: '删除文章分类' })
  public deleteCategory(@Param('id') id) {
    console.log('删除分类id:', id);
    return { code: 20000, message: '删除成功!' };
  }
}
