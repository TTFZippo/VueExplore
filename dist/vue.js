(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  /*
   * @Author: TTFZippo
   * @Date: 2021-12-05 16:55:59
   * @LastEditors: TTFZippo
   * @LastEditTime: 2021-12-05 17:11:07
   * @Description: 
   */
  function initMixin(Vue) {
    Vue.prototype._init = function(options) {
      const vm = this;
      if(options && options._isComponent) ; else {
        vm.$options = options;
      }
      if(vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  /*
   * @Author: TTFZippo
   * @Date: 2021-12-05 16:41:04
   * @LastEditors: TTFZippo
   * @LastEditTime: 2021-12-05 17:06:53
   * @Description: 
   */

  function Vue(options) {
    this._init(options);
  }

  initMixin(Vue);

  /*
   * @Author: TTFZippo
   * @Date: 2021-12-05 16:40:10
   * @LastEditors: TTFZippo
   * @LastEditTime: 2021-12-05 16:42:35
   * @Description: 
   */

  /*
   * @Author: TTFZippo
   * @Date: 2021-12-05 16:43:30
   * @LastEditors: TTFZippo
   * @LastEditTime: 2021-12-05 16:44:40
   * @Description: 
   */

  /*
   * @Author: TTFZippo
   * @Date: 2021-12-05 16:08:32
   * @LastEditors: TTFZippo
   * @LastEditTime: 2021-12-05 17:17:49
   * @Description: 
   */
  Vue.prototype.$mount = function(el, hydrating) {
    console.log('mount', el);
  };

  return Vue;

})));
