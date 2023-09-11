<template>
    <div class="navbar">
        <div class="logo">
            <h2>SUUPA</h2>
        </div>
        <div class="routes">
            <RouterLink to="/"><h4>Quiz</h4></RouterLink>
            <RouterLink to="/about"><h4>About</h4></RouterLink>
        </div>
    </div>

    <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
            <component :is="Component" />
        </Transition>
    </RouterView>
</template>

<style scoped>
.routes h4 {
    color: rgb(255, 255, 255);
    margin-top: 0.3em;
    margin-bottom: 0.3em;
}
.logo h2 {
    color: yellow;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
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
}

a {
    text-decoration: none;
}

a.router-link-active {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}
</style>
