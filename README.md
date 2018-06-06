# webpack3

### 初始化项目文件
>webpack3.0 demo
   
### 创建packahe.json     
>npm init 

### 安装webpack
>cnpm install webpack --save-dev  

### webpack配置，生成带hash值的js文件
`output:{`

`  path: path.resolve(__dirname,"./dist"), //指定打包后js文件放置的位置`

`  filename: "js/bundle-[hash:1].js" //指定打包后的js名称，也是index.html最终引入的js名称`

`}`

### 动态生成html
>cnpm install html-webpack-plugin

### 清除重复的文件
>cnpm install clean-webpack-plugin

### 执行编译
>webpack


    
