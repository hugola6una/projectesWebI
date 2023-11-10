<script setup></script>

<template>
<img src="..\assets\images\icons\userIcon.png" alt="userPhoto"/>
<h1>Player</h1>
<div class="level">
    <div class="progressBarContainer">
        <div class="progressBar"></div>
    </div>
    <p>Lvl. X</p>
</div>
<p>55 / 100</p>
</template>

<style scoped>
.playerContent img {
    margin-top: 4vmax;
    width: 10vmax;
}

.playerContent p {
    font-size: 1vmax;
    color: black;
}
.level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vmax;
}

.progressBarContainer {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 15vmax;
    height: 3vmax;
    margin-right: 1vmax;
    background-color: #362864;
}

.progressBar {
    display: flex;
    height: 1.5vmax;
    width: 50%; /* Ho fem % per el futur joc*/
    margin: 1vmax;
    background-color: white;
}

.playerContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
}
</style>
