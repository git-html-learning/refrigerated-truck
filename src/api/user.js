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

export function  person(data) {
  return request({
    url: '/api/v1/user/通宇项目测试',
    method: 'GET',
    data
  })
}
