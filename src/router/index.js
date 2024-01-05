import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/productList',
      name: 'productList',
      component: () => import('../views/productList.vue')
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: () => import('../views/productDetail.vue')
    }
  ]
})

export default router
