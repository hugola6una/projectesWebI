<script setup>

    defineProps(['attack'] ); // Rep props de l'objecte attack
</script>

<template>
    <!-- Item del objecte attack del MyAttacks -->
    <article :class="['item', { sel: attack.equipped }]">
        <!-- Imatge del attack -->
        <img src="@/assets/images/icons/swordIcon.png">
        <!-- Nom del attack -->
        <p class="name">{{attack.attack_ID}}</p>
    </article>
</template>

<style scoped>
    /* Estil del items */
    .item {
        /* width: 10vh; */
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

    /* Estil imatge item */
    .item img {
        margin-top: 2vh;
        width: 5vh;
    }  

    /* Estil item en cas de ser equipped */
    .sel {
        background-color: #786aa8;
        color: white;
    }

    .name {
        word-wrap: break-word;
        font-size: 1.5vh;
        color: #362864;
    }
</style>