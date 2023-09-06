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
        <h3>{{ props.quiz.question }}</h3>
        <button
            v-for="opt in shuffledOptions"
            @click="checkAnswer(opt)"
            :disabled="gotAnswer"
        >
            {{ opt }}
        </button>

        <Transition name="slide-up" mode="out-in">
            <h3 v-if="gotAnswer && isAnswerCorrect" class="msg-right">
                Congrats
            </h3>
            <h3 v-else-if="gotAnswer && !isAnswerCorrect" class="msg-wrong">
                Ops, right answer is {{ props.quiz.correct }}
            </h3>
            <h3 v-else>Answer the question</h3>
        </Transition>
        <div>
            <button @click="onNext()" :disabled="!gotAnswer">Next</button>
        </div>
    </div>
</template>

<style scoped>
.msg-right {
    color: green;
}

.msg-wrong {
    color: red;
}

.box {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin: 1rem;
}
</style>
