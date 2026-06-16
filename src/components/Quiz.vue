<script setup>
import { useStore } from '../stores/store'
const store = useStore()

function getButtonClass(index) {
  if (!store.answered) return ''
  if (index === store.currentQuestion.correct) return 'correct'
  if (index === store.selectedAnswer) return 'wrong'
  return ''
}
</script>

<template>
  <div class="quiz-container">
    <p>
      Question {{ store.currentIndex + 1 }} / {{ store.totalQuestions }} — Score: {{ store.score }}
    </p>
    <p>⏱️ {{ store.timer }}s</p>

    <h2>{{ store.currentQuestion.question }}</h2>

    <div class="answers-grid">
      <button
        v-for="(answer, index) in store.currentQuestion.answers"
        :key="index"
        :disabled="store.answered"
        :class="getButtonClass(index)"
        @click="store.selectAnswer(index)"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.quiz-container {
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
h2 {
  font-size: 22px;
  max-width: 560px;
  line-height: 1.4;
}
p {
  font-size: 16px;
  color: #a0a0c0;
}
.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  max-width: 560px;
  width: 100%;
}
button {
  padding: 16px 12px;
  cursor: pointer;
  background-color: #16213e;
  color: white;
  border: 2px solid #3a3a5c;
  border-radius: 12px;
  font-size: 15px;
  font-family: Arial, sans-serif;
  transition: all 0.2s ease;
}
button:hover:not(:disabled) {
  border-color: #fdd20c;
  color: #fdd20c;
  background-color: #1e2a4a;
}
button:disabled {
  cursor: default;
}
.correct {
  background-color: #1a472a;
  border-color: #2ecc71;
  color: #2ecc71;
}
.wrong {
  background-color: #4a1515;
  border-color: #ff6b6b;
  color: #ff6b6b;
}
</style>
