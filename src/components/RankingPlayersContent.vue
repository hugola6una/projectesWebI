<script setup>
    import ItemPlayer from '../components/ItemPlayer.vue';
</script>

<template>
    <div class="playersContent">
        <h3>RANKING</h3>
        <section class="players">
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
            <ItemPlayer/>
        </section>
    </div>
</template>

<style scoped>

    .playersContent {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 2vmax;
        background-color: white;
        justify-content: start;
        text-align: center;
        align-items: center;
        max-height: 70vh;
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


    @media (max-width: 800px) {
    .playersContent {
        max-height: 60vh;
    }
}
</style>
