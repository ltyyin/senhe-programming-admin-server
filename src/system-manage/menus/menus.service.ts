import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class MenusService {
  public getMenuList() {
    return mock({
      code: 20000,
      message: '查询成功',
      'data|10': [
        {
          'id|+1': 1,
          parentId: '@id',
          name: '@first',
          url: '@domain',
          code: '@word',
          type: 1, // 类型(1目录，2菜单，3按钮)
          icon: 'el-icon-s-help', // 图标
          sort: '@integer(1, 9)', // 排序号
          createDate: '@date', // 随机创建时间
          updateDate: '@date', // 随机更新时间
          'children|2-5': [
            {
              id: '@id',
              parentId: '@id',
              name: '@last',
              url: '@domain',
              code: '@word',
              'type|1': [2, 3], // 类型(1目录，2菜单，3按钮)
              icon: '@word', // 图标
              sort: '@integer(1, 9)', // 排序号
              createDate: '@datetime', // 随机创建时间
              updateDate: '@datetime', // 随机更新时间
            },
          ],
        },
      ],
    });
  }
}
