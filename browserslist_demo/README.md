## browserslist一些知识

### 如果只在命令行使用则不需要安装 如果不是在命令行使用则需要npm i browserslist

#### 1.使用命令行查看browserslist的支持情况
```shell script
#查看package.json中设置的browserslist的浏览器支持情况
npx browserslist 
```

#### 2.使用API查看browserslist的支持情况
```js
const browserslist = require('browserslist')
console.log(browserslist.converage(browserslist('defaults,not ie<=8'))) //80.987789789002
```


### 配置文件 推荐使用package.json文件 在package.json文件中添加browserslist属性 值为对象或者数组

##### 1.直接配置
```json
{
  "browserslist": [
      "defaults",
      "not ie <=8",
      "last 2 version"
  ]
}
```
##### 2.针对不同的环境做不同的配置
```json
{
  "browserslist": {
    "production": [
      
    ],
    "modern": [
    
    ],
    "ssr": [
    
    ]
  }
}
```
