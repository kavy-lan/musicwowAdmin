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
