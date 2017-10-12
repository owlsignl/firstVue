import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../page/index'
import detailPage from '../page/detail'
import analysisPage from '../page/detail/analysis'
import countPage from '../page/detail/count'
import forecastPage from '../page/detail/forecast'
import publishPage from '../page/detail/publish'
import orderlistPage from '../page/orderList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/orderList',
      component: orderlistPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: analysisPage
        },
        {
          path: 'count',
          component: countPage
        },
        {
          path: 'forecast',
          component: forecastPage
        },
        {
          path: 'publish',
          component: publishPage
        }
      ]
    }
  ]
})
