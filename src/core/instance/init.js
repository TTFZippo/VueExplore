/*
 * @Author: TTFZippo
 * @Date: 2021-12-05 16:55:59
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-12-05 17:11:07
 * @Description: 
 */
export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this;
    if(options && options._isComponent) {
      
    } else {
      vm.$options = options
    }
    if(vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
} 