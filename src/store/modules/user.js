import { loginAPI } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
export default {
  namespaced: true,
  // 数据状态 响应式 data
  state: {
    token: getToken() || ''
  },
  // 同步修改 Vuex架构中，有且只有一种提交 mutation
  mutations: {
    setToken(state, newToken) {
      // 存入 Vuex
      state.token = newToken
      // 存入 cookies
      setToken(newToken)
    }
  },
  // 异步 接口请求 + 修改mutation
  actions: {
    async asyncLogin(context, { username, password }) {
      // const {username,password} = form // 解构赋值
      // 1、调用登录接口
      const res = await loginAPI({ username, password })
      console.log(res)
      // 2、提交 mutation
      context.commit('setToken', res.data.token)
    }
  }
}
