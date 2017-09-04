import Vue from 'vue';

import router from './router.config';
import App from './App.vue';

import lvUI from './../src/index';
Vue.use(lvUI);
import { COMPONENTS } from './components';
COMPONENTS.forEach(c => {
  Vue.component(c.name, c);
});

import axios from 'axios';
window.axios = axios;
import './config.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
