"use strict";

require("core-js/modules/es7.promise.finally");

var _add = require("./add");

console.log([1, 2, 3, 4, 5].map(x => x * x));
console.log((0, _add.add)(10, 20));
Promise.resolve().finally();

for (let item of [1, 2, 3, 4, 5, 6, 7]) {
  console.log(item);
}