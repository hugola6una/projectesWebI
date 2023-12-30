<script setup>
    // Libraries
    import { onMounted, ref} from 'vue';
    // API requests 
    import { attackPlayer } from '@/services/api/AttacksRequest.js';
    // Components
    import ItemAttack from '@/components/ItemAttack.vue';

    const props = defineProps(['player']);

    onMounted(() => {
        const token = JSON.parse(localStorage.getItem('player')).token; // Obtenim token del local storage
        getAttacks(token);
    })

    // Variables
    var attacks = ref ([])


    // Functions
    async function getAttacks(token) {
        attacks.value = await attackPlayer(token, props.player.player_ID);
    }

    function toggleEvent(attack) {
        console.log(attack);
    }
</script>

<template>
    <!-- Contingut dels attacks del player -->
    <article class="attacksContent" >
        <!-- Titol del article -->
        <h1>Colection</h1>
        <!-- Secció de items -->
        <section class="items">
            <!-- Item atac -->
            <ItemAttack v-for="attack in attacks" :key="attack.attack_ID" :attack="attack" :isSelected="attack.equipped" @updateSel="toggleEvent(attack)"/>
        </section>
    </article>
</template>

<style scoped>
    /*Contenidor dels items d'atac */
    article {
        width: 100%;
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
