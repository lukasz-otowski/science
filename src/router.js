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
      name: 'Home',
      component: Home
    },
    {
      path:'/chemistry',
      name:'Chemistry',
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/Chemistry.vue')
      }
    },
    {
      path: '/front-end',
      name: 'FrontEnd',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/Element.vue')
      }
    },
    {
      path: '/front-end/javascript',
      name: 'JavaScript',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/element/javascript/JavaScript.vue')
      }
    }
  ]
})
