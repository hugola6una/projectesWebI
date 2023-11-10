<script setup>

</script>

<template>
    <article class="player" >
        <h4>GAME#0</h4>
        <h4>CREATOR#0</h4>
        <p>DD/MM/YYYY</p>
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
    background-color: #EFEFFE;
}

.player:active {
    background-color: #CACAFB;
}

.playerIcon {
    height: 5vh;
    width: 5vh;
}

h4 {
    font-size: 1.5vmax;
    font-weight: bold;
    color: #362864;
}

p {
    font-size: 1vmax;
    color: #362864;   
}

</style>
