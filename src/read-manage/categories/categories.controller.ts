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
import { CategoriesService } from './categories.service';
import { mock } from 'mockjs';

@Controller('categories')
@ApiTags('文章分类模块')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: '获取分类数据列表' })
  public categoryListData(@Query() odds) {
    let total = mock('@integer(100, 200)');
    return this.categoriesService.categoryData(total);
  }

  @Get('query')
  @ApiOperation({ summary: '分类查询' })
  public categorySearch(@Query() odds) {
    let total = mock('@integer(10, 30)');
    return this.categoriesService.categoryData(total, odds.status);
  }

  @Get('normal-list')
  @ApiOperation({ summary: '查询状态为正常的分类列表' })
  public categoryList() {
    // let total = mock('@integer(100, 200)');
    return this.categoriesService.normalList();
  }

  @Post('add')
  @ApiOperation({ summary: '新增文章分类' })
  public addCategory(@Body() data) {
    return { code: 20000, message: '新增成功!' };
  }

  @Patch('modify')
  @ApiOperation({ summary: '修改文章分类' })
  public updateCategory(@Body() id) {
    return { code: 20000, message: '修改成功!' };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章分类' })
  public deleteCategory(@Param('id') id) {
    console.log('删除分类id:', id);
    return { code: 20000, message: '删除成功!' };
  }
}
