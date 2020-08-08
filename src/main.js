import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入字体图标
import './style/iconfont.css'
// 导入组件
import myComs from './components'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(myComs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
