import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import button from '@/components/button'
import icon from '@/components/icon'
import dialog from '@/components/dialog'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
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
    }
  ]
})
