<script setup>

</script>

<template>
    <article class="player" >
        <img src="..\assets\images\icons\userIcon.png" alt="playerIcon" class="playerIcon" />
        <h4>user</h4>
        <p>155XP</p>
    </article>
</template>

<style scoped>
.player {
    margin-bottom: 2vh;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
}

.playerIcon {
    height: 5vh;
    width: 5vh;
}

h4 {
    font-size: 1.5vmax;
    font-weight: bold;
}

p {
    font-size: 1vmax;   
}

</style>
