<template>
    <div class="flex flex-col min-h-screen bg-gray-50">
      <!-- Top area (Header placeholder?) -->
      <header class="h-16 flex items-center justify-center border-b border-gray-200">
        <!-- You can place a simple brand name or Apple-like minimal menu, if desired -->
        <h1 class="text-lg font-semibold text-gray-700">
          ChatGPT-Like Interface
        </h1>
      </header>
  
      <!-- Main content wrapper -->
      <main class="flex-grow flex items-center justify-center p-4">
        <div class="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-3">
            What do you want to build?
          </h2>
          <p class="text-gray-500 mb-6">
            Enter your question or idea below.
          </p>
  
          <div class="flex flex-col space-y-4">
            <textarea
              v-model="userQuestion"
              placeholder="Start typing your idea or question..."
              class="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              @keyup.enter="submitQuestion"
            ></textarea>
  
            <button
              @click="submitQuestion"
              class="self-end px-5 py-2.5 rounded-md bg-gray-800 text-white font-medium 
                     hover:bg-gray-700 active:scale-[0.97] transition-transform"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
  
      <!-- Footer (optional) -->
      <footer class="h-16 flex items-center justify-center border-t border-gray-200 text-sm text-gray-400">
        © 2025 My Company
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const userQuestion = ref<string>('')
  
  function submitQuestion() {
    if (!userQuestion.value.trim()) return
    console.log('User question submitted:', userQuestion.value)
    userQuestion.value = ''
  }
  </script>
  
  <style scoped>
  /*
    Scoped style for extremely custom overrides if needed.
    Otherwise, rely on Tailwind classes for the majority of design.
  */
  </style>
  