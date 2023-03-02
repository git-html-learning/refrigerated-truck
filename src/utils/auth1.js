import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
// export function getToken() {
//   return Cookies.get(TokenKey)
// }
export function adminToken(token) {
  return Cookies.get(token)
}
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

