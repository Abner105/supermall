module.exports = {
  // 配置webpack
  configureWebpack:{
    // 配置别名
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'store':'@/store',
        'views':'@/views',
      }
    }
  }
}