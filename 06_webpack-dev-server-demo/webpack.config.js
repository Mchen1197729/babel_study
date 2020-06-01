const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    /*
    * contentBase:String
    * Tell the server where to serve content from.
    * This is only necessary if you want to serve static files.
    * */
    // contentBase: path.resolve(__dirname, 'public'),
    /*
    * compress:Boolean
    * Enable gzip compression for everything served
    * */
    compress: true,
    /*
    * hot:Boolean
    * Enable webpack's Hot Module Replacement feature.
    * NOTE:Note that webpack.HotModuleReplacementPlugin is required to fully enable HMR
    * */
    hot: true,
    /*
    * open:Boolean
    * Tells dev-server to open the browser after server had been started.
    * Set it to true to open your default browser.
    * */
    open: true,
    /*
    * https:Boolean
    * By default, dev-server will be served over HTTP.
    * It can optionally be served over HTTP/2 with HTTPS
    * */
    // https: true,
    /*
    * host:String
    * Specify a host to use.
    * If you want your server to be accessible externally, specify it like this:
    * 将host设置为本机的局域网ip 这样同一个局域网下的设备就都可以访问该页面了
    * */
    host: '192.168.2.195',
    /*
    * after:function (app, server, compiler)
    * 1.app:就是express()返回的服务器对象
    * 2.server:
    * 3.compiler:
    * Provides the ability to execute custom middleware
    * after all other middleware internally within the server
    * */
    // after(app, server, compiler) {
    //   // console.log(app, server, compiler)
    // },
    /*
    * before:function (app, server, compiler)
    * Provides the ability to execute custom middleware prior to all other middleware internally
    * within the server.
    * This could be used to define custom handlers
    * 相当于给express服务器添加了一个中间件
    * */
    before(app, server, compiler) {
      //如果访问http://192.168.2.195/some/path 那么会得到响应:{custom:'response}
      app.get('/some/path', function (req, res) {
        res.json({custom: 'response'});
      });
    },
    /*
    * allowedHosts:[String]
    * This option allows you to whitelist services that are allowed to access the dev server
    * */
    // allowedHosts: [],
    /*
    * bonjour:boolean=false(默认是false)
    * This option broadcasts the server via ZeroConf networking on start
    * */
    // bonjour: true,
    /*
    * inline:boolean:true
    * Toggle between the dev-server's two different modes.
    * By default, the application will be served with inline mode enabled.
    * This means that a script will be inserted in your bundle to take care of live reloading,
    * and build messages will appear in the browser console.
    * */
    inline: false,
    // writeToDisk: true,
  },

  module: {
    rules: []
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      /*
      * 此处需要模板文件src/index.html中将title写成:
      *   <title><%= htmlWebpackPlugin.options.title %></title>
      * 这样才可以起作用
      * */
      title: "webpack-dev-server"
    })
  ]
}
