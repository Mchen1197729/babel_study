import "core-js/modules/es7.promise.finally";
import {add} from "./add";

console.log([1, 2, 3, 4, 5].map(a => a * a)), console.log(add(10, 20)), Promise.resolve().finally();
for (let a of [1, 2, 3, 4, 5, 6, 7]) console.log(a);
