import json from './jsonFilter';

export default {
  install(Vue) {
    Vue.filter('json', json);
  },
};
