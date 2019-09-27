// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入element-UI
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入重置css
import '../static/css/reset.css'

//引入axios
//  更改全局 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import http from './axios/http.js' // axios实例化后引入取名http
Vue.prototype.http = http

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
