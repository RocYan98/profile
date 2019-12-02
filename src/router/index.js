import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/profile',
    component: () => import("../views/Main"),
    children: [
      {
        path: '/profile',
        component: () => import("@/views/profile/Profile"),
      },
      {
        path: '/prize',
        component: () => import("@/views/prize/Prize"),
      },
      {
        path: '/hometown',
        component: () => import("@/views/hometown/Hometown"),
      },
      {
        path: '/hobby',
        component: () => import("@/views/hobby/Hobby"),
      },
      {
        path: '/education',
        component: () => import("@/views/education/Education"),
      },
      {
        path: '/association',
        component: () => import("@/views/association/Association"),
      },
      {
        path: '/login',
        component: () => import("@/views/login/Login"),
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
