<script setup>
    // Librairies
    import { computed, defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const props = defineProps(['imageSrc', 'strAlt', 'route']); // Rep les propietats enviades per el pare

    // Variables
    const router = useRouter();
    const isSelected = computed(() => router.currentRoute.value.path === props.route); // variable isSelected per estil diferent
</script>

<template>
    <!-- Contenidor com a button de les opcions del menu lateral -->
    <div :class="{'option': true, 'selected': isSelected}">
        <!-- Icone del butó -->
        <img :src="imageSrc" alt="" class="icon">
        <!-- Text del butó -->
        <span :class="{'option': true, 'selected': isSelected}">{{ strAlt }}</span>
    </div>
</template>

<style scoped>
    /* Estil per el contenidor */
    .option {
    height: 5vmax;
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: center;
    align-items: center;
    }

    /* Estil diferent per el contenidor en cas de que estigui selecconat */
    .option.selected {
    box-sizing: border-box;
    background-color: #80547f;
    color: white;
    }

    /* Anmació en cas de que sigui hover canvia color i cursor */
    .option:hover {
    background: #80547f;
    cursor: pointer;
    }

    /* Canivar color lletra en cas de hover */
    .option:hover span {
    color: white;
    }

    /* Estil mida del icone */
    .icon {
    width: 4vmax;
    margin-right: 1vmax;
    margin-left: 1vmax;
    align-items: center;
    justify-content: center;
    }

    /* Estil del text de la opció */
    span {
    text-align: center;
    color: #362864;
    font-size: 1.5vmax;
    white-space: nowrap;
    }

    /* Estil per resolucions petites */
    @media (max-width: 900px) {
        /* Estil per la opió */
        .option {
            display: flex;
            flex-direction: column;
            height: 100%;
            grid-template-columns: 1fr;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        /* Nova mide del icone */
        .icon {
            display: flex;
            width: 4vmax;
        }

        /* Estil del text no el mostre per resolucions petites */
        .option span {
            display: none;
        }
    }
</style>
