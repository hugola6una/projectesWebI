<script setup>
    import { defineProps } from 'vue';
    defineProps(['message']); // Rep el misastge d'errro com a prop
</script>

<template>
    <!-- Span amb missatge d'error vriable -->
    <span class="error">{{ message }}</span>
</template>

<style scoped>
    /* Estil missatge d'error */
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