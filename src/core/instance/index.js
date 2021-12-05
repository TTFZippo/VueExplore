/*
 * @Author: TTFZippo
 * @Date: 2021-12-05 16:41:04
 * @LastEditors: TTFZippo
 * @LastEditTime: 2021-12-05 17:06:53
 * @Description: 
 */
import { initMixin } from "./init"

function Vue(options) {
  this._init(options);
}

initMixin(Vue);
export default Vue