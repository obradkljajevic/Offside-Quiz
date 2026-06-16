<script setup>
import { useStore } from '../stores/store'
const store = useStore()
</script>

<template>
  <div class="main-container">
    <img src="@/assets/offside.png" alt="logo" class="logo" />
    <p class="sub">20 random questions. 3 seconds per question.</p>
    <ul>
      <li>Correct: +3 points</li>
      <li>Wrong: -1 point</li>
      <li>No answer: 0 points</li>
    </ul>
    <button @click="store.startQuiz()" class="start-btn">Start Quiz</button>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 20px;
}
.logo {
  height: 300px;
  width: auto;
}
.logo:hover {
  opacity: 0.9;
}
.sub {
  font-size: 18px;
  color: #a0a0c0;
  max-width: 600px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  font-size: 18px;
  margin: 6px 0;
  color: #a0a0c0;
}
.start-btn {
  background-color: #fdd20c;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.5px;
}
.start-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
