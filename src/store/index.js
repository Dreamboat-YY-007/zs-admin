import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 组合模块的配置项
  modules: {
    user
  }
})

// 组件中使用 user 模块中的数据？
// this.$store.state.user.name

// 组件触发 mutation？
// this.$store.commit('user/mutation名称')

// 组件触发 action？
// this.$store.dispatch('user/action名称')

// 场景1：组件中使用的 state 和方法很少 -> this.$store
// 场景2：组件中用到的 state 和方法很多 -> 映射方法：mapState mapMutation

export default store
