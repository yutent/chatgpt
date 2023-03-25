
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/about.vue')
    }
  ]
})

export default router
    
    
