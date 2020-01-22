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
// 获取所有教材
export function getBookList() {
  return request({
    url: 'cs/auth_org/book_list',
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
// 获取课时
export function getOrgClass(bookId) {
  return request({
    url: `cs/auth_org/class_list/${bookId}`,
    method: 'get'
  })
}
// 添加授权机构
export function addOrg(org_id, book_id, authorize_type, effective_at, directory_ids, class_ids, remark) {
  return request({
    url: 'cs/auth_org',
    method: 'post',
    data: { org_id: org_id, book_id: book_id, authorize_type: authorize_type, effective_at: effective_at, directory_ids: directory_ids, class_ids: class_ids, remark: remark }
  })
}
// 获取机构授权详情
export function getOrgDetail(id) {
  return request({
    url: `cs/auth_org/${id}`,
    method: 'get'
  })
}
// 编辑机构
export function editOrg(id, org_id, book_id, authorize_type, effective_at, directory_ids, class_ids, remark) {
  return request({
    url: `cs/auth_org/${id}`,
    method: 'put',
    params: { org_id: org_id, book_id: book_id, authorize_type: authorize_type, effective_at: effective_at, directory_ids: directory_ids, class_ids: class_ids, remark: remark }
  })
}
// 以下是用户添加授权
export function userPowerList(page, filters, ops) {
  return request({
    url: 'cs/auth_user',
    method: 'get',
    params: { page: page, limit: '10', filters: filters, ops: ops }
  })
}
export function alluserPowerList(page, filters, ops) {
  return request({
    url: 'cs/auth_user',
    method: 'get',
    params: { page: page, limit: '10000', filters: filters, ops: ops }
  })
}
export function deleteuserPowerList(ids) {
  return request({
    url: 'cs/auth_user',
    method: 'delete',
    params: { ids: ids }
  })
}
// 获取所有教材

export function getUserBook() {
  return request({
    url: 'cs/auth_user/book_list',
    method: 'get'
  })
}
export function getUserDirectory(bookId) {
  return request({
    url: `cs/auth_user/directory_list/${bookId}`,
    method: 'get'
  })
}
// 获取课时
export function getUserClass(bookId) {
  return request({
    url: `cs/auth_user/class_list/${bookId}`,
    method: 'get'
  })
}
// 添加用户授权
export function addUser(user_id, book_id, authorize_type, effective_at, directory_ids, class_ids, remark) {
  return request({
    url: 'cs/auth_user',
    method: 'post',
    data: { user_id: user_id, book_id: book_id, authorize_type: authorize_type, effective_at: effective_at, directory_ids: directory_ids, class_ids: class_ids, remark: remark }
  })
}
// 获取用户授权详情
export function getUserDetail(id) {
  return request({
    url: `cs/auth_user/${id}`,
    method: 'get'
  })
}
// 编辑用户授权
export function editUser(id, user_id, book_id, authorize_type, effective_at, directory_ids, class_ids, remark) {
  return request({
    url: `cs/auth_user/${id}`,
    method: 'put',
    params: { user_id: user_id, book_id: book_id, authorize_type: authorize_type, effective_at: effective_at, directory_ids: directory_ids, class_ids: class_ids, remark: remark }
  })
}
