import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory( ),
  routes: [
    {
      path: '/', 
      name: '/',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/login', 
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
