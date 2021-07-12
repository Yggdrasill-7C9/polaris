/*
 * @Author: your name
 * @Date: 2021-07-13 00:19:59
 * @LastEditTime: 2021-07-13 01:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris/packages/polaris-cli/src/tasks/init.js
 */

const prompts = require('prompts')
const log = require('../helpers/log')

async function initProject(name) {
  if (name) {
    await createProject(name)
  } else {
    const response = await prompts([{
      type: 'text',
      name: 'name',
      meassage: '请输入项目名称'
    }])
    if (response.name) {
      await createProject(name)
    } else {
      await initProject(name)
    }
  }
}

function createProject(name) {
  // 获取当前工作路径
  // 如果目录存在，重新输入
  log.info(`项目 ${name} 创建完成，请执行下面的命令进行使用：`)
  log.info(`$ cd ${name}`)
  log.info('$ npm i')
  log.info('$ npm run dev')
}

module.exports = initProject