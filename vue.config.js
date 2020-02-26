module.exports = {
  devServer: {
    open: true,
    port: 1024,
    proxy: {
      '/api': {
        target: "http://localhost:8080/api",
        ws: true,//是否代理websockets
        changeOrigin: true   //默认false，是否跨域
      }
    },
  },
};
