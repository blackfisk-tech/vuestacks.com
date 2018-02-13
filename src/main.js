// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '../node_modules/bulma/bulma.sass'
import './assets/sass/site-styles.sass'
import fontawesome from '@fortawesome/fontawesome'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faTable from '@fortawesome/fontawesome-free-solid/faTable'
import faColumns from '@fortawesome/fontawesome-free-solid/faColumns'
import faSort from '@fortawesome/fontawesome-free-solid/faSort'
import faFileExcel from '@fortawesome/fontawesome-free-solid/faFileExcel'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faList from '@fortawesome/fontawesome-free-solid/faList'
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench'
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft'
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight'

fontawesome.library.add(faGithub)
fontawesome.library.add(faUser)
fontawesome.library.add(faTable)
fontawesome.library.add(faColumns)
fontawesome.library.add(faSort)
fontawesome.library.add(faFileExcel)
fontawesome.library.add(faTimes)
fontawesome.library.add(faList)
fontawesome.library.add(faWrench)
fontawesome.library.add(faAngleLeft)
fontawesome.library.add(faAngleRight)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
