import request from '@/utils/request'

// 登录函数
/**
 * @description: 登录函数
 * @param {*} data { mobile,password}
 * @return {*} promise
 */

// 函数：参数 + 逻辑 + 返回值
export function loginAPI(data) {
  return request({
    url: '/park/login', // baseURL + url
    method: 'POST', // get / post / put / delete
    data // 请求体参数
  })
  // 返回的是一个 Promise 对象
}

// export function loginAPI(data) {
//   const res = request({
//     url: '/park/login', // baseURL + url
//     method: 'POST', // get / post / put / delete
//     data: data // 请求体参数
//   })
//   // 返回的是一个 Promise 对象
//   return res
// }

// 举例说明：
// loginAPI({ mobile:"15489456254", password:"123456" }).then(res=> console.log(res))
/**
 * asyns function doLogin(){ // 可搭配try{}catch{}
 *    const res = await loginAPI({ mobile:"15489456254", password:"123456" })
 * }
 */

// /**
//  * 获取
//  * @param {*} params {name:string, page:string, pageSize:string}
//  * @returns
//  * post 的参数为 data
//  */
// export function getEnterPriceListAPI(params) {
//   return request({
//     url: '/park/enterprise',
//     method: 'GET',
//     params
//   })
// }

// /**
//  * 删除
//  * @param {*} id string
//  * @returns
//  */
// export function delEnterPriceListAPI(id) {
//   return request({
//     url: `/park/enterprise/${id}`,
//     method: 'DELETE'
//   })
// }
