import { adminLogin} from '@/api/user'
import { adminToken} from '@/utils/auth1'
// import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: adminToken(),
  }
}
const state = getDefaultState()
const mutations = {
    RESET_STATE: (state) => {
      Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  }

  const actions = {
    // user login
    adminLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        adminLogin(userInfo).then(response => {
          const { data } = response
          commit('SET_TOKEN', data.token)
          adminToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
  } ,
}
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }

