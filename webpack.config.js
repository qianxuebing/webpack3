const path = require("path");
// 引入html-webpack-plugin模块
const htmlWebpackPlugin = require("html-webpack-plugin");
// 引入clean-webpack-plugin模块
const cleanWebpackPlugin = require("clean-webpack-plugin");

let extractTextPlugin = require("extract-text-webpack-plugin");

let extractCSS = new extractTextPlugin('css[name]-one.css');
let extractLESS = new extractTextPlugin('css[name]-two.css');

module.exports = {
    // 入口
    entry: path.resolve(__dirname, "./src/js/app.js"), //制定webpack打包的入口为app.js （配置路径用path.resolve()处理 ）
    // 出口
    output: {
        path: path.resolve(__dirname, "./dist"), //指定打包后js文件放置的位置
        filename: "js/[name]-[chunkhash].js"
    },
    // 配置css加载器     
    module: {
        rules: [{
            test: /\.css$/, //匹配所有css文件 
            exclude: /node_modules/  //排除对node_module文件夹下面的所有资源的匹配 
            use: extractCSS.extract([
                //  { loader: "style-loader" }, 
                 { loader: "css-loader", options: { importLoaders: 1 } },//importLoaders解决由于css-loader处理文件导入的方式导致postcss-loader不能正常使用的问题
                 { loader: "postcss-loader" }
                ]) //指定postcss加载器
                 
            }, {
            test: /\.less$/, 
            exclude: /node_modules/,
                use: extractLESS.extract([
                // { loader: "style-loader" }, 
                { loader: "css-loader", options: { importLoaders: 1 } }, 
                { loader: "postcss-loader" }, 
                { loader: "less-loader" }//less放在最后，因为要最先加载（loader从右往左加载的规则） 
            ]) 
            }, {
                test: /\.js$/,
                loader: "babel-loader" ,
                exclude: /node_modules/               
            }
        ] 
    },

    // 注册插件
    plugins:[
        extractCSS,
        extractLESS
    ]
    // 初始化插件
    plugins: [
        // 根据模块动态生成html
        new htmlWebpackPlugin({
            template: "index.html"
        }),
        // 删除dist文件夹下重复的文件
        new cleanWebpackPlugin(["dist"], {
            root: __dirname, //指定插件根目录位置
            verbose: true, //开启在控制台输出信息
            dry: false ///启用删除文件
        })
    ]
}