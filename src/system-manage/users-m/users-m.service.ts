import { Injectable } from '@nestjs/common';
import { mock, Random } from 'mockjs';

@Injectable()
export class UsersMService {
  public getUsersList(total, freeze = '') {
    const records = `records|${total}`;
    const isFreeze = freeze === '' ? [0, 1] : [parseInt(freeze)];

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total: total, // 总记录数
        [records]: [
          {
            id: '@id',
            userName: '@name',
            password: 'xxxxxxx',
            'isFreeze|1': isFreeze,
            cover:
              'https://pic2.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_xs.jpg?source=3af55fa1',
            account: /1\d{7,10}/,
            createDate: '@datetime',
            updateDate: '@datetime',
            latelyLoginDate: '@datetime',
          },
        ],
      },
    });
  }
}
