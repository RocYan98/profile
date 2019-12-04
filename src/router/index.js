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
          title: "web前端开发"
        }
      },
      {
        path: '/profile',
        component: () => import("@/views/profile/Profile"),
        meta: {
          title: "web前端开发 | 个人信息"
        }
      },
      {
        path: '/prize',
        component: () => import("@/views/prize/Prize"),
        meta: {
          title: "web前端开发 | 获奖情况"
        }
      },
      {
        path: '/hometown',
        component: () => import("@/views/hometown/Hometown"),
        meta: {
          title: "web前端开发 | 家乡介绍"
        }
      },
      {
        path: '/education',
        component: () => import("@/views/education/Education"),
        meta: {
          title: "web前端开发 | 求学经历"
        }
      },
      {
        path: '/login',
        component: () => import("@/views/login/Login"),
        meta: {
          title: "web前端开发 | 登陆"
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
