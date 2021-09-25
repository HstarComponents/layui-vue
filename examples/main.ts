import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { LayMenu } from '../src';

const app = createApp(App);
app.use(store);
app.use(router);
LayMenu.install(app);
app.mount('#app');
