<!-- File: /src/components/chat/ChatMessages.vue -->
<template>
    <!-- Scrollable container for messages. 
         The parent can manage the height or do a split pane. 
    -->
    <div class="flex flex-col gap-3 overflow-y-auto p-4 w-full h-full">
      <ChatBubble
        v-for="(msg, idx) in messages"
        :key="idx"
        :role="msg.role"
        :message="msg.content"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { PropType } from 'vue'
  import ChatBubble from './ChatBubble.vue'
  
  interface ChatMessage {
    role: 'assistant' | 'user' | 'system'
    content: string
  }
  
  const props = defineProps({
    messages: {
      type: Array as PropType<ChatMessage[]>,
      required: true,
    },
  })
  </script>
  