module.exports = {
  title: 'Layui for Vue',
  description: 'The demo site',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: 'hstarorg', link: 'https://github.com/hstarorg' },
    ],
    sidebar: [
      {
        title: '通用', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
      {
        title: '布局', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
      {
        title: '导航', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
      {
        title: '数据录入', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
      {
        title: '数据展示', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
      {
        title: '反馈', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [['/components/Button.html', '按钮']],
      },
    ],
  },
};
