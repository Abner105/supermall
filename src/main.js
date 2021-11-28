import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
// 创造事件总线
Vue.prototype.$bus = new Vue()
// 使用toast插件
Vue.use(toast)

// 解决移动端300ms的延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyload,{
  // 占位图
  loading:require('./assets/img/tabbar/mine.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
