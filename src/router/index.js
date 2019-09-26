import Vue from 'vue'
import Router from 'vue-router'


import PersonCenter from '@/components/person/PersonCenter'

import PersonInfo from '@/components/person/PersonInfo'

import PersonAccount from '@/components/person/PersonAccount'

import PersonAbout from '@/components/person/personabout/personabout'

import PersonImage from '@/components/person/personabout/personimage'

import PersonEdit from '@/components/person/personabout/personedit'

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
    },
      {
        path:'/login',
          component:()=>import("@/components/login")
      },
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
