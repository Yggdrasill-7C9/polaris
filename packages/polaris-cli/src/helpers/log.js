/*
 * @Author: your name
 * @Date: 2021-07-13 00:23:20
 * @LastEditTime: 2021-07-13 00:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris/packages/polaris-cli/src/helpers/log.js
 */
const chalk = require('chalk')

const getNowTime = () => {
  const now = new Date()
  return now.toLocaleString()
}

const log = (type, message) => console.log(`${getNowTime()} [polaris] ${chalk[type](message)}`)

module.exports = {
  sucess(message) {
    return log('green', message)
  },
  warning(message) {
    return log('yellow', message)
  },
  error(message) {
    return log('red', message)
  },
  info(message) {
    return log('cyan', message)
  },
}