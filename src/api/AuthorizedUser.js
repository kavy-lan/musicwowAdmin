import request from '@/utils/request'
// 以下是用户授权
export function AuthorizedUserList(page, filters, ops) {
  return request({
    url: 'user',
    method: 'get',
    params: { page: page, limit: '10', filters: filters, ops: ops }
  })
}
export function allList(page, filters, ops) {
  return request({
    url: 'user',
    method: 'get',
    params: { page: page, limit: '100000', filters: filters, ops: ops }
  })
}
export function deleteAuthorizedUserList(ids) {
  return request({
    url: 'user',
    method: 'delete',
    params: { ids: ids }
  })
}
export function addAuthorizedUser(username, area_code, mobile, remark, img) {
  return request({
    url: 'user',
    method: 'post',
    data: { username: username, area_code: area_code, mobile: mobile, remark: remark, head_image: img }
  })
}
export function getAuthorizedUserDetail(id) {
  return request({
    url: `user/${id}`,
    method: 'get'
  })
}
export function editAuthorizedUser(id, username, area_code, mobile, remark, img) {
  return request({
    url: `user/${id}`,
    method: 'put',
    params: { username: username, area_code: area_code, mobile: mobile, remark: remark, head_image: img }
  })
}
// 以下是机构授权
export function AuthorizedMechanismList(page, filters, ops) {
  return request({
    url: 'cs/auth_org',
    method: 'get',
    params: { page: page, limit: '10', filters: filters, ops: ops }
  })
}

export function allMechanismList(page, filters, ops) {
  return request({
    url: 'cs/auth_org',
    method: 'get',
    params: { page: page, limit: '100000', filters: filters, ops: ops }
  })
}
export function deleteAuthorizedMechanismList(ids) {
  return request({
    url: 'cs/auth_org',
    method: 'delete',
    params: { ids: ids }
  })
}
// 获取机构下拉列表
export function getOrgList() {
  return request({
    url: 'cs/auth_org/org_list',
    method: 'get'
  })
}
// 获取目录
export function getOrgDirectory(bookId) {
  return request({
    url: `cs/auth_org/directory_list/${bookId}`,
    method: 'get'
  })
}
// 获取目录
export function getOrgClass(bookId) {
  return request({
    url: `cs/auth_org/class_list/${bookId}`,
    method: 'get'
  })
}
