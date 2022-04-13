import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class BannerService {
  public getListData() {
    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total: '@integer(40, 100)',
        'records|4-5': [
          {
            'id|+1': 1,
            title: '@ctitle',
            'cover|1': [
              'https://atts.w3cschool.cn/attachments/cover/cover_vuecourse.jpeg?t=1634191646',
              'https://7n.w3cschool.cn/attachments/image/202204/big_101301_87959.jpg?t=1648880891',
              'https://atts.w3cschool.cn/attachments/cover/cover_rubycourse.png?t=1634192801',
              'https://atts.w3cschool.cn/attachments/cover/cover_swiftcourse.png?t=1634192679',
              'https://atts.w3cschool.cn/attachments/cover/cover_xpjsw.png?t=1620739203',
            ],
            authorName: '@last',
            'isFree|1': [0, 1],
            priceOriginal: function () {
              return mock('@integer(350, 700)') + '.98';
            },
            priceDiscount: function () {
              return mock('@integer(60, 300)') + '.98';
            },
            url: '@url',
            remark: '@csentence(5, 15)',
            createDate: '@datetime',
            updateDate: '@datetime',
          },
        ],
      },
    });
  }
}
