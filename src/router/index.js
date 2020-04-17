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
        path: '/backstage/message',
        component: () => import("@/views/back/message/Message"),
        meta: {
          title: "Roc | 留言信息管理"
        }
      },
      {
        path: '/backstage/user',
        component: () => import("@/views/back/user/User"),
        meta: {
          title: "Roc | 用户信息管理"
        }
      },
      {
        path: '/backstage/edu',
        component: () => import("@/views/back/edu/Edu"),
        meta: {
          title: "Roc | 教育信息管理"
        }
      },
      {
        path: '/backstage/attraction',
        component: () => import("@/views/back/hometown/attraction"),
        meta: {
          title: "Roc | 家乡景点管理"
        }
      },
      {
        path: '/backstage/food',
        component: () => import("@/views/back/hometown/food"),
        meta: {
          title: "Roc | 家乡美食管理"
        }
      },
      {
        path: '/backstage/cele',
        component: () => import("@/views/back/hometown/cele"),
        meta: {
          title: "Roc | 家乡文化管理"
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
