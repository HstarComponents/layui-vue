window.AppConf = {
  rootHost: 'http://localhost:8080',
  menus: [
    // { path: '/', icon: 'fa fa-dashboard text-maroon', text: '布局' },
    {
      path: '', icon: 'fa fa-edit', text: '表单', children: [
        { path: '/pagination', text: '多功能分页' },
        { path: '/rating', icon: 'fa fa-circle-o text-yellow', text: 'Rating' },
        { path: '/tag-input', icon: 'fa fa-circle-o text-yellow', text: 'Tag Input' },
        { path: '/drop-down-list', text: '下拉框' }
      ]
    },
    {
      path: '', icon: 'fa fa-laptop', text: 'UI组件', children: [
        { path: '/buttons', icon: 'fa fa-circle-o text-red', text: '按钮组' },
        { path: '/tabset', icon: 'fa fa-circle-o text-yellow', text: '选项卡' },
        { path: '/progress', icon: 'fa fa-circle-o text-yellow', text: '进度条' },
        { path: '/accordion', icon: 'fa fa-circle-o text-yellow', text: '折叠面板' },
        { path: '/table', icon: 'fa fa-circle-o text-yellow', text: '表格' },
        { path: '/modal', text: '模态框' },
        { path: '/tree', text: '树形菜单' },
        { path: '/date-picker', text: '时间选择' },
        { path: '/auxiliar', text: '简单辅助元素' }
      ]
    }
  ]
};
