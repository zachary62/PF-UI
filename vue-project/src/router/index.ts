import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-loaded route
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/chatgpt',
      name: 'ChatGPTLike',
      // Lazy-loaded route for ChatGPTLikeView
      component: () => import('../views/ChatGPTLikeView.vue'),
    },
  ],
})

export default router
