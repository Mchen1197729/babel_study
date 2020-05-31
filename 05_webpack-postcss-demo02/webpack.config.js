const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',

  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: "[name].[chunkhash:16].js",
    path: resolve(__dirname, 'dist-css-extract')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          //最后一个作用
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          //如果使用mini-css-extract-plugin提供的MiniCssExtractPlugin.loader,就不能使用style-loader了(二者会冲突)
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',
            options: {
              //该选项表示:在css-loader作用于被import 引用的css文件之前 有多少个loader作用于该css文件
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            //postcss-loader的配置写在这里,不要单独写在postcss.config.js文件里
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(),
                require('cssnano')(),
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
      title: "webpack-postcss-loader-demo"
    }),
  ]
}