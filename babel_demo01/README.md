## Babel学习记录

### babel.config.json中的useBuiltIns选项
>1.如果没有这个选项 那么babel会将整个core-js都引入 
>2.加上了useBuiltIns:'usage'以后 babel会针对浏览器缺失的特性做针对的引入  而不是整体引入
    例如:如果目标浏览器缺失Promise.prototype.finally()这个特性 那么就会对应的生成require("core-js/modules/es.promise.finally"); 

### babel.config.json中plugins和presets的配置
>1.作用顺序:如果一个配置文件中既包含plugins又包含presets 那么
    1.1 plugins在presets前运行
    1.2 plugins是按顺序作用
    1.3 presets是倒序作用
```JSON
{
  "presets": ["es2015", "react", "stage-2"],
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```

>2.如果plugin是以babel-plugin-开头 可以进行简写 例如：babel-plugin-myPlugin等价于myPlugin
   如果preset是以babel-preset-开头 可以进行简写 例如：babel-preset-myPreset等价于myPreset

>3.plugins和presets都可以接受参数 参数由plugins名称&presets名称和参数对象组成一个数组
```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

### babel.config.json文件presets的配置选项
>1.modules:默认是auto ->默认将代码转变成使用commonjs模块的形式  使用require()导入 使用module.exports导出

>2.设置modules:false ->转变的代码不会改变使用的模块 原来用什么模块转译后的代码还是使用哪种模块



