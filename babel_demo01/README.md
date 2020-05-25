## Babel学习记录

### babel.config.json中的useBuiltIns选项
>1.如果没有这个选项 那么babel会将整个core-js都引入 
>2.加上了useBuiltIns:'usage'以后 babel会针对浏览器缺失的特性做针对的引入  而不是整体引入
    例如:如果目标浏览器缺失Promise.prototype.finally()这个特性 那么就会对应的生成require("core-js/modules/es.promise.finally"); 