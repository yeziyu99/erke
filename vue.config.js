const path = require('path')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/styles/index.scss";
                `
            }
        }
    },

    devServer: {
      host: 'localhost',
      port:6688,
      disableHostCheck: true,
      open: true,
      proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
          '/api': {
            //   target: 'www.tigerbrokers.co.uk'  ,   // 线上接口地址
              target: 'https://api.jy129.cn'  ,   // 测试接口地址
              ws: true,
              changeOrigin: true
          },
          '/foo': {
              target: '<other_url>'
          }
      }
    },
    //关闭eslint规范
    lintOnSave: false,
    pluginOptions: {// 第三方插件配置
        // ...
    },
    productionSourceMap: false   // 代码build后压缩
}