import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class CoursesService {
  public getListData(total, isFree = '', isAudit = '') {
    const isFreeCourse = isFree === '' ? [0, 1] : [parseInt(isFree)];
    const isAuditStatus = isAudit === '' ? [0, 1] : [parseInt(isAudit)];
    const records = `records|${total}`;

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total, // 总记录数
        [records]: [
          {
            id: '@id', //初始值10开始，每条+1
            title: '@ctitle', //广告标题
            'cover|1': [
              'https://atts.w3cschool.cn/attachments/cover/cover_vuecourse.jpeg?t=1634191646',
              'https://7n.w3cschool.cn/attachments/image/202204/big_101301_87959.jpg?t=1648880891',
              'https://atts.w3cschool.cn/attachments/cover/cover_rubycourse.png?t=1634192801',
              'https://atts.w3cschool.cn/attachments/cover/cover_swiftcourse.png?t=1634192679',
              'https://atts.w3cschool.cn/attachments/cover/cover_xpjsw.png?t=1620739203',
            ],
            authorName: '@last',
            'isFree|1': isFreeCourse, //是否免费
            priceOriginal: function () {
              return mock('@integer(350, 700)') + '.98';
            }, //原价, 501到800之间随机数，小数点2位
            priceDiscount: function () {
              return mock('@integer(60, 300)') + '.98';
            }, //优惠价
            createDate: '@datetime', // 随机创建时间
            updateDate: '@datetime', // 随机更新时间
            'isAudit|1': isAuditStatus,
          },
        ],
      },
    });
  }
}
