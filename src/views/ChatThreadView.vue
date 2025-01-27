<!-- File: /src/views/ChatThreadView.vue -->
<template>
    <!-- Use the shared gradient class. We also center content with flex. -->
    <div class="main-gradient-bg items-center justify-center py-8 px-4">
      <!-- 
        ChatThread will handle the layout for messages.
        We can optionally wrap it in a container or
        just let ChatThread do its own max-w.
      -->
      <ChatThread />
    </div>
  </template>
  
  <script setup lang="ts">
  import ChatThread from '@/components/chat/ChatThread.vue'
  </script>
  
  <style scoped>
  /* We rely on the shared class in main.css and ChatThread’s own styles. */
  </style>
  