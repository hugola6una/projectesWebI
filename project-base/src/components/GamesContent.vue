<script setup>
    import { ref } from 'vue';  // Per refenciar variables
    import ItemMatch from '../components/ItemMatch.vue';
</script>

<template>
    <h3>RATIO: 3 / 7</h3>
    <div class="games">
        <ItemMatch class="won"/>
        <ItemMatch class="lose"/>
        <ItemMatch class="lose"/>
        <ItemMatch class="won"/>
        <ItemMatch class="lose"/>
        <ItemMatch class="won"/>
        <ItemMatch class="lose"/>
    </div>
</template>

<style scoped>

    .gamesContent h3{
        color: #362864;
        font-size: 2vmax;
    }
    .games {
        width: 100%;
        height: 39vmax;
        max-height: 39vmax;
    overflow-y: auto;
    }

    .won {
        background-color: rgb(107, 173, 107);
    }

    .lose {
        background-color: rgb(189, 99, 99);
    }
</style>
