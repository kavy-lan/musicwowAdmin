import request from '@/utils/request'
export function csPackList(page, filters, ops) {
  return request({
    url: 'cs/pack',
    method: 'get',
    params: {
      page: page,
      limit: '10',
      filters: filters,
      ops: ops
    }
  })
}
export function csPackDetail(lot_no, page, filters, ops) {
  return request({
    url: `cs/pack/log/${lot_no}`,
    method: 'get',
    params: {
      page: page,
      limit: '10',
      filters: filters,
      ops: ops
    }
  })
}
export function csPackDelete(id) {
  return request({
    url: `cs/pack`,
    method: 'delete',
    params: { ids: id }
  })
}
