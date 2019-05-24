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
        return import(/* webpackChunkName: "about" */ './views/chemistry/Content.vue')
      }
    },
    {
      path: '/programming',
      name: 'Programming',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "programming" */ './views/programming/Content.vue')
      }
    },
    {
      path: '/front-end',
      name: 'FrontEnd',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/Content.vue')
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
