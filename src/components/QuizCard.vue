<script setup>
import { ref } from 'vue'
const props = defineProps(['quiz'])
const emit = defineEmits(['next'])

const gotAnswer = ref(false)
const isAnswerCorrect = ref(false)

const shuffledOptions = props.quiz.options.sort(() => 0.5 - Math.random())

function checkAnswer(answer) {
    gotAnswer.value = true
    isAnswerCorrect.value = answer === props.quiz.correct
    console.log(isAnswerCorrect.value, answer)
}

function onNext() {
    emit('next', isAnswerCorrect.value)
}
</script>

<template>
    <div class="box">
        <div class="question">
            <h3>{{ props.quiz.question }}</h3>
        </div>
        <div class="answers">
            <button
                class="answer-button"
                v-for="opt in shuffledOptions"
                @click="checkAnswer(opt)"
                :disabled="gotAnswer"
            >
                {{ opt }}
            </button>
        </div>

        <Transition name="slide-up" mode="out-in">
            <h4 v-if="gotAnswer && isAnswerCorrect" class="msg-right">
                Congrats
            </h4>
            <h4 v-else-if="gotAnswer && !isAnswerCorrect" class="msg-wrong">
                Ops, right answer is {{ props.quiz.correct }}
            </h4>
            <h4 v-else>Answer the question</h4>
        </Transition>
        <div>
            <button
                class="next-button"
                @click="onNext()"
                :disabled="!gotAnswer"
            >
                Next
            </button>
        </div>
    </div>
</template>

<style scoped>
.next-button {
    background-color: rgb(255, 255, 0);
    margin: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 5px;
    border: 1px rgb(255, 255, 0) solid;
    cursor: pointer;
}

.next-button:hover {
    background-color: rgb(220, 217, 31);
    border-color: rgb(220, 217, 31);
}
.question {
    text-align: center;
    padding: 0.5rem;
}
.answer-button {
    background-color: rgb(0, 94, 255);
    margin: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 5px;
    border: 1px rgb(0, 94, 255) solid;
    cursor: pointer;
    color: aliceblue;
}

.answer-button:hover:enabled {
    background-color: rgb(220, 31, 198);
    border-color: rgb(220, 31, 198);
}

.answer-button:hover:disabled {
    cursor: default;
}

.answer-button:disabled {
    background-color: rgb(113, 112, 112);
    border-color: rgb(113, 112, 112);
}

.msg-right {
    color: green;
}

.msg-wrong {
    color: red;
}

.box {
    padding: 1rem;
    margin: 1rem;
    width: 60%;
    background-color: rgb(4, 4, 68);
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: rgba(4, 4, 68, 0.35) 0px 5px 15px;
}
</style>
