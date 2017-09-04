import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import {
  DemoContainer,
  Praise,
  Home
} from './pages';

/* 路由配置 */
const routes = [
  { path: '/', component: Home },
  { path: '/praise', component: Praise },
  { path: '*', component: DemoContainer }
];

export const router = new VueRouter({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  next();
});


export default router;
