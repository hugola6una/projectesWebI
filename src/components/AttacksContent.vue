<script setup>
    // Libraries
    import { onMounted, reactive} from 'vue';
    // API requests 
    import { attackPlayer } from '@/services/api/AttacksRequest.js';
    // Components
    import ItemAttack from '../components/ItemAttack.vue';

    onMounted(() => {
        items = attackPlayer(JSON.parse(localStorage.getItem('player')).token);
    })

    // Variables
    var items = reactive ([])


    // Functions
    function toggleEvent(item) {
        item.selected = !item.selected;
    }
</script>

<template>
    <!-- Contingut dels attacks del player -->
    <article class="attacksContent">
        <!-- Titol del article -->
        <h1>Colection</h1>
        <!-- Secció de items -->
        <section class="items">
            <!-- Item atac -->
            <ItemAttack v-for="item in items" :key="item.id" :imageSrc="item.imgSrc" :name="item.name" :isSelected="item.selected" @updateSel="toggleEvent(item)"/>
        </section>
    </article>
</template>

<style scoped>
    /*Contenidor dels items d'atac */
    article {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        background-color: white;
        max-height: 60vh;   
    }

    /* Titol de la secció del items */
    h1 {
        margin-left: 4vh;
        margin-top: 6vh;
        font-size: 4vh;
        color: #362864; 
    }

    /* Contenidor dels items */
    .items {
        width: 100%;
        display: flex; /* Emprem el flex wrap per a que s'adapti a tota l'amlada */
        flex-wrap: wrap;
        justify-content: center;
        overflow-y: auto;
    }

    /* Estil resolucio petita */
    @media (max-width: 900px) {
        /* Definim max heigh per a telefons */
        article {
            max-height: 60vh;
        }
    }
</style>
