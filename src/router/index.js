import Vue from 'vue'
import Router from 'vue-router'


import PersonCenter from '@/components/person/PersonCenter'

import PersonInfo from '@/components/person/PersonInfo'

import PersonAccount from '@/components/person/PersonAccount'

import PersonAbout from '@/components/person/personabout/personabout'

import PersonImage from '@/components/person/personabout/personimage'

import PersonMore from '@/components/person/personabout/personmore'
// Liu_router
import shop_car from '@/components/shopCar/shop_car'
import god_car_list from '@/components/shopCar/god_car_list'
import god_list from '@/components/shopCar/god_list'
import blank from '@/components/blank'

Vue.use(Router)
const router = new Router({
  routes: [
      {
        path:'/login',
          component:()=>import("@/components/login")
      },
      // Liu_router
      {
          path: '/shop_car',
          name: 'shop_car',
          component: shop_car,
      },
      {
          path: '/blank',
          name: 'blank',
          component: blank
      },
      {
          path: '/shop_car/god_car_list/:userName',
          name: 'god_car_list',
          component: god_car_list,
        /*  meta: {
              requireAuth: true // 添加此字段 表示该路由需要登录权限才能进入
          }*/
      },
      {
          path: '/shop_car/god_list/',
          name: 'god_list',
          component: god_list
      },

      //
      {
          path:'/index',
          name:'index',
          component:()=>import("@/components/index"),
          children:[
              {
                path:'home',
                component:()=>import("@/components/home"),
              },
              {
                  path:'list',
                  component:()=>import("@/components/list"),
              }
          ]
      },
      {
        path: '/personcenter',
        component: PersonCenter,
        children:[
          {
            path: 'personinfo',
            component: PersonInfo,
            redirect:'personinfo/personabout',
            children:[
              {
                path: 'personabout',
                component: PersonAbout,
              },
              {
                path: 'personimage',
                component: PersonImage,
              },
              {
                path: 'personmore',
                component: PersonMore,
              },
            ]
          },
          {
            path: 'personaccount',
            component: PersonAccount,
          }
        ]
      },
    ],
    linkActiveClass: 'link-active'
})

// 注册全局钩子用来拦截导航
router.beforeEach((to, fro ,next) => {
    let token = localStorage.getItem('token')
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (token) {
            next()
        } else {
           alert('请登录')
            next({
                path: '/login'
            })
        }
    }else {
        next()
    }
})
export default router

