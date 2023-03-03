//超级管理员操作界面
import request from '@/utils/request1'


export function getUserList(data) {     //获取所有用户
  return request({
    url: '/api/v1/admin/users',
    method: 'GET',
  })
}

export function deleteUser(username) {     //删除用户
  return request({
    url: '/api/v1/admin/user/'+username,
    method: 'DELETE',
  })
}


export function editUser(username,data) {     //修改用户信息
  return request({
    url: '/api/v1/admin/user/'+username,
    method: 'PUT',
    data
  })
}

