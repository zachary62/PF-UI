// File: /src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import ChatGPTLikeView from '@/views/ChatGPTLikeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatGPTLikeView, 
    },
  ],
})

export default router
