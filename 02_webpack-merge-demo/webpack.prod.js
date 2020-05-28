const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  /*
  * Avoid inline-*** and eval-*** use in production
  * as they can increase bundle size and reduce the overall performance.
  * */
  devtool: 'source-map'
})
