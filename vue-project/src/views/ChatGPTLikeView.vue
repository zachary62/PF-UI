<template>
    <div class="chatgpt-like-view container">
      <!-- Header -->
      <section class="header">
        <h1>Ask a Question</h1>
        <p class="subtitle">
          Type your query below. <strong>Answers will appear in a separate view</strong>.
        </p>
      </section>
  
      <!-- Input Field -->
      <section class="input-section">
        <input
          v-model="userQuestion"
          @keyup.enter="submitQuestion"
          type="text"
          placeholder="Type your question..."
          class="question-input"
        />
        <button class="submit-btn" @click="submitQuestion">
          Submit
        </button>
      </section>
  
      <!-- Show the latest question (optional) -->
      <section v-if="lastQuestion" class="last-question">
        <h3>Your last question</h3>
        <div class="question-card">
          {{ lastQuestion }}
        </div>
        <p class="hint">Answers will be in the Chat Thread view.</p>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const userQuestion = ref('')
  const lastQuestion = ref<string | null>(null)
  
  /**
   * Called whenever the user submits the question.
   * We simply store the question and reset the input.
   * The actual "answer" or AI response is handled
   * in another view.
   */
  function submitQuestion() {
    if (!userQuestion.value.trim()) return
  
    lastQuestion.value = userQuestion.value
    userQuestion.value = ''
  }
  </script>
  
  <style scoped>
  /* General container styling */
  .container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #fefefe;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  
  /* Header styling */
  .header {
    margin-bottom: 1.5rem;
  }
  .header h1 {
    margin: 0 0 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
  .subtitle {
    margin: 0;
    color: #666;
    line-height: 1.4;
  }
  
  /* Input field and button styling */
  .input-section {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }
  .question-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s;
  }
  .question-input:focus {
    outline: none;
    border-color: #888;
  }
  .submit-btn {
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #2f85ec;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .submit-btn:hover {
    background-color: #1867c0;
  }
  
  /* Last question display */
  .last-question {
    margin-top: 1rem;
  }
  .last-question h3 {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .question-card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1.4;
    color: #333;
  }
  .hint {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #999;
  }
  </style>
  