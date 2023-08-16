<script setup>
import arrQA from './qa.json'
import { ref } from 'vue'

console.log(arrQA)

function rnd(n) {
    return Math.floor(Math.random() * n)
}

function pickRandomQuestion(qas) {
    return qas[rnd(qas.length)]
}

const { question, right_answer, wrong_answers } = pickRandomQuestion(arrQA)

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5)
}

const answers = shuffle([right_answer, ...wrong_answers])
const gotAnswer = ref(false)
const isAnswerCorrect = ref(false)

function checkAnswer(a) {
    gotAnswer.value = true
    isAnswerCorrect.value = a === right_answer
}
</script>

<template>
    <div>
        <button @click="pickRandomQuestion(arrQA)">Buton</button>
        <h3>{{ question }}</h3>
        <button v-for="a in answers" @click="checkAnswer(a)">
            {{ a }}
        </button>
        <div v-if="gotAnswer">
            <h3 v-if="isAnswerCorrect" class="msg_right">Congrats</h3>
            <h3 v-else class="msg_wrong">
                Ops, right answer is {{ right_answer }}
            </h3>
        </div>
    </div>
</template>

<style scoped>
.msg_right {
    color: green;
}

.msg_wrong {
    color: red;
}
</style>
