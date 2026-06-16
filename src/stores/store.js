import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import questions from '../data/questions.json'

export const useStore = defineStore('quiz', () => {
  //state

  const status = ref('start') // start, playing or finished
  const allQuestions = ref([])
  const currentIndex = ref(0) // current question
  const score = ref(0)
  const selectedAnswer = ref(null) // index of selected answer
  const answered = ref(false) // did he answered
  const timer = ref(3)
  let timerInterval = null

  const currentQuestion = computed(() => allQuestions.value[currentIndex.value])
  const isLastQuestion = computed(() => currentIndex.value === allQuestions.value.length - 1)
  const totalQuestions = computed(() => allQuestions.value.length)

  //questions shuffle

  function shuffleAndPick() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    allQuestions.value = shuffled.slice(0, 20)
  }

  //function startQuiz calls function for shuffle

  function startQuiz() {
    shuffleAndPick()
    currentIndex.value = 0
    score.value = 0
    selectedAnswer.value = null
    answered.value = false
    status.value = 'playing'
    startTimer()
  }

  function startTimer() {
    timer.value = 3
    timerInterval = setInterval(() => {
      timer.value--
      if (timer.value <= 0) {
        timeIsUp()
      }
    }, 1000)
  }

  function stopTimer() {
    clearInterval(timerInterval)
  }

  function timeIsUp() {
    stopTimer()
    answered.value = true
    selectedAnswer.value = null // when user didn't answer
    goToNext()
  }

  //ANSWER SELECTION
  //If answer is correct we add 3 to score, and if it's not we remove 1

  function selectAnswer(index) {
    if (answered.value) return // double click prevention
    stopTimer()
    answered.value = true
    selectedAnswer.value = index

    if (index === currentQuestion.value.correct) {
      score.value += 3
    } else {
      score.value -= 1
    }
    goToNext()
  }

  //function for skip to next question

  function goToNext() {
    setTimeout(() => {
      if (isLastQuestion.value) {
        status.value = 'finished'
      } else {
        currentIndex.value++
        selectedAnswer.value = null
        answered.value = false
        startTimer()
      }
    }, 2000) //2 seconds before next question
  }

  // RESTART

  function restartQuiz() {
    stopTimer()
    status.value = 'start'
    currentIndex.value = 0
    score.value = 0
    selectedAnswer.value = null
    answered.value = false
    timer.value = 3
  }

  return {
    status,
    score,
    timer,
    currentQuestion,
    currentIndex,
    totalQuestions,
    selectedAnswer,
    answered,
    startQuiz,
    selectAnswer,
    restartQuiz,
  }
})
