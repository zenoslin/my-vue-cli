import preLoad from './PreLoad';
import getQuery from './GetQuery';
import { noallowScroll, allowScroll } from './ScrollControl';

const myUtils = {
  preLoad,
  getQuery,
  noallowScroll,
  allowScroll
};
myUtils.install = Vue => {
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$myUtils = {
    preLoad,
    getQuery,
    noallowScroll,
    allowScroll
  };
};

export default myUtils;
