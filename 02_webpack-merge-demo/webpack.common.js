const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: "bundle.[name].js",
    path: resolve(__dirname, 'dist-min')
  },

  module: {
    rules: []
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ]
}
