import Vue from 'vue';
import App from './App.vue';
import store from './store';
import axios from './api';
import router from './router';
import myUtils from './utils';

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.use(myUtils); // use $myUtils in vue

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
