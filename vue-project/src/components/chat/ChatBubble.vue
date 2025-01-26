<!-- File: /src/components/chat/ChatBubble.vue -->
<template>
    <!-- 
      - We have two different bubble styles:
        - user => darker gray, right-aligned
        - assistant => lighter gray, left-aligned
    -->
    <div
      class="max-w-[60%] p-3 rounded-md break-words"
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
  
  <style scoped>
  /* Rely mainly on Tailwind classes above for appearance. */
  </style>
  