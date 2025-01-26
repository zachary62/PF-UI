<template>
    <!-- Full viewport with subtle gradient background -->
    <div
      class="min-h-screen flex flex-col items-center justify-center py-8 px-4
             bg-gradient-to-br from-gray-50 via-slate-100 to-slate-200"
    >
      <!-- Large heading (no box) -->
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        What AI system do you want to build?
      </h1>
  
      <!-- Sub-heading (no box) -->
      <p class="text-2xl text-gray-600 mb-10">
        Design, build, test, and deploy your AI systems, with AI
      </p>
  
      <!-- Single box for input & button -->
      <div class="w-full max-w-3xl p-6 bg-white border border-gray-200 rounded-md shadow-md">
        <!-- Text area -->
        <textarea
          v-model="userQuestion"
          placeholder="Share your idea or question..."
          class="w-full h-48 p-4 mb-4 border border-gray-300 rounded-md resize-none
                 focus:outline-none focus:ring-2 focus:ring-blue-300"
        ></textarea>
  
        <!-- Submit button -->
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
  
  <style scoped>
  /*
    Minimal custom overrides; main styling provided by Tailwind classes.
  */
  </style>
  