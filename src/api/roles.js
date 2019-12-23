import request from '@/utils/request'
export function rolesList(page, filters, ops) {
  return request({
    url: 'auth',
    method: 'get',
    params: {
      page: page,
      limit: '10',
      filters: filters,
      ops: ops
    }
  })
}
export function editRoles(id, title, remark) {
  return request({
    url: `auth/${id}`,
    method: 'put',
    params: {
      title: title,
      remark: remark
    }
  })
}
export function addRoles(title, remark) {
  return request({
    url: `auth`,
    method: 'post',
    params: {
      title: title,
      remark: remark
    }
  })
}
export function getRolesDetail(id) {
  return request({
    url: `auth/${id}`,
    method: 'get'
  })
}
