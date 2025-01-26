<!-- File: /src/components/chat/ChatBubble.vue -->
<template>
    <!-- 
      - Add text-sm for smaller text
      - The bubble alignment logic remains
    -->
    <div
      class="max-w-[60%] p-3 rounded-md break-words text-sm"
      :class="role === 'user'
        ? 'bg-gray-700 text-white self-end ml-auto'
        : 'bg-gray-200 text-gray-800 self-start mr-auto'"
    >
      {{ message }}
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface Props {
    role: 'assistant' | 'user' | 'system'
    message: string
  }
  
  const props = defineProps<Props>()
  </script>
  