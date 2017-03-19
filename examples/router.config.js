import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import {
  WelcomePage,
  NotFoundPage,

  ButtonPage,
  ProgressPage,
  FormsPage,
  AuxiliarPage,
  TabPage
} from './pages';

/* 路由配置 */
const routes = [
  { path: '', component: WelcomePage },
  { path: '/button', component: ButtonPage },
  { path: '/progress', component: ProgressPage },
  { path: '/forms', component: FormsPage },
  { path: '/auxiliar', component: AuxiliarPage },
  { path: '/tab', component: TabPage },
  // { path: '/testresume', component: TestResumeDetail },
  { path: '*', component: NotFoundPage }
];

/* 注册路由 */
const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
