import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class RolesService {
  public getRoleList(total) {
    const records = `records|${total}`;

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total,
        [records]: [
          {
            id: '@id',
            name: '@last',
            remark: '@ctitle',
            'authority|2-5': ['@integer(20,30)'],
            createDate: '@datetime',
            updateDate: '@datetime',
          },
        ],
      },
    });
  }

  public queryRole(count) {
    const dataCount = `data|${count}`;
    return mock({
      code: 20000,
      message: '查询成功',
      [dataCount]: [
        {
          id: '@id',
          name: '@last',
          remark: '@ctitle',
          createDate: '@datetime',
          updateDate: '@datetime',
        },
      ],
    });
  }
}
