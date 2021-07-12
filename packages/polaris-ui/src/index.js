/*
 * @Author: your name
 * @Date: 2021-07-09 18:25:28
 * @LastEditTime: 2021-07-10 13:01:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris-ui/src/index.js
 */
import Foo from '../components/Foo/index.js'
import Bar from '../components/Bar/index.js'

const components = [ Foo, Bar ]

const install = function(Vue, option = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Foo,
  Bar
}