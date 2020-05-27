const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const webpack = require('webpack')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: "bundle.[hash:15].js",
    path: resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    hot: true,
    port: 9090
    // progress: true
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
