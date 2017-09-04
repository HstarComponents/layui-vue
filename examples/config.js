window.AppConf = {
  rootHost: 'http://localhost:8080',
  menus: [
    { path: '/', icon: 'fa fa-dashboard text-maroon', text: 'Dashboard' },
    {
      path: '/ui', icon: 'fa fa-laptop', text: 'UI Elements', children: [
        { path: '/ui/box', icon: 'fa fa-circle-o text-red', text: 'Box' },
        { path: '/ui/info-box', icon: 'fa fa-circle-o text-yellow', text: 'Info Box' },
        { path: '/ui/small-box', icon: 'fa fa-circle-o text-yellow', text: 'Small Box' },
        { path: '/ui/alert', icon: 'fa fa-circle-o text-yellow', text: 'Alert' },
        { path: '/ui/progress', icon: 'fa fa-circle-o text-yellow', text: 'Progress' },
        { path: '/ui/tabset', icon: 'fa fa-circle-o text-yellow', text: 'Tabset' },
        { path: '/ui/modal', icon: 'fa fa-circle-o text-yellow', text: 'Modal' },
        { path: '/ui/timeline', icon: 'fa fa-circle-o text-yellow', text: 'Timeline' },
        { path: '/ui/tag', icon: 'fa fa-circle-o text-yellow', text: 'Tag' },
      ]
    },
    {
      path: '/forms', icon: 'fa fa-edit', text: 'Forms', children: [
        { path: '/forms/pagination', icon: 'fa fa-circle-o text-red', text: 'Pagination' },
        { path: '/forms/rating', icon: 'fa fa-circle-o text-yellow', text: 'Rating' },
        { path: '/forms/tag-input', icon: 'fa fa-circle-o text-yellow', text: 'Tag Input' }
      ]
    }
  ]
};
