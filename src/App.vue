<script setup>
import { useStore } from './stores/store'
import StartScreen from './components/StartScreen.vue'
import Quiz from './components/Quiz.vue'
import ResultScreen from './components/ResultScreen.vue'

const store = useStore()
</script>

<template>
  <div class="app">
    <StartScreen v-if="store.status === 'start'" />
    <Quiz v-else-if="store.status === 'playing'" />
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
  padding: 0;
}
</style>
