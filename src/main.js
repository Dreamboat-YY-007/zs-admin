// ！！！不太堆放太多的业务代码，只做一些全局的初始化代码
// 导入核心框架 Vue2.6
import Vue from 'vue'
// 样式重置文件（reset.css）
// 引入 elementUI 组件库
// 核心包
import ElementUI from 'element-ui'
// 对应的样式配置文件
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
// global css
import '@/styles/index.scss'
// 根组件
import App from './App'
// Vuex
import store from './store'
// 路由
import router from './router'

// 注册svg
import '@/icons'
// 注册 elementUI 组件
Vue.use(ElementUI)

Vue.config.productionTip = false

// vue实例化
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
