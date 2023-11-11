<script setup>

</script>

<template>
    <article class="game" >
        <p>GAME#0</p>
        <p>CREATOR#0</p>
        <p>FINISHED</p>
        <p>DD/MM/YYYY</p>
        <p>DD/MM/YYYY</p>
    </article>
</template>

<style scoped>
.game {
    margin-bottom: 2vh;
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: #EFEFFE;
}

.game:active {
    background-color: #CACAFB;
}

p {
    font-size: 1vmax;
    color: #362864;   
}

</style>
