<!-- File: /src/components/vsCodeLayout/ChatPanel.vue -->
<template>
    <!-- Changed to a fixed layout with white background -->
    <div class="h-full w-full flex flex-col bg-white">
      <!-- Chat messages area with flex-grow -->
      <div class="flex-grow overflow-y-auto">
        <ChatMessages :messages="messages" />
      </div>
  
      <!-- Fixed height input area -->
      <div class="p-4 border-t border-gray-200">
        <textarea
          v-model="newMessage"
          rows="4"
          placeholder="Type your message..."
          class="w-full resize-none p-3 border border-gray-300 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
        ></textarea>
        <div class="mt-2 flex justify-end">
          <button
            @click="sendMessage"
            class="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 
                   active:scale-[0.97] transition-transform"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import ChatMessages from '@/components/chat/ChatMessages.vue'
  
  interface ChatMessage {
    role: 'assistant' | 'user' | 'system'
    content: string
  }
  
  // Example conversation
  const messages = ref<ChatMessage[]>([
    { role: 'assistant', content: 'Hello from AI! How can I help?' },
    { role: 'user', content: 'I want to build a cool AI chatbot.' },
  ])
  
  const newMessage = ref('')
  
  function sendMessage() {
    const trimmed = newMessage.value.trim()
    if (!trimmed) return
  
    // Append user message
    messages.value.push({
      role: 'user',
      content: trimmed
    })
    newMessage.value = ''
  
    // Mock AI response
    setTimeout(() => {
      messages.value.push({
        role: 'assistant',
        content: `AI reply (mocked). Thanks for saying: "${trimmed}"`
      })
    }, 500)
  }
  </script>