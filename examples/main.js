import Vue from 'vue';

import router from './router.config';
import App from './App.vue';

import lvUI from './../src/index';
Vue.use(lvUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
