import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class ArticlesService {
  public getListData(total, status = '', isPublic = '') {
    const records = `records|${total}`;
    const statusCom = status === '' ? [0, 1, 2, 3] : [parseInt(status)];
    const publicCom = isPublic === '' ? [0, 1] : [parseInt(isPublic)];

    return mock({
      code: 20000,
      message: '查询成功',
      data: {
        total, // 总记录数
        [records]: [
          {
            id: '@id',
            title: '@ctitle', // 标题
            viewCount: '@integer(0, 100000)', // 浏览次数
            thumhup: '@integer(0, 100000)', // 点赞数
            'isPublic|1': publicCom, // 0: 不公开 1：公开
            'status|1': statusCom, // 0: 已删除, 1:未审核，2:已审核,3: 审核未通过
            updateDate: '@datetime',
            createDate: '@datetime',
            'cover|1': [
              'https://atts.w3cschool.cn/attachments/cover/cover_vuecourse.jpeg?t=1634191646',
              'https://7n.w3cschool.cn/attachments/image/202204/big_101301_87959.jpg?t=1648880891',
            ],
            'htmlContent|1': [
              '<p>客观原因, 想要减轻一下手腕负担,毕竟都要去医院检查了, 到了必须要重视的时候了.</p><p>主要原因,是对于需求的理解,对于语言的熟悉度,对于API调用的熟悉度,对于编程思维逻辑的转化程度,更准确的说,是对设计模式在实际业务开发中合理的使用.</p>',
              `<p>我相信写<code>Vue2</code>的同学，一定深有感触，一个组件下定义大量变和大量方法，<strong>方法嵌套方法，方法之间互相共享变量</strong>，维护这样的代码，看似容易理解的<code>Option Api</code>写法，我们需要在<code>methos、data、template</code>之间来回切，<code>Option Api</code>这种写法，代码量和功能小巧时是十分简单明了的，但是代码量一多，功能一复杂，我相信review代码的时候头都痛。</p>`,
              `<code class="copyable">Mixin不足
              在 Vue 2 中，mixin 是将部分组件逻辑抽象成可重用块的主要工具。但是，他们有几个问题：
              1、Mixin 很容易发生冲突：因为每个 mixin 的 property 都被合并到同一个组件中，所以为了避免 property 名冲突，你仍然需要了解其他每个特性。
              2、可重用性是有限的：我们不能向 mixin 传递任何参数来改变它的逻辑，这降低了它们在抽象逻辑方面的灵活性。
              <span class="copy-code-btn">复制代码</span></code>`,
              '<p>通过基础数据修改方式去修改多条数据也是可行的，但是在 <code>pinia</code> 官网中，已经明确表示<code>$patch</code> 的方式是经过优化的，会加快修改速度，对性能有很大好处，所以在进行多条数据修改的时候，更推荐使用 <code>$patch</code></p>',
            ],
            mdContent: '# 1号标题\n# 2号标题',
            summary: '@csentence(10, 30)',
            'labelIds|1-3': ['@first'],
          },
        ],
      },
    });
  }
}
