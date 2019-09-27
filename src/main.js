// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册axios 
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios,axios);

// 配置全局的url
axios.defaults.baseURL = "http://luoyuequan.cn/80";

axios.defaults.headers.post['Content-Type'] = 'http://luoyuequan.cn';

Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
})
