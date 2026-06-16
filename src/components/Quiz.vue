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
  <div>
    <p>
      Question {{ store.currentIndex + 1 }} / {{ store.totalQuestions }} — Score: {{ store.score }}
    </p>
    <p>⏱️ {{ store.timer }}s</p>

    <h2>{{ store.currentQuestion.question }}</h2>

    <div>
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
button {
  display: block;
  margin: 8px 0;
  padding: 10px 20px;
  cursor: pointer;
}
.correct {
  background: green;
  color: white;
}
.wrong {
  background: red;
  color: white;
}
</style>
