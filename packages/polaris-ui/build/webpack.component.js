/*
 * @Author: your name
 * @Date: 2021-07-10 10:29:17
 * @LastEditTime: 2021-07-10 12:48:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /polaris-ui/build/webpack.component.js
 */
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

const Components = require('../components.json');

const webpackConfig = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: process.cwd(),
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin()
  ]
};

module.exports = webpackConfig;
