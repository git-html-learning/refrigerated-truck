import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { adminToken } from '@/utils/auth1'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token1) {
      // console.log(store.getters.token1)
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers.token  = adminToken()
    }
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response=>{
    return response.data
  },
  error=>{
    return Promise.reject(error)
  }
)

export default service