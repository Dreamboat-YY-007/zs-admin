// 放置所有和权限控制相关的事情
import router from './router'
import { getToken } from './utils/auth'

console.log('权限控制生效了')

// 定义白名单
const WHITE_LIST = ['/login', '/404']

// 1、前置路由守卫
router.beforeEach((to, from, next) => {
  /**
   * to：目标路由对象 到哪里去
   * from：路由对象 从哪里来的那个对象
   * next：放行函数（必须调用这个函数，才能跳转到路由里面去）
   */
  const token = getToken()
  if (token) {
    // 有 token
    next()
  } else {
    // 无 token
    // 是否在白名单内 - 是否在数组中能找到 - path - to.path
    // 判断一下要前往的路由的 path 地址是否在白名单这个数组中找得到，如果找得到就返回 true；如果找不到就返回 false
    if (WHITE_LIST.includes(to.path)) {
      // 在白名单内，放行
      next()
    } else {
      // 不在白名单内，跳回登录页
      next('/login')
    }
  }
})
