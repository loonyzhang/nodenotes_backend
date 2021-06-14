import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/pages/login/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: () => import('@/pages/index/index.vue')
    }
  ]
})
export default router