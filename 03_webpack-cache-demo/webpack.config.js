const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "production",
  // mode: 'development',

  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: "[name].[chunkhash].js",
    path: resolve(__dirname, 'dist-optimization')
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: []
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ['style-loader', 'css-loader'],
  //       //这里的css文件是通过import 'xxx.css'的形式引入的 而此css文件是有副作用的 因此不能写sideEffects:false
  //       // sideEffects: false
  //     }
  //   ]
  // },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: resolve(__dirname, 'src/index.html')
  //   })
  // ]
  optimization: {
    runtimeChunk: 'single'
  }
}
