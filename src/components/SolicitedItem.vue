<script setup>
    defineProps(['item']); // rep item del pare

</script>

<template>
    <!-- Contenidor del item -->
    <div class="solicitedItem">  
        <!-- Imatge atttack -->
        <img src="@/assets/images/icons/swordIcon.png" alt="attackIcon" class="iSword" />
        <!-- Nom atack -->
        <p>{{ item.attack_ID }}</p>
        <!-- Preu attack -->
        <p>{{ item.price }}</p>     
    </div>
</template>

<style scoped>

    /* Estil del item */
    .solicitedItem {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4vh;
        list-style-type: none;
    }

    /* Imatge attack */
    .solicitedItem img {
        width: 9vh;
        justify-self: start;
        align-self: flex-start;
    }
    /* Estil text */
    p {
        margin-right: 7vmax;
        font-size: 2vmax;
        color: #362864;
    }
</style>