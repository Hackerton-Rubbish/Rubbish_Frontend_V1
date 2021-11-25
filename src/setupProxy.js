const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use (
    '/v1',
    createProxyMiddleware({
      target: 'http://54.180.163.28:8000',
      changeOrigin: true,
    })
  )
}