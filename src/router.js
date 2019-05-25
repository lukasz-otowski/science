import Vue from 'vue'
import Router from 'vue-router'
import Root from './views/Root.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
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
      component: function () {
        return import(/* webpackChunkName: "programming" */ './views/programming/Content.vue')
      }
    },
    {
      path: '/front-end',
      name: 'FrontEnd',
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/Content.vue')
      }
    },
    {
      path: '/front-end/javascript',
      name: 'JavaScript',
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/element/javascript/JavaScript.vue')
      }
    },
    {
      path: '/front-end/vue',
      name: 'Vue',
      component: function () {
        return import(/* webpackChunkName: "frontend" */ './views/frontend/mechanics/vue/element.vue')
      }
    }
  ]
})
