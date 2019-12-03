module.exports = {
  devServer: {
    open: true,
    port: 9999,
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');
  }
}
