# webpack3

### 初始化项目文件
>webpack3.0 demo
   
### 创建packahe.json     
>npm init 

### 安装webpack
>cnpm install webpack --save-dev  

### webpack配置，生成带hash值的js文件
`output:{`

`  path: path.resolve(__dirname,"./dist")`

`  filename: "js/bundle-[hash:1].js"`

`}`

### 动态生成html
>cnpm install html-webpack-plugin --save-dev

### 清除重复的文件
>cnpm install clean-webpack-plugin --save-dev

### 安装css加载器
>cnpm i style-loader css-loader --save-dev

>cnpm i postcss-loader autoprefixer --save-dev

### css预处理器less
>cnpm i less less-loader --save-dev

### babel编译ES6
>cnpm install  babel-loader babel-core babel-preset-env --save-dev

### css与js分离
>cnpm i extract-text-webpack-plugin --save-dev

### 执行编译
>webpack


    
