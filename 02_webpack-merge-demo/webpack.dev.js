const {resolve} = require('path')


const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 90,
    contentBase: resolve(__dirname, 'dist'),
    hot: true
  }
})
