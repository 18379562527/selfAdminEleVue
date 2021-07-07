const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
console.log(process.env.NODE_ENV)
module.exports = {
    publicPath: './',
    devServer: {
        open: true, // 是否自动打开默认浏览器
        port: 8888, // 端口号
    },
    css: {
        loaderOptions: {
            css: {
                
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // 这样配置后 @ 可以指向 src 目录
    },
}