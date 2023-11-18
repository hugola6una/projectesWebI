<script>
    export default {
        data() {
            return {
                userName: 'Player',
                userLevel: 1,
                userXP: 250,
                userMaxXP: 500,
                imageSrc: 'src/assets/images/icons/userIcon.png',
            }
        },
        computed: {
            progressBarWidth() {
                return (this.userXP * 100) / this.userMaxXP
            }
        }
        
    }
</script>

<template>
    <article class="playerContent">
        <img :src="imageSrc" alt="userPhoto"/>
        <h1>{{ userName }}</h1>
        <div class="level">
            <div class="progressBarContainer">
                <div class="progressBar" :style="{ width: progressBarWidth + '%'}"></div>
            </div>
            <p>Lvl. {{ userLevel }}</p>
        </div>
        <p>{{userXP}} / {{ userMaxXP }}</p>
    </article>
</template>

<style scoped>

.playerContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: center;
    align-items: center;
}
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
    margin: 1vmax;
    background-color: white;
}

.playerContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
}


@media (max-width: 900px) { 
}

</style>
