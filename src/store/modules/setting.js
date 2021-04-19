// 页面设置
export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    systemName: '安徽开乐',
    copyright: ' 2019 出品人：Ywzhou',
    footerLinks: [
      // { link: 'http://www.honen.cn/', name: '弘恩科技' }
      { link: 'http://www.chinacar.com.cn/enterprise/14/', name: '安徽开乐' }
      // { link: 'https://github.com/iczer/vue-antd-admin', icon: 'github' },
      // { link: 'https://ant.design', name: 'Ant Design' }
    ],
    multipage: true
  },
  mutations: {
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setMultipage (state, multipage) {
      state.multipage = multipage
    }
  }
}
