import Vue from 'vue'
import Router from 'vue-router'
// import NotFound from '../404'
// import HelloWorld from '@/components/HelloWorld'
import button from '@/components/button'
import icon from '@/components/icon'
import dialog from '@/components/dialog'
import input from '@/components/input'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '*',
    //   component: NotFound
    // },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: dialog
    },
    {
      path: '/input',
      name: 'input',
      component: input
    }
  ]
})
