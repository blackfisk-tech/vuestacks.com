import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import DataTableView from '@/components/DataTableView'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
