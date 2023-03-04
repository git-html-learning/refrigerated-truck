import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/session',
    method: 'post',
    data
  })
}

//注册用户
export function userRegister(data) {
  return request({
    url: '/session',
    method: 'put',
    data

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


// 管理员登录
export function  adminLogin(data) {
  return request({
    url: '/admin',
    method: 'post',
    data
  })
}



