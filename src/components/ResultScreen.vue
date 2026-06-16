<script setup>
import { computed } from 'vue'
import { useStore } from '../stores/store'

const store = useStore()
const maxScore = computed(() => store.totalQuestions * 3)
</script>

<template>
  <div class="result-container">
    <h1>Quiz Finished!</h1>
    <p>Score: {{ store.score }} / {{ maxScore }}</p>
    <p>{{ resultMessage }}</p>
    <button @click="store.restartQuiz()">Play Again</button>
  </div>
</template>

<style scoped>
.result-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: #1a1a2e;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
h1 {
  font-size: 32px;
  font-weight: bold;
}
p {
  font-size: 18px;
  color: #a0a0c0;
}
button {
  background-color: #fdd20c;
  color: #1a1a2e;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.5px;
}
button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
