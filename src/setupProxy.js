// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://kreedacbit.onrender.com", // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
