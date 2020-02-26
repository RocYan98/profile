import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import("../views/Main"),
    children: [
      {
        path: '/index',
        component: () => import("@/views/index/Index"),
        meta: {
          title: "Roc"
        }
      },
      {
        path: '/profile',
        component: () => import("@/views/profile/Profile"),
        meta: {
          title: "Roc | 个人信息"
        }
      },
      {
        path: '/prize',
        component: () => import("@/views/prize/Prize"),
        meta: {
          title: "Roc | 获奖情况"
        }
      },
      {
        path: '/hometown',
        component: () => import("@/views/hometown/Hometown"),
        meta: {
          title: "Roc | 家乡介绍"
        }
      },
      {
        path: '/education',
        component: () => import("@/views/education/Education"),
        meta: {
          title: "Roc | 求学经历"
        }
      },
      {
        path: '/login',
        component: () => import("@/views/login/Login"),
        meta: {
          title: "Roc | 登陆"
        }
      },
      {
        path: '/register',
        component: () => import("@/views/register/Register"),
        meta: {
          title: "Roc | 注册"
        }
      },
      {
        path: '/account',
        component: () => import("@/views/account/Account"),
        meta: {
          title: "Roc | 账户信息"
        }
      },
      {
        path: '/message',
        component: () => import("@/views/message/Message"),
        meta: {
          title: "Roc | 留言板"
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
