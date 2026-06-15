<script setup>
import { useQuizStore } from './stores/quizStore'

const store = useQuizStore()
</script>

<template>
  <div class="app">
    <StartScreen v-if="store.status === 'start'" />
    <QuizCard v-else-if="store.status === 'playing'" />
    <ResultScreen v-else />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #1a1a2e;
  color: white;
  min-height: 100vh;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}
</style>
