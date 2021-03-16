import { login} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    productList:[],
    deviceList:[],
    total:0,
  }
}
const state = getDefaultState()
const mutations = {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PRODUCTlIST(state, list) {
      state.productList =list
    },
    SET_TOTAL(state,total){
      state.total=total
    },
  }
  
  const actions = {
    // user login
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
  } ,
  //total 
  total({commit},total){
    return commit('SET_TOTAL',total)
  }
}
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
  