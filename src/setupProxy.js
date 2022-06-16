
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/popular.json",
    createProxyMiddleware({
      target: "https://www.reddit.com/r",
      changeOrigin: true,
      cookieDomainRewrite: {
        "*": ""
      }
    })
  );
};


