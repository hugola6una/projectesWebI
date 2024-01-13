<script setup>

    defineProps(['attack'] );
</script>

<template>
    <article :class="['item', { sel: attack.equipped }]">
        <img src="@/assets/images/icons/swordIcon.png">
        <p>{{attack.attack_ID}}</p>
    </article>
</template>

<style scoped>
    .item {
        width: 10vh;
        height: 8vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        padding: 1vh;
        margin: 1vh;
        cursor: pointer;
    } 

    .item img {
        margin-top: 2vh;
        width: 5vh;
    }

    .sel {
        background-color: #786aa8;
        color: white;
    }

    .item p {
        word-wrap: break-word;
        font-size: 1.5vh;
        color: #362864;
    }
</style>