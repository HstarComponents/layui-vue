const { path } = require('@vuepress/utils');

module.exports = {
  base: '/layui-vue/',
  title: 'Layui for Vue',
  description: 'The demo site',
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../components'),
      },
    ],
  ],
  themeConfig: {
    navbar: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' },
      { text: 'hstarorg', link: 'https://github.com/hstarorg' },
    ],
    sidebar: [
      {
        text: '通用', // 必要的
        children: [{ text: 'Button 按钮', link: '/components/button.html' }],
      },
      {
        text: '数据展示', // 必要的
        children: [
          { text: 'Fieldset 字段集', link: '/components/fieldset.html' },
          { text: 'blockquote 引用', link: '/components/blockquote.html' },
        ],
      },
      //   {
      //     title: '布局', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: [['/components/button.html', '按钮']],
      //   },
      //   {
      //     title: '导航', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: [['/components/button.html', '按钮']],
      //   },
      //   {
      //     title: '数据录入', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: [['/components/button.html', '按钮']],
      //   },
      //   {
      //     title: '数据展示', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: [['/components/button.html', '按钮']],
      //   },
      //   {
      //     title: '反馈', // 必要的
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1, // 可选的, 默认值是 1
      //     children: [['/components/button.html', '按钮']],
      //   },
    ],
  },
};
