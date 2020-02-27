import Vue from 'vue'
import VueRouter from 'vue-router'
import fr from "element-ui/src/locale/lang/fr";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: () => import("@/views/Main"),
    children: [
      {
        path: '/index',
        component: () => import("@/views/front/index/Index"),
        meta: {
          title: "Roc"
        }
      },
      {
        path: '/profile',
        component: () => import("@/views/front/profile/Profile"),
        meta: {
          title: "Roc | 个人信息"
        }
      },
      {
        path: '/prize',
        component: () => import("@/views/front/prize/Prize"),
        meta: {
          title: "Roc | 获奖情况"
        }
      },
      {
        path: '/hometown',
        component: () => import("@/views/front/hometown/Hometown"),
        meta: {
          title: "Roc | 家乡介绍"
        }
      },
      {
        path: '/education',
        component: () => import("@/views/front/education/Education"),
        meta: {
          title: "Roc | 求学经历"
        }
      },
      {
        path: '/login',
        component: () => import("@/views/front/login/Login"),
        meta: {
          title: "Roc | 登陆"
        }
      },
      {
        path: '/register',
        component: () => import("@/views/front/register/Register"),
        meta: {
          title: "Roc | 注册"
        }
      },
      {
        path: '/account',
        component: () => import("@/views/front/account/Account"),
        meta: {
          title: "Roc | 账户信息"
        }
      },
      {
        path: '/message',
        component: () => import("@/views/front/message/Message"),
        meta: {
          title: "Roc | 留言板"
        }
      },

      {
        path: '/backstage',
        component: () => import("@/views/back/Index"),
        meta: {
          title: "Roc | 后台管理"
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
