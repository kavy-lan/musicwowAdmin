import request from '@/utils/request'

export function AuthorizedUserList(page, filters, ops) {
  return request({
    url: 'user',
    method: 'get',
    params: { page: page, limit: '10', filters: filters, ops: ops }
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
