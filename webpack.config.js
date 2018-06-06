const path = require("path");
// 引入html-webpack-plugin模块
const htmlWebpackPlugin = require("html-webpack-plugin");
// 引入clean-webpack-plugin模块
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // 入口
    entry: path.resolve(__dirname,"./src/js/app.js"), //制定webpack打包的入口为app.js （配置路径用path.resolve()处理 ）
    // 出口
    output:{
         path: path.resolve(__dirname,"./dist"), //指定打包后js文件放置的位置
        filename: "js/bundle-[hash:1].js" //指定打包后的js名称，也是index.html最终引入的js名称,(hash：用于区别版本)
    },
    // 初始化插件
    plugins:[
        // 根据模块动态生成html
        new htmlWebpackPlugin({
            template:"index.html"
        }),
        // 删除dist文件夹下重复的文件
        new cleanWebpackPlugin(["dist"],{
            root: __dirname, //指定插件根目录位置
            verbose: true, //开启在控制台输出信息
            dry: false ///启用删除文件
        })
    ]
}