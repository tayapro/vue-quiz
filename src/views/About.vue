<template>
    <div class="container">
        <div class="center">
            <div>
                <div class="header">
                    <h1>ABOUT</h1>
                </div>
                <div class="img">
                    <img src="@/logo/quiz.png" alt="user" width="150" />
                </div>
            </div>
            <div class="span">
                <span
                    >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Natus, nobis accusantium, culpa voluptatem error possimus
                    quo beatae ducimus hic officia magni deserunt repellat
                    dolores!
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img {
    margin-right: 1rem;
    max-width: inherit;
    max-height: inherit;
    height: inherit;
    width: inherit;
    object-fit: cover;
}

.center {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.span {
    display: flex;
    margin-left: 1rem;
    margin-bottom: 3rem;
    width: 60%;
    padding: 1rem;
    border-radius: 15px;
    background-color: rgba(238, 236, 236, 0.8);
    box-shadow: rgba(202, 202, 202, 0.35) 0px 5px 15px;
}

.container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    padding-top: 7rem;
    height: 100dvh;
}
</style>
