import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/chemistry',
      name:'chemistry',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Chemistry.vue')
      }
    },
    {
      path: '/front-end',
      name: 'frontend',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/FrontEnd.vue')
      }
    }
  ]
})
