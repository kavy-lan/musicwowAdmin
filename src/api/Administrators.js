import request from '@/utils/request'
export function administratorsList(page, filters, ops) {
  return request({
    url: 'admin',
    method: 'get',
    params: { page: page, limit: '10', filters: filters, ops: ops }
  })
}

export function addAdministrators(username, mobile, head_img, remark, auth_ids) {
  return request({
    url: 'admin',
    method: 'post',
    params: { username: username, mobile: mobile, head_img: head_img, remark: remark, auth_ids: auth_ids }
  })
}
export function deleteAdministrators(ids) {
  return request({
    url: `admin`,
    method: 'delete',
    params: { ids: ids }
  })
}
export function getEditAdministrators(id) {
  return request({
    url: `admin/${id}`,
    method: 'get'
  })
}
export function editAdministrators(id, username, mobile, head_img, remark, auth_ids) {
  return request({
    url: `admin/${id}`,
    method: 'put',
    params: { username: username, mobile: mobile, head_img: head_img, remark: remark, auth_ids: auth_ids }
  })
}
export function resetAdministrators(id, password) {
  return request({
    url: `admin/reset_password/${id}`,
    method: 'put',
    params: { password: password }
  })
}
// 获取所有角色
export function GetAdminAuthList() {
  return request({
    url: `admin/auth_list`,
    method: 'get'
  })
}
