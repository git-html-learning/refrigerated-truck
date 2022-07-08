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

export function  person(username) {
  return request({
    url: '/api/v1/user/'+username,
    method: 'GET',
  })
}
// 修改用户信息
export function  editPerson(data) {
  return request({
    url: '/api/v1/user',
    method: 'PUT',
    data
  })
}
