<script setup>
import { useRouter } from 'vue-router'
import { useStore } from './store/quizStore'

import { ref } from 'vue'

const store = useStore()
const newQuizBtnVisible = ref(true)

const router = useRouter()
router.beforeEach((to, from) => {
    // console.log('to', to)
    // console.log('from', from)
    if (to.path === '/') newQuizBtnVisible.value = true
    else newQuizBtnVisible.value = false
})
</script>

<template>
    <div class="navbar">
        <div class="logo-new-quiz">
            <div class="logo">
                <h2>SUUPA</h2>
            </div>
            <div>
                <button
                    class="new-quiz-button"
                    v-if="newQuizBtnVisible"
                    @click="store.startNewQuiz()"
                >
                    <h3>New Quiz</h3>
                </button>
            </div>
        </div>
        <div class="routes">
            <RouterLink to="/"><h3>Quiz</h3></RouterLink>
            <RouterLink to="/about"><h3>About</h3></RouterLink>
        </div>
    </div>

    <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<style scoped>
.new-quiz-button {
    all: unset;
    border-radius: 5px;
    border: 3px rgba(0, 94, 255, 0.5) solid;
    color: rgb(255, 255, 255);
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
}
.logo-new-quiz {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-left: 1rem;
}
.routes h3 {
    color: rgb(255, 255, 255);
    margin-top: 0.3em;
    margin-bottom: 0.3em;
}
.logo h2 {
    color: yellow;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    font-family: 'Monoton';
}
.navbar {
    background-color: rgba(4, 4, 68, 0.6);
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    box-shadow: rgba(4, 4, 68, 0.35) 0px 5px 15px;
}
.routes {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
}
</style>
