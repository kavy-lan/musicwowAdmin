import request from '@/utils/request'
export function classManagementList(bookId, page, filters, ops) {
  return request({
    url: `cs/book_class/by/${bookId}`,
    method: 'get',
    params: {
      page: page,
      limit: '10',
      filters: filters,
      ops: ops
    }
  })
}
export function deleteclassManagementList(ids) {
  return request({
    url: `cs/book_class`,
    method: 'delete',
    params: {
      ids: ids
    }
  })
}
export function getDirectory_list(bookId) {
  return request({
    url: `cs/book_class/directory_list/${bookId}`,
    method: 'get'
  })
}
export function addclassManagementList(params) {
  return request({
    url: `cs/book_class`,
    method: 'post',
    data: params
  })
}
export function getclassManagementDetail(id) {
  return request({
    url: `cs/book_class/${id}`,
    method: 'get'
  })
}
export function editclassManagementList(id, params) {
  return request({
    url: `cs/book_class/${id}`,
    method: 'put',
    data: params
  })
}
export function packClass(id) {
  return request({
    url: `cs/book/pack_class/${id}`,
    method: 'post'
  })
}
