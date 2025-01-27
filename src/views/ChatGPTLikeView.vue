<!-- File: /src/views/ChatGPTLikeView.vue -->
<template>
    <!-- 
      Swap the old `div` classes for `.main-gradient-bg`
      (and any other classes you need).
    -->
    <div class="main-gradient-bg items-center justify-center py-8 px-4">
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        What AI system do you want to build?
      </h1>
  
      <p class="text-2xl text-gray-600 mb-10">
        Design, build, test, and deploy your AI systems, with AI
      </p>
  
      <!-- Same input box as before -->
      <div class="w-full max-w-3xl p-6 bg-white border border-gray-200 rounded-md shadow-md">
        <textarea
          v-model="userQuestion"
          placeholder="Share your idea or question..."
          class="w-full h-48 p-4 mb-4 border border-gray-300 rounded-md resize-none
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
        ></textarea>
  
        <div class="flex justify-end">
          <button
            @click="submitQuestion"
            class="px-6 py-3 bg-gray-800 text-white font-medium
                   rounded-md hover:bg-gray-700 active:scale-[0.97]
                   transition-transform"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const userQuestion = ref('')
  
  function submitQuestion() {
    if (!userQuestion.value.trim()) return
    console.log('User question submitted:', userQuestion.value)
    userQuestion.value = ''
  }
  </script>
  