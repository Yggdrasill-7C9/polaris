/*
 * @Author: your name
 * @Date: 2021-07-09 17:55:57
 * @LastEditTime: 2021-07-09 18:13:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris-ui/lib/Foo/index.js
 */
import Foo from './src/Foo.vue'

Foo.install = function(Vue) {
  Vue.component(Foo.name, Foo)
}

export default Foo