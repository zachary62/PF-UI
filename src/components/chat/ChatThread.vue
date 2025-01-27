<!-- File: /src/components/chat/ChatThread.vue -->
<template>
    <!-- Outer container for the chat thread itself (no full width) -->
    <div class="flex flex-col items-center w-full h-full">
      <!-- 
        Main chat region: we add a white box 
        with border + shadow, like the ChatGPTLikeView. 
      -->
      <div 
        class="w-full max-w-3xl flex flex-col border border-gray-200 
               rounded-md shadow-md bg-white h-[70vh]" 
      >
        <!-- Scrollable messages -->
        <div class="flex-grow overflow-y-auto p-4 flex flex-col gap-4">
          <ChatBubble
            v-for="(msg, index) in messages"
            :key="index"
            :role="msg.role"
            :message="msg.content"
          />
        </div>
  
        <!-- Footer input area (similar to ChatGPTLikeView) -->
        <div class="p-6 border-t border-gray-300">
          <textarea
            v-model="newMessage"
            rows="3"
            placeholder="Share your idea or question..."
            class="w-full p-4 mb-4 border border-gray-300 rounded-md 
                   resize-none focus:outline-none 
                   focus:ring-2 focus:ring-gray-300"
          ></textarea>
          <div class="flex justify-end">
            <button
              @click="sendMessage"
              class="px-6 py-3 bg-gray-800 text-white font-medium 
                     rounded-md hover:bg-gray-700 active:scale-[0.97] 
                     transition-transform"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import ChatBubble from './ChatBubble.vue'
  
  // Local message type
  interface ChatMessage {
    role: 'assistant' | 'user' | 'system'
    content: string
  }
  
  // Example messages
  const messages = ref<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
    { role: 'user', content: 'I’m building a custom AI system!' },
    { role: 'assistant', content: 'Exciting. Tell me more...' },
  ])
  
  const newMessage = ref('')
  
  // Send user message and simulate a quick AI response
  function sendMessage() {
    const content = newMessage.value.trim()
    if (!content) return
    
    // User message
    messages.value.push({ role: 'user', content })
    newMessage.value = ''
  
    // Simulated assistant response
    setTimeout(() => {
      messages.value.push({
        role: 'assistant',
        content: 'Thanks for your message! [Mock AI reply]'
      })
    }, 800)
  }
  </script>
  
  <style scoped>
  /* Mostly rely on Tailwind classes for layout & styling. */
  </style>
  