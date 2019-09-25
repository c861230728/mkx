// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex'
import Axios from 'axios'
import md5 from 'js-md5'
import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'
import QS from 'qs';
Vue.use(ElementUI, Axios)
Vue.prototype.$axios = Axios
Vue.prototype.$md5 = md5
Vue.prototype.$crypto = CryptoJS
Vue.prototype.$jsencrypt = JSEncrypt
Vue.prototype.$qs = QS
Vue.config.productionTip = false
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
})
