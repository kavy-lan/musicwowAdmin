import request from '@/utils/request'

export function getUploadConfig() {
  return request({
    url: 'public/upload_config',
    method: 'get'
  })
}
