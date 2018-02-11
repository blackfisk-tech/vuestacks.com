import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DataTableView from '@/components/DataTableView'
import Example1 from '@/components/examples/publicAPIsList'
import Example2 from '@/components/examples/stockAPIReport'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash,
        offset: {x: 0, y: 10}
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/data-table',
      name: 'Data-Table',
      component: DataTableView
    },
    {
      path: '/data-table/example-1',
      name: 'Example1',
      component: Example1
    },
    {
      path: '/data-table/example-2',
      name: 'Example2',
      component: Example2
    }
  ]
})
