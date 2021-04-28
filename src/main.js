import Vue from 'vue'
import Antd from 'ant-design-vue' // 导入所有组件
import App from './App.vue'
import router from './routes'
import store from './store'
import axios from './utils/axios'
import 'ant-design-vue/dist/antd.less' // 导入所有组件样式
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viser from 'viser-vue'
import Print from 'vue-print-nb'//打印
Vue.use(Print);  //注册
Vue.use(Viser)
// const g2plot = require('@antv/g2plot') // 1. 引入g2plot
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'h4FizFQhYHfqEMM2cnNnrQyWx9pzOYQE'
})


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$form = Antd.Form
// Vue.prototype.$g2plot = g2plot 
Vue.use(Antd)
// Vue.use(Chart)
// 导入部分组件
// import { Button } from 'ant-design-vue'
// Vue.component(Button.name, Button)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import 'echarts-gl';
const g2plot = require('@antv/g2plot') // 1. 引入g2plot
Vue.prototype.$g2plot = g2plot // 2. 将g2plot挂载到vue中
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
