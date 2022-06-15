const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 app.use(
   '/api',
   createProxyMiddleware({
     target: 'http://13.250.20.232:3000',
     changeOrigin: true,
   })
 );
};

