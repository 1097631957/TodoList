import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import WaitList from '../components/WaitList.vue'
import EndList from '../components/EndList.vue'
import DelList from '../components/DelList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Index
  },
  {
    path: '/index',
    component: Index,
    // 子路由的使用
    redirect: '/wait-list',
    children: [
      {
        path: '/wait-list',
        component: WaitList
      },
      {
        path: '/end-list',
        component: EndList
      },
      {
        path: '/del-list',
        component: DelList
      }
    ]
  }
  // {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
