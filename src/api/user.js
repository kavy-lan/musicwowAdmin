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
