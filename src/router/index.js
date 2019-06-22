import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('page/home/home')
    },
    {
      path: '/city',
      name: 'City',
      component: ()=>import('page/city/city')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: ()=>import('page/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
