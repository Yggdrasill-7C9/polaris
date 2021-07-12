/*
 * @Author: your name
 * @Date: 2021-07-09 17:55:53
 * @LastEditTime: 2021-07-09 18:12:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris-ui/lib/Bar/index.js
 */
import Bar from './src/Bar.vue'

Bar.install = function(Vue) {
  Vue.component(Bar.name, Bar)
}

export default Bar