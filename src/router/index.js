import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Echarts from '@/components/Echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    }
  ]
})
