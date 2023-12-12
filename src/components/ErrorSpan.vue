<script setup>
    import { defineProps } from 'vue';
    defineProps(['message']);
</script>

<template>
    <span class="error">{{ message }}</span>
</template>

<style scoped>
    /* Missatge d'error */
    .error {
        color: red;
        font-size: 1.5vh;
        margin-top: 2vh;
    }

    /* Definim estil per a dispostius més petits */
    @media (max-width: 900px) {
        /* Missatge d'error */
        .error {
        font-size: 1vh;
        }
    }
</style>