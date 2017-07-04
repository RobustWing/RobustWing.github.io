import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import ElementUI from 'element-ui'

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
