<script setup>
    // Libraries

   const props = defineProps(['attack']);  // Rep el contingut del item per props
</script>

<template>
    <!-- Item d'attac envia un emit en cas de click -->
    <article  @click="$emit('updateSel')" :class="{ 'item': true, sel: props.attack.equipped }" >
        <!-- Imatge del atac -->
        <img src="../assets/images/icons/swordIcon.png" alt="imageAttack" />
        <!-- Nom del atac -->
        <p>{{ props.attack.attack_ID }}</p>
    </article>
</template>

<style scoped>
    /* Contenidor del item d'atac */
    .item {
        display: flex;
        flex-direction: column;
        width: 8vmax;
        height: 6vmax;
        border: none;
        padding: 1vmax;
        margin: 1vmax;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: black;
    }

    /* Animció en cas de fer hover */
    .item:hover {
        cursor: pointer;
        background-color: #80547f;
        color: white;
    }   

    /* estil imatge del atac */
    img {
        margin-top: 1.5vmax;
        width: 4vmax;
    }

    /* Estil nom de l'atac */
    p {
        font-size: 1.2vmax;
    }

    /* Estil si l'atac esta seleccionat */
    .sel {
        color: white;
        background-color: #80547f;
    }
</style>
