import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component:()=>import("@/view/admin/home.vue"),
      children:[
        {path:'goodsHandle',component:()=>import("@/view/admin/goodsAdmin/goodsHandle")}
      ]
    },
    {
      path: '/login',
      component: () => import("@/components/login")
    },
    {
      path: '/index',
      name: 'index',
      component: () => import("@/components/index"),
      children: [{
          path: 'home',
          component: () => import("@/components/home"),
        },
        {
          path: 'list',
          component: () => import("@/components/list"),
        }
      ]
    }
  ]
})
