const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    //入口chunk的文件中name默认为main
    //this option does not affect output files for on-demand-loaded chunks
    // contenthash和chunkhash似乎都可以实现缓存(只改变有调整的文件的文件名 没有调整到额文件的文件名不会变)
    filename: "[name].[contenthash:20].js",
    // filename: "[name].[chunkhash:16].js",
    path: resolve(__dirname, 'dist_contenthash_20'),
    // /*
    // * chunkFilename决定非入口chunk的名称
    // * 1.如果在import()动态导入的时候没有提供特殊的注释 则默认name为 `bundle[id].js` id从1开始递增
    // * 2.如果在import()动态导入的时候提供了特殊的注释 则name就是注释的webpackChunkName
    // *   eg:import(/* webpackChunkName: "sayHi" */'./sayHi') 此时该chunk的name就是sayHi
    // *     而且此时可以不用写chunkFilename属性 因为webpack默认就会将文件名命名为bundle.[name].js
    // * */
    chunkFilename: '[name].[contenthash:16].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: 'usage',
                  modules: false
                }
              ]
            ],
            cacheDirectory: true
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],

  mode: "production"
}
