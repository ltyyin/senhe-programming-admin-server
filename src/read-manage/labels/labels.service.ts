import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class LabelsService {
  public labelData(total) {
    const records = `records|${total}`;

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total, // 总记录数
        [records]: [
          {
            id: '@id',
            categoryName: '@first', //类别ID
            name: '@last', // 随机一个标签名
            createDate: '@date', // 随机创建时间
            updateDate: '@date', // 随机更新时间
          },
        ],
      },
    });
  }
}
