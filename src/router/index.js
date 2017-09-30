import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../page/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    }
  ]
})
