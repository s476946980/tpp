import Vue from 'vue'
import Router from 'vue-router'
// 路由对应的组件
import film from '@/components/film/film'
import cinema from '@/components/cinema/cinema'
import my from '@/components/my/my'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'film',
      component: film
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
