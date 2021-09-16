import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/session',
    method: 'post',
    data
  })
}

export function userRegister(data) {
  return request({
    url: '/session',
    method: 'put',
    data:{
      "username":data.username,
      "password":data.password,
      "phone":String(data.phone)
    }
  })
}