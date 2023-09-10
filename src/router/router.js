import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Quiz from '@/views/Quiz.vue'

const routers = [
    { path: '/', component: Quiz },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
})

export default router
