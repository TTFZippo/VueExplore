/*
 * @Author: TTFZippo
 * @Date: 2021-12-05 16:08:32
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-12-05 17:17:49
 * @Description: 
 */
import Vue from './runtime/index'
Vue.prototype.$mount = function(el, hydrating) {
  console.log('mount', el);
}
export default Vue;
