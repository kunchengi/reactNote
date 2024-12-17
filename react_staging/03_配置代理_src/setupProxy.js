const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // 把/api路径的请求代理到5000端口
    app.use(
        proxy.createProxyMiddleware('/api', {
             target: 'http://localhost:5000',
             changeOrigin: true,// 控制服务器收到的请求头中Host字段的值
             pathRewrite: {
                 '^/api': ''// 将前缀为/api的请求路径替换成空字符串
             }
        }),
    );

    // 不知道为什么写api2会有问题，所以改成/apc
    app.use(
        proxy.createProxyMiddleware('/apc', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {
                '^/apc': ''
            }
        })
    );
};