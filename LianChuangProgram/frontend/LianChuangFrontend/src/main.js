// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jquery from 'jquery'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import './assets/js/js.cookie.js'


import './assets/css/template.css'
import './assets/css/index.css'
import './assets/css/nav.css'




// import './assets/css/contact.css'
// import './assets/css/culture.css'
// import './assets/css/news.css'
// import './assets/css/newsPage1.css'
// import './assets/css/product-1-1.css'
// import './assets/css/product.css'












Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
