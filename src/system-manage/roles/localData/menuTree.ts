export function menuTree() {
  return {
    code: 20000,
    data: [
      {
        id: 1,
        label: '课程管理',
        children: [
          {
            id: 11,
            label: '详情',
          },
          {
            id: 12,
            label: '审核',
          },
          {
            id: 13,
            label: '删除',
          },
        ],
      },
      {
        id: 2,
        label: '阅读管理',
        children: [
          {
            id: 21,
            label: '文章管理',
            children: [
              {
                id: 211,
                label: '查看',
              },
              {
                id: 212,
                label: '审核',
              },
              {
                id: 213,
                label: '删除',
              },
            ],
          },
          {
            id: 22,
            label: '分类管理',
            children: [
              {
                id: 221,
                label: '编辑',
              },
              {
                id: 222,
                label: '删除',
              },
            ],
          },
          {
            id: 23,
            label: '标签管理',
            children: [
              {
                id: 221,
                label: '编辑',
              },
              {
                id: 222,
                label: '删除',
              },
            ],
          },
        ],
      },
    ],
  };
}
