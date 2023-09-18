<script setup>
import { ref } from 'vue'
import QuizCard from '@/components/QuizCard.vue'
import { useStore } from '../store/quizStore'

const store = useStore()

function nextCard(isAnswerCorrect) {
    store.nextCard()
    store.checkAnswer(isAnswerCorrect)
}
</script>

<template>
    <div class="container">
        <div class="center">
            <div class="span-center">
                <span class="score">Score:&nbsp;</span>
                <Transition name="flip" mode="out-in">
                    <span class="score" :key="store.score">{{
                        store.score
                    }}</span>
                </Transition>
            </div>
        </div>
        <div class="card-center">
            <Transition name="slide-up" mode="out-in">
                <QuizCard
                    :quiz="store.getCurrentQuiz()"
                    :key="store.index"
                    @next="nextCard"
                />
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
    height: 100dvh;
}
</style>
