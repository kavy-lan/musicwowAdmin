import request from '@/utils/request'
export function teachingManagementList(page, filters, ops) {
  return request({
    url: 'cs/book',
    method: 'get',
    params: {
      page: page,
      limit: '10',
      filters: filters,
      ops: ops
    }
  })
}
export function allList(page, filters, ops) { // 获取所有列表信息，用于搜索下拉框
  return request({
    url: 'cs/book',
    method: 'get',
    params: {
      page: page,
      limit: '100000',
      filters: filters,
      ops: ops
    }
  })
}
export function deleteteachingManagement(ids) {
  return request({
    url: `cs/book`,
    method: 'delete',
    params: {
      ids: ids
    }
  })
}
export function addteachingManagement(params) {
  return request({
    url: `cs/book`,
    method: 'post',
    data: params
  })
}
export function teachingManagementDetail(id) {
  return request({
    url: `cs/book/${id}`,
    method: 'get'
  })
}
export function editteachingManagement(id, params) {
  return request({
    url: `cs/book/${id}`,
    method: 'PUT',
    data: params
  })
}
export function packCourseware(id) {
  return request({
    url: `cs/book/pack_book/${id}`,
    method: 'post'
  })
}
