import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import ElementUI from 'element-ui'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)


import TableDemo from './pages/TableDemo.vue'
import FormDemo from './pages/FormDemo.vue'

const routes = [{
    path:'/',
    redirect: '/table'
  },
  {
    path: '/table',
    component: TableDemo
  },
  {
    path: '/form',
    component: FormDemo
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
