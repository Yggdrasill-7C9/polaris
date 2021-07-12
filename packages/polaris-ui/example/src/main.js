/*
 * @Author: your name
 * @Date: 2021-07-10 14:35:04
 * @LastEditTime: 2021-07-10 15:12:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris-ui/example/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
// import PolarisUI from '../../lib'
import { Bar } from '../../lib'

Vue.use(Bar)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
