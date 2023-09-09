<script setup>
import { ref, onMounted } from 'vue'
import QuizCard from './components/QuizCard.vue'

const arrQA = sanitizeData([
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
    {
        question: "INCORRECT, FOR TEST: What's my fav fruit?",
        correct: 'cucumber',
        options: ['apple', 'orange', 'melon'],
    },
])

const index = ref(0)
const score = ref(0)

function nextCard(isAnswerCorrect) {
    index.value += 1
    index.value %= arrQA.length
    if (isAnswerCorrect) score.value += 1
}

function sanitizeData(arr) {
    let newArr = []
    for (let q of arr) {
        const { options, correct } = q
        if (options.includes(correct)) {
            newArr.push(q)
        }
    }
    return newArr
    // return arr.filter((q) => q.options.includes(q.correct))
}
</script>

<template>
    <div class="center">
        <div class="center-by-flex">
            <span class="score">Score:&nbsp;</span>
            <Transition name="flip" mode="out-in">
                <span class="score" :key="score">{{ score }}</span>
            </Transition>
        </div>
        <div class="center-by-flex">
            <Transition name="slide-up" mode="out-in">
                <QuizCard :quiz="arrQA[index]" :key="index" @next="nextCard" />
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.score {
    font-size: 1.3rem;
    display: inline-block;
    align-content: center;
}

.center-by-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100dvh;
}
</style>
