<script setup>
    // Llibreries   
    defineProps(['attack', 'isSelected']);
    
</script>

<template>
    <!-- Contigut article representa el item -->
    <article :class="{ 'item': true, sel: isSelected }" @click="$emit('toggleSelection')">
        <!-- Imatge attack -->
        <img src="@/assets/images/icons/swordIcon.png" alt="attackIcon" class="iSword" />
        <!-- Nom attack -->
        <p class="name">{{ attack.attack_ID }}</p>
        <!-- Container amb el preu -->
        <div class="container">
            <img src="@/assets/images/icons/coinIcon.png" alt="Coin" class="coin"/>
            <p class="price" v-bind:textContent="attack.price"></p>
        </div>
    </article>
</template>

<style scoped>
    /* Estil item */
    .item {
        display: flex;
        flex-direction: column;
        width: 12vh;
        height: 20vh;
        border: none;
        padding: 0.5vh;
        margin: 0.5vh;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    /* estil hover item */
    .item:hover {
        background-color: #80547f60;
        cursor: pointer;
    }

    /* Mida imatge del attack */
    .item img {
        margin-top: 2vh;
        width: 5vh;
    }

    /* Estil nom attack */
    .name {
        width: 100%;
        color: #80547f;
        font-size: 1.5vh;
        word-wrap: break-word;
    }

    /* Estil text */
    p {
        color: #ffffff;
        font-size: 1vw;
        align-items: left;
    }


    /* Esil contenidor dels preus */
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #362864;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    /* Etil imatge coins */
    .container img {
        width: 4vh;
        margin: 1vh;
    }

    /* estil preu */
    .container p {
        white-space: nowrap; /* No msotrem sencer s ino entra */
        overflow: hidden;
        max-width: 10vh;
        text-overflow: ellipsis;
        
    }

    /* estil en cas de seleccionat */
    .sel {
        background-color: #80547f;
        border: 2px;
        border-color: #362864;
    }

    /* Estil text en cas de selecició */
    .sel p {
        color: white;
    }
</style>
