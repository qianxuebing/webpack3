const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname,"./src/js/app.js"),
    output:{
         path: path.resolve(__dirname,"./dist"),
        filename: "js/bundle-[hash:1].js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"index.html"
        }),
        new cleanWebpackPlugin(["dist"],{
            root:__dirname,
            verbose:true,
            dry:false
        })
    ]
}