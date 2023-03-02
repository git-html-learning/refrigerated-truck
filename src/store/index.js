// 存储入口文件，统一将模块存储导入在此
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import account from './modules/account'
import setting from './modules/setting'
import user from './modules/user'
import user1 from './modules/user1'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account,
    setting,
    user,
    user1
  },
  getters
})
