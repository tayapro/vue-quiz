<script setup>
import { ref } from 'vue'
import QuizCard from './components/QuizCard.vue'

const arrQA = [
    {
        question: 'How many legs does a spider have?',
        correct: 'Eight',
        options: ['Eight', 'Six', 'Two', 'Ten'],
    },
    {
        question: 'What is the name of the toy cowboy in Toy Story?',
        correct: 'Woody',
        options: ['Woody', 'Andy', 'Toby'],
    },
    {
        question: 'What is the color of an emerald?',
        correct: 'Green',
        options: ['Green', 'Yellow', 'Black'],
    },
    {
        question: "What's the name of a place you go to see lots of animals?",
        correct: 'A zoo',
        options: ['A zoo', 'An office', 'At home'],
    },
]

// TODO: Create sanitize data

const index = ref(0)
const score = ref(0)

function nextCard(isAnswerCorrect) {
    index.value += 1
    index.value %= arrQA.length
    if (isAnswerCorrect) score.value += 1
}
</script>

<template>
    <span class="score">Score:&nbsp;</span>
    <Transition name="flip" mode="out-in">
        <span class="score" :key="score">{{ score }}</span>
    </Transition>
    <Transition name="slide-up" mode="out-in">
        <QuizCard :quiz="arrQA[index]" :key="index" @next="nextCard" />
    </Transition>
</template>

<style scoped>
.score {
    font-size: 1.3rem;
    display: inline-block;
}
</style>
