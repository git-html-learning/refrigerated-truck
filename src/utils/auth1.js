import Cookies from 'js-cookie'

const token = 'admin_token'
// export function getToken() {
//   return Cookies.get(TokenKey)
// }
export function adminToken() {
  return Cookies.get(adminToken)
}
export function setToken(token) {
  return Cookies.set(adminToken, token)
}

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

