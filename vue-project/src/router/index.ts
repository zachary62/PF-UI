// File: /src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import ChatGPTLikeView from '@/views/ChatGPTLikeView.vue'
import ChatThreadView from '@/views/ChatThreadView.vue'  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatGPTLikeView,
    },
    {
      path: '/chat-thread',
      name: 'chat-thread',
      component: ChatThreadView,
    },
  ],
})

export default router
