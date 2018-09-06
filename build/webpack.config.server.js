const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  externals: Object.keys(require('../package.json').dependencies), // 只需要require方式引入node modules里的就行了，减少打包的体积
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'development'
})
