import request from '@/utils/request'

export function user(params) {
  return request({
    url: '/users/info',
    method: 'get',
    params
  })
}
// export function user(data) {
//   return request({
//     url: '/users/info',
//     method: 'post',
//     data
//   })
// }
// export function info(data) {
//   return request({
//     url: '/users/info',
//     method: 'get'
//   })
// }