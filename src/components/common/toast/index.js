import Toast from './Toast.vue'
const obj = {}
obj.install=function(Vue){
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.生成组件对象
  const toast = new toastConstructor()
  // 3.挂载组件到div上
  toast.$mount(document.createElement('div'))
  // 4.将toast挂载到body上
  document.body.appendChild(toast.$el)
  // 将toast组件对象放到vue原型上
  Vue.prototype.$toast = toast
}
export default obj