import { createRouter, createWebHistory } from 'vue-router'
import ChatGPTLikeView from '@/views/ChatGPTLikeView.vue'
import ChatThreadView from '@/views/ChatThreadView.vue'
import VSCodeLikeView from '@/views/VSCodeLikeView.vue'

// Import the new test file
import SuperSplitTest from '@/views/SuperSplitTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: ChatGPTLikeView },
    { path: '/chat-thread', name: 'chat-thread', component: ChatThreadView },
    { path: '/vscode-like', name: 'vscode-like', component: VSCodeLikeView },
    
    // Add this route for testing:
    { path: '/super-split-test', name: 'super-split-test', component: SuperSplitTest },
  ],
})

export default router
