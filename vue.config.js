// https://cli.vuejs.org/zh/config/
const LessThemePlugin = require('webpack-less-theme-plugin')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less变量，可用来覆盖antd组件样式，参见src/assets/css/theme.less
          // 'primary-color': '#1890ff',
          // 'link-color': '#1890ff',
          // 'border-radius-base': '20px'
        },
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'source-map'
    }
    // 打包自定义less主题的插件
    config.plugins.push(
      new LessThemePlugin({ theme: './src/assets/css/theme.less' })
    )
  },
  devServer: {
    // 代理api接口转发地址
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `https://api.ahusmart.com`,
        changeOrigin: true,
        ws:false,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
}
