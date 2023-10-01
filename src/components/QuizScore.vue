<script setup>
import { useStore } from '../store/quizStore'

const store = useStore()
</script>

<template>
    <div class="box">
        <h3>Your total score is {{ store.score }}</h3>
        <button class="new-quiz-button" @click="store.startNewQuiz()">
            <h3>New Quiz</h3>
        </button>
    </div>
</template>

<style scoped>
.box h3 {
    margin: 1.5rem;
    margin-bottom: 0rem;
}
.box {
    margin: 1rem;
    width: 60%;
    background-color: rgba(4, 4, 68, 0.8);
    color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: rgba(4, 4, 68, 0.35) 0px 5px 15px;
}

.new-quiz-button {
    all: unset;
    border-radius: 5px;
    border: 3px rgba(0, 94, 255, 0.5) solid;
    color: rgb(255, 255, 255);
    margin: 1rem;
    margin-bottom: 1.5rem;
}

.new-quiz-button h3 {
    padding: 0rem;
    margin: 0.3rem;
    margin-left: 1rem;
    margin-right: 1rem;
}

.new-quiz-button:hover {
    all: unset;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(0, 94, 255, 0.5);
    border: 3px rgba(0, 94, 255, 0.05) solid;
    color: rgb(255, 255, 255);
    margin: 1rem;
    margin-bottom: 1.5rem;
}
</style>
