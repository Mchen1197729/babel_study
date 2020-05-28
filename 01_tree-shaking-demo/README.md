## webpack中使用tree-shaking的注意点

### 1.tree-shaking 将代码中未使用到的dead-code(不起任何作用的代码)剔除掉 保留下来的代码都是起作用的;

### 2.tree-shaking 只对使用import&export方式实现导入/导出的代码起作用;

### 3.避免babel将代码转译为Commonjs模块(这是babel的默认行为) 通过设置modules:false来取消这一默认行为;

### 4.使用sideEffects属性来标识那些代码是有副作用的(避免被tree-shaking掉);

### 5.将mode设置为'development' 并且使用支持tree-shaking功能的压缩工具 例如:UglifyJsPlugin;
