import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import store from './store/index.js'

Vue.config.productionTip = false

 // 导入移动端vue组件
 import Vant from 'vant'
 import 'vant/lib/index.css'
 Vue.use(Vant)
 
 //vue移动端H5适配
 import 'amfe-flexible'

 import './style/base.less'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
