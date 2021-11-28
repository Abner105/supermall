import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'

Vue.config.productionTip = false
// 创造事件总线
Vue.prototype.$bus = new Vue()
// 使用toast插件
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
