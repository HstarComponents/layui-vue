import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';

const install = function (Vue, options = {}) {
  COMPONENTS.forEach(c => {
    Vue.component(c.name, c);
  });
  DIRECTIVES.forEach(d => {
    Vue.directive(d.name, d);
  });
};

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(Vue);
}

const lvUI = {
  version: '0.1.0'
};

export default Object.assign(lvUI, { install });
