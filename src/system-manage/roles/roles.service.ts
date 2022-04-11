import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';
import { menuTree } from './localData/menuTree';

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
            name: '@name',
            remark: '@ctitle',
            'powers|1': [
              [1, 2, 3],
              [12, 22, 3],
              [1, 213, 222, 3],
              [11, 13, 21, 22],
              [23, 211, 212],
              [1, 213, 221, 222, 223],
            ],
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

  public getPowerMenuList() {
    return menuTree();
  }
}
