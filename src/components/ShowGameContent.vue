<script setup>
    import ItemGames from '../components/ItemGames.vue';
</script>

<template>
    <div class="playersContent">
        <h3>Select a game</h3>
        <section class="players">
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
            <ItemGames/>
        </section>
        <button>JOIN</button>
    </div>
</template>

<style scoped>

    .playersContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 1vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        max-height: 76.5vh;
    }

    .playersContent h3{
        color: #362864;
        font-size: 3vmax;
    }
    .players {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }

    button {
        color: white;
        background-color: #362864;
        height: 7vmax;
        width: 20vmax;
        font-size: 3vmax;
        border: none;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
    @media (max-width: 800px) {
    .playersContent {
        max-height: 60vh;
    }

    button {
        color: white;
        background-color: #362864;
        height: 7vmax;
        width: 25vmax;
        font-size: 3vmax;
        border: none;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
}
</style>
