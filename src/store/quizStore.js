import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('quiz', () => {
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
            question:
                "What's the name of a place you go to see lots of animals?",
            correct: 'A zoo',
            options: ['A zoo', 'An office', 'At home'],
        },
        {
            question: "INCORRECT, FOR TEST: What's my fav fruit?",
            correct: 'cucumber',
            options: ['apple', 'orange', 'melon'],
        },
    ])

    const score = ref(0)
    const index = ref(0)

    function getCurrentQuiz() {
        return arrQA[index.value]
    }

    function nextCard() {
        index.value += 1
        index.value %= arrQA.length
    }

    function checkAnswer(isAnswerCorrect) {
        if (isAnswerCorrect) score.value += 1
    }

    function startNewQuiz() {
        score.value = 0
        index.value = 0
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

    // {score} => {score:score}
    return {
        score,
        index,
        getCurrentQuiz,
        nextCard,
        checkAnswer,
        startNewQuiz,
    }
})
