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
      path:'/chemistry/atom',
      name:'Atom',
      component: function () {
        return import('./views/chemistry/element/Atom.vue')
      }
    },
    {
      path:'/chemistry/element',
      name:'Element',
      component: function () {
        return import('./views/chemistry/element/Element.vue')
      }
    },
    {
      path:'/chemistry/reaction',
      name:'Reaction',
      component: function () {
        return import( './views/chemistry/activity/Reaction.vue')
      }
    },
    {
      path:'/chemistry/analysis',
      name:'Analysis',
      component: function () {
        return import( './views/chemistry/activity/Analysis.vue')
      }
    },
    {
      path:'/chemistry/composition',
      name:'Composition',
      component: function () {
        return import( './views/chemistry/mechanics/Composition.vue')
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
      path: '/front-end/sass',
      name: 'Sass',
      component: function () {
        return import('./views/frontend/element/css/Sass.vue')
      }
    },
    {
      path: '/front-end/javascript',
      name: 'JavaScript',
      component: function () {
        return import('./views/frontend/element/javascript/JavaScript.vue')
      }
    },
    {
      path: '/front-end/vue',
      name: 'Vue',
      component: function () {
        return import('./views/frontend/mechanics/vue/element.vue')
      }
    }
  ]
})
