import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/login',
      component: () => import('../views/main.vue'),
      children: [
        {
          path: '/productList',
          name: 'productList',
          component: () => import('../views/productList.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    }
  ]
})

export default router
