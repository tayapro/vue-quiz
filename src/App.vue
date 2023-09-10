<template>
    <div class="routes">
        <RouterLink to="/">Quiz</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>

    <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<style scoped>
.routes {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

a {
    text-decoration: none;
}

a.router-link-active {
    border-bottom: 2px solid red;
}
</style>
