<script setup>
    // Librairies
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    // Components
    import LateralMenu from '@/components/LateralMenu.vue';
    import Top from '@/components/TopComponent.vue';

    // Variables
    const route = useRoute();

    const isAccessView = ref(true); // Per defecte és true perquè el component AccessView és el primer que es mostra
    const isHomeView = ref(false);  // Per defecte és false perquè el component HomeView és el segon que es mostra

    // Obtenim el player de localstorage
    var  player = JSON.parse(localStorage.getItem('player')); 
    // Funcions
    // Comprova si el component actual és el de login o el de home
    onMounted(() => {
        checkCustomView();
    });

    // Comprova si el component actual és el de login o el de home
    watch(() => route.name, () => {
        checkCustomView();
    });

    // Comprova si el component actual és el de login o el de home i actualitza les variables
    function checkCustomView() {
        const accessViews = ['access', 'loginPlayer', 'createPlayer'];
        const homeViews = ['home', 'user', 'ranking', 'store', 'my-attacks', 'games'];
        isAccessView.value = accessViews.includes(route.name);
        isHomeView.value = homeViews.includes(route.name);
    }
</script>

<template>
    <!-- Contenidor global  contenint diferents estils -->
    <div :class="{ 'container': true ,'accessContainer': isAccessView, 'homeContainer': isHomeView}" @loginRequest="handleLogin">
        <!-- Component LateralMenu amb les opcions de navegació un cop registrat usuari-->
        <LateralMenu v-if="isHomeView"/>
        <main v-if="isHomeView">
            <Top v-if="isHomeView" :coin="player.coins" />
            <!-- Component RouterView amb els diferents views de la web -->
            <section>
                <RouterView v-if="isHomeView"/>
            </section>
        </main>
        <!-- Component RouterView amb els diferents views de la web -->
        <RouterView v-if="isAccessView"/>
    </div>
</template>

<style scoped>
    /* Estil del contenidor global */
    .container {
        display: grid; /* Fem com a grid per definir les diferents arees amb fraccions i que sigui responsive */
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    /* Estil per a l'accésView 2 columnes nomes mateixa mida */
    .accessContainer {
        grid-template-columns: 1fr 1fr;
    }

    /* Estil per a l'homeView 2 columnes 1/5 i 4/5 */
    .homeContainer {
        grid-template-columns: 1fr 4fr;
        height: 100%;
        width: 100%;
    }

    main {
        height: 100%;
        width: 100%;
        background: #362864;
        display: grid;
        grid-template-rows: 1fr 8fr;
    }

    section {
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: center;
        align-items: center;
        padding: 3vh;
    }

    

    /* Estil per resolucions petites */
    @media (max-width: 900px) {
        /* Estil del contenidor global */
        .container {
            display: flex;
            flex-direction: column;
        }
    }
</style>
