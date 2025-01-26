<template>
    <div class="chatgpt-like-view">
      <div class="gradient-background">
        <div class="centered-container">
          <div class="card">
            <h1 class="title">What do you want to build?</h1>
            <p class="subtitle">
              Enter your question below. (Answers will appear in the Chat Thread.)
            </p>
  
            <div class="input-wrapper">
              <textarea
                v-model="userQuestion"
                placeholder="Start typing your idea or question..."
                @keyup.enter="submitQuestion"
              ></textarea>
              <button @click="submitQuestion">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
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
  
  <style>
  /* GLOBAL RESET (or place in your main.css) */
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  /* 
     ----------------------------------------------------------
     LAYOUT & BACKGROUND
     ----------------------------------------------------------
  */
  .chatgpt-like-view,
  .gradient-background {
    height: 100vh; /* Full viewport height */
    margin: 0;
    padding: 0;
  }
  
  /* A nice diagonal gradient. Adjust angles/colors as you like. */
  .gradient-background {
    background: linear-gradient(
      135deg,
      #4e79ff 0%,
      #1ac7c2 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Center container */
  .centered-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  
  /* 
     ----------------------------------------------------------
     CARD
     ----------------------------------------------------------
  */
  .card {
    /* Remove any max-width if you want it truly large */
    width: 80%; 
    /* Or 100% if you want it to stretch fully. Adjust to taste. */
  
    background: #fff;
    border-radius: 1rem;
    padding: 3rem 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    text-align: center;
    min-height: 400px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .title {
    margin: 0 0 1rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: #333;
  }
  
  .subtitle {
    margin: 0 0 2rem;
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
  }
  
  /* 
     ----------------------------------------------------------
     INPUT + BUTTON
     ----------------------------------------------------------
  */
  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .input-wrapper textarea {
    width: 100%;
    min-height: 150px;
    resize: vertical;
    font-size: 1.1rem;
    padding: 1rem;
    border: 1px solid #dcdcdc;
    border-radius: 0.75rem;
    outline: none;
    transition: border-color 0.3s;
  }
  
  .input-wrapper textarea:focus {
    border-color: #4e79ff;
  }
  
  .input-wrapper button {
    background-color: #4e79ff;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.85rem 1.75rem;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s, transform 0.1s;
  }
  
  .input-wrapper button:hover {
    background-color: #3a5fd1;
  }
  
  .input-wrapper button:active {
    transform: scale(0.98);
  }
  
  /* 
     ----------------------------------------------------------
     RESPONSIVENESS
     ----------------------------------------------------------
  */
  @media (max-width: 768px) {
    .card {
      width: 90%;
      padding: 2rem;
    }
  
    .title {
      font-size: 1.8rem;
    }
  }
  </style>
  