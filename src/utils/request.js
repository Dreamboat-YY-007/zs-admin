// 请求模块
import axios from 'axios'
// 分为两种：1、通用配置√ 2、定制化配置

/**
 * 1、axios 实例化：axios.create()
 * 用法：基地址配置 baseURL + 超时时间 timeout（100ms）
 * 拓展一下：create 方法可以调用多次，每次执行都会生成一个独一无二的实例
 * export default const a = axios.create({ baseURL:'a.com'})
 * export default const b = axios.create({ baseURL:'b.com'})
 */

/**
 * 2、请求拦截器
 * 客户端发送请求 - 请求拦截器（针对请求参数做处理） - 后端（服务器）
 * 用法：请求头中添加 token 数据，用于接口鉴权（好处：统一配置）
 * 拓展一下：可以添加多个请求拦截器
 * 客户端请求 -> 拦截器1(处理参数) -> （把处理过后的参数传给）拦截器2(处理) -> … -> 后端
 */

/**
 * 3、响应拦截器（返回两个回调函数）
 * 后端 -> 响应拦截器 -> 客户端
 * 用法：数据剥离 res.data / 401 错误处理 / 前端自定义错误处理【？如果后端不管接口成功还是失败统一返回 200】
 * 成功回调：状态码在 200~300 之间
 * 失败回调：不在 200~300 之间
 */
const service = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/v1',
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config // 这两个 return 不能丢
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data // 这两个 return 不能丢
  },
  error => {
    return Promise.reject(error)
  }
)

export default service