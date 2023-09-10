<script setup>
import { ref } from 'vue'
import QuizCard from '@/components/QuizCard.vue'

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
    <div class="container">
        <div class="center">
            <div class="span-center">
                <span class="score">Score:&nbsp;</span>
                <Transition name="flip" mode="out-in">
                    <span class="score" :key="score">{{ score }}</span>
                </Transition>
            </div>
        </div>
        <div class="card-center">
            <Transition name="slide-up" mode="out-in">
                <QuizCard :quiz="arrQA[index]" :key="index" @next="nextCard" />
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 10dvh;
}

.header-item {
    flex-grow: 1;
    color: aliceblue;
}

.title {
    padding-left: 3rem;
}

.about {
    display: flex;
    justify-content: right;
    padding-right: 3rem;
}
.span-box {
    background-color: aqua;
}
.score {
    font-size: 1.3rem;
    display: inline-block;
    align-content: center;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.span-center {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    margin: 1rem;
    width: 60%;
    padding: 1rem;
    margin: 1rem;
    margin-bottom: 0;
    border-radius: 15px;
    background-color: rgba(202, 202, 202, 0.377);
    box-shadow: rgba(202, 202, 202, 0.35) 0px 5px 15px;
}

.card-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90dvh;
}
</style>
