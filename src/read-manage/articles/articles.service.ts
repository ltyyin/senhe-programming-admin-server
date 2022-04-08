import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class ArticlesService {
  public categoryData(total, status = null) {
    const records = `records|${total}`;
    const statusCom = status ? [parseInt(status)] : [0, 1];

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total, // 总记录数
        [records]: [
          {
            id: '@id',
            name: '@first', // 随机一个名字
            sort: '@integer(0,9)', // 0-9间的数字
            remark: '@csentence(5, 15)',
            'status|1': statusCom, // 二选其一，注意数字不要用单引号
            createDate: '@date', // 随机时间
          },
        ],
      },
    });
  }

  public normalList() {
    return mock({
      code: 20000,
      message: '查询成功',
      'data|8': [
        {
          id: '@id',
          name: '@first', // 随机一个名字
          sort: '@integer(0,9)', // 0-9间的数字
          remark: '@csentence(5, 15)',
          status: 1, // 查询正常状态
          createDate: '@date', // 随机时间
        },
      ],
    });
  }
}
