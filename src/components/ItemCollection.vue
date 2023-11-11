<script setup>
</script>

<template>
    <article class="item">
        <img src="../assets/images/icons/swordIcon.png">
        <p>Attack X</p>
    </article>
</template>

<style scoped>
    .item {
        width: 8vmax;
        height: 6vmax;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 1vmax;
        margin: 1vmax;
        cursor: pointer;
    } 

    .item img {
        width: 3vmax;
    }

    .item p {
        font-size: 1vmax;
        color: #362864;
    }
</style>