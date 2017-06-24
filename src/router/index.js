import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import itemTemplate from '@/components/itemTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'itemTemplate',
      component: itemTemplate
    }
  ]
})
