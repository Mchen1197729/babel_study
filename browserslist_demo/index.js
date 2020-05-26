const browserslist = require('browserslist')
console.log(browserslist.coverage(browserslist('defaults,> 1%')))
