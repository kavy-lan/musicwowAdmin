import request from '@/utils/request'

export function login(u, p) {
  return request({
    url: 'login',
    method: 'post',
    data: { username: u, password: p }
  })
}

export function getInfo() {
  return request({
    url: 'public/menu',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'login/out',
    method: 'get'
  })
}
export function getAdminDetail() {
  return request({
    url: 'public/admin',
    method: 'get'
  })
}
export function changePassWord(old, now) {
  return request({
    url: 'public/reset_password',
    method: 'post',
    data: { old_password: old, password: now }
  })
}
