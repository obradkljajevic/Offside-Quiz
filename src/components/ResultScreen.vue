<script setup>
import { computed } from 'vue'
import { useStore } from '../stores/store'

const store = useStore()
const maxScore = computed(() => store.totalQuestions * 3)

const resultMessage = computed(() => {
  const p = store.score / maxScore.value
  if (p >= 0.8) return 'Outstanding! Football genius!'
  if (p >= 0.5) return 'Good job!'
  if (p >= 0.2) return 'Not bad, keep watching!'
  return 'Keep learning!'
})
</script>

<template>
  <div>
    <h1>Quiz Finished!</h1>
    <p>Score: {{ store.score }} / {{ maxScore }}</p>
    <p>{{ resultMessage }}</p>
    <button @click="store.restartQuiz()">Play Again</button>
  </div>
</template>
