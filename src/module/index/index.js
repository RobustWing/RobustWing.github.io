import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
