/*
 * @Author: your name
 * @Date: 2022-01-10 14:35:11
 * @LastEditTime: 2022-01-10 14:43:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \polaris\packages\polaris-lint\packages\eslint-plugin-polaris\src\configs\recommended.js
 */
module.exports = {
  plugins: ['polaris'],
  rules: {
    'polaris/no-http-url': 'warn',
    'polaris/no-secret-info': 'error',
  },
}