/*
 * @Author: your name
 * @Date: 2021-07-12 23:31:50
 * @LastEditTime: 2021-07-13 00:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris/packages/polaris-cli/bin/index.js
 */

const program = require('commander')
const package = require('../package.json')

program
  .version(package.version, '-v, --version')
  .description(package.description, '-h, --help')

// program.usage('<command> [options]')
//   .version(package.version, '-v, --version')
//   .description(package.description)

program.command('init <name>')
  .description('创建项目')
  .action(async name => {
    const initProject = require('../src/tasks/init')
    await initProject(name)
  })

program.parse(process.argv)