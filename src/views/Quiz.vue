<script setup>
import QuizCard from '@/components/QuizCard.vue'
import QuizScore from '@/components/QuizScore.vue'
import { useStore } from '../store/quizStore'

const store = useStore()

function nextCard(isAnswerCorrect) {
    store.nextCard()
    store.checkAnswer(isAnswerCorrect)
}
</script>

<template>
    <div class="container">
        <div class="score-center" v-if="!store.isQuizFinished()">
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
                    v-if="!store.isQuizFinished()"
                    :quiz="store.getCurrentQuiz()"
                    :key="store.index"
                    @next="nextCard"
                />
                <QuizScore v-else />
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100dvh;
}

.card-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.score {
    font-size: 1.3rem;
    display: inline-block;
    align-content: center;
}

.score-center {
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
</style>
