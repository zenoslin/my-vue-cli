import Vue from 'vue';
import myConst from './constants';
import App from './App.vue';
import store from './store';
import axios from './api';
import router from './router';
import myUtils from './utils';
import sdk from './sdk';
import sdkModule from './sdk';

Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.myConst = myConst;
Vue.prototype.sdk = sdk;
Vue.use(myUtils); // use $myUtils in vue

const debugType = myUtils.getQuery('debug');
const wechatDebug = debugType === myConst.DEBUG_MODE_WECHAT;
if (debugType !== myConst.DEBUG_MODE_WEB) {
  sdkModule.sdkInit({
    debug: wechatDebug,
    jsApiList:[
      'checkJsApi',
      'updateAppMessageShareData',
      'updateTimelineShareData'
    ]
  });
}
if (wechatDebug) {
  // eslint-disable-next-line
  let vConsole = new VConsole();
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
