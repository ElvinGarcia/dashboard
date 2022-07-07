
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/popular.json",
//     createProxyMiddleware({
//       target: "https://www.reddit.com/r",
//       changeOrigin: true,
//       cookieDomainRewrite: {
//         "*": ""
//       }
//     })
//   );

//   app.use(
//     "/topstories.json",
//     createProxyMiddleware({
//       target: "https://hacker-news.firebaseio.com/v0",
//       changeOrigin: true,
//       cookieDomainRewrite: {
//         "*": ""
//       }
//     })
//   );
// };


// "http-proxy-middleware": "^2.0.6",