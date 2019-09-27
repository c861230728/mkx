import Vue from 'vue'
import Router from 'vue-router'


import PersonCenter from '@/components/person/PersonCenter'

import PersonInfo from '@/components/person/PersonInfo'

import PersonAccount from '@/components/person/PersonAccount'

import PersonAbout from '@/components/person/personabout/personabout'

import PersonImage from '@/components/person/personabout/personimage'

import PersonEdit from '@/components/person/personabout/personedit'
// Liu_router
import shop_car from '@/components/shopCar/shop_car'
import god_car_list from '@/components/shopCar/god_car_list'
import god_list from '@/components/shopCar/god_list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      component:()=>import("@/view/admin/home.vue"),
      children:[
        {path:'goodsHandle',component:()=>import("@/view/admin/goodsAdmin/goodsHandle")},
        {path:'userAdmin',component:()=>import("@/view/admin/userAdmin/userAdmin")}
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
    },
      {
        path:'/login',
          component:()=>import("@/components/login")
      },
      // Liu_router
      {
          path: '/shop_car',
          name: 'shop_car',
          component: shop_car
      },
      {
          path: '/shop_car/god_car_list/:userName',
          name: 'god_car_list',
          component: god_car_list
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
        redirect:'/personcenter/personinfo',
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
                path: 'personedit',
                component: PersonEdit,              
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
    linkActiveClass: 'link-active',
 
   

})
