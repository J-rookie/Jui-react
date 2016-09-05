/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-07-15 09:30:00
 * @version $Id$
 */
/* */

// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var path = require('path');
//
var Webpack = require("webpack");

module.exports={
    //插件配置
    plugins: [//注意这是一个数组..
        new Webpack.BannerPlugin("钱小端的初体验")
    ],
    //入口文件配置
    entry: {
        './app':'./example/main.js',
    },
    //产出文件配置
    output:{
        //path:path.join(__dirname),
        filename: '[name].js',
        //publicPath: './dist/'
        // 公共文件生成的地址
    },
    //监听开关
    //watch:true,
    //服务器配置
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    //模块配置
    module: {
        //加载器
        loaders: [
            // jsx语法编译 //转换ES6语法
            { test: /\.(js|jsx)?$/, loader: 'babel', exclude: /node_modules/ },
            // 检测CSS后缀使用插件  
            { test: /\.css$/, loader: "style!css"},
            // 添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
            { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192&name=./example/temp/images/[name].[ext]" },
            //sass编译
            { test: /\.scss$/, loader: "style!css!sass"},
        ],
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015','react'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js','.jsx'],
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到//生产模式要关闭否则体积吓死你
    /*devtool: 'eval-source-map'*/
    devtool: false,
}