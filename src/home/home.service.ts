import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class HomeService {
  public getListData() {
    return {
      code: 20000,
      data: {
        courseTypeCount: [
          { value: mock('@integer(600, 90000)'), name: '前端' },
          { value: mock('@integer(600, 90000)'), name: '小程序' },
          { value: mock('@integer(600, 90000)'), name: '后端' },
          { value: mock('@integer(600, 90000)'), name: '安卓' },
          { value: mock('@integer(600, 90000)'), name: 'ios' },
          { value: mock('@integer(600, 90000)'), name: '大数据' },
          { value: mock('@integer(600, 90000)'), name: '算法' },
          { value: mock('@integer(600, 90000)'), name: '数据库' },
        ],

        panelGroup: mock({
          userTotal: '@integer(600, 90000)',
          courseTotal: '@integer(600, 90000)',
          articleTotal: '@integer(600, 90000)',
          questionTotal: '@integer(600, 90000)',
        }),
        ...mock({
          'articleMonthCount|8': ['@integer(2000, 5000)'],
        }),
      },
    };
  }
}
