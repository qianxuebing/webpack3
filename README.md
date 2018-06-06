# webpack3

#### 第一步:初始化项目文件
1.新建一个webpack文件夹，下创建dist, src两个文件夹，webpack.config.js文件，index.html文件，.babelrc文件。

2.dist文件夹下创建一个js文件夹;src文件夹下创建js文件夹，css文件夹，views文件夹;js文件加下创建app.js文件。
   
#### 第二步:创建packahe.json     
找到这个项目文件夹，执行指令 npm init 创建packahe.json
    
#### 第三步:创建node_modules  
执行指令 cnpm install webpack --save-dev  生成node_modules

#### 配置webpack.config.js  
`const path = require("path");`
`module.exports = {`
    `// 入口`
    `entry: path.resolve(__dirname,"./src/js/app.js"), //制定webpack打包的入口为app.js （配置路径用path.resolve()处理）`
    `// 出口`
    `output:{`
         `path: path.resolve(__dirname,"./dist"), //指定打包后js文件放置的位置`
        `filename: "js/bundle-[hash:1].js" //指定打包后的js名称，也是index.html最终引入的js名称`
    `},`
    `// 初始化插件`
    `plugins:[`
        `new htmlWebpackPlugin({`
            `template:"index.html"`
        `}),`
        `new cleanWebpackPlugin(["dist"],{`
            `root:__dirname,`
            `verbose:true,`
            `dry:false`
        `})`
   `]`
`}`

    
