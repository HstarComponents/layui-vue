import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import {
  Welcome,

  Button
} from './pages';

/* 路由配置 */
const routes = [
  { path: '', component: Welcome },
  { path: '/button', component: Button }
  // { path: '/testresume', component: TestResumeDetail },
  // { path: '*', component: NotFoundPage }
];

/* 注册路由 */
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
