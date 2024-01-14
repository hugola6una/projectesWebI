<script setup>
    // Librairies
    import { ref, onMounted, watch, defineAsyncComponent } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    // Components
    const LateralMenu = defineAsyncComponent(() => import('@/components/LateralMenu.vue'));
    const Top = defineAsyncComponent(() => import('@/components/TopComponent.vue'));

    // Variables
    const route = useRoute();
    const router = useRouter();

    const isAccessView = ref(true); // Per defecte és true perquè el component AccessView és el primer que es mostra
    const isHomeView = ref(false);  // Per defecte és false perquè el component HomeView és el segon que es mostra
    const isGameView = ref(false);  // Per defecte és false perquè el component GameView és el segon que es mostra

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
    async function checkCustomView() {
        const accessViews = ['access', 'loginPlayer', 'createPlayer'];
        const homeViews = ['home', 'user', 'ranking', 'store', 'my-attacks', 'games', 'games-administration'];
        const gameView = ['play'];
        isGameView.value = gameView.includes(route.name);
        isAccessView.value = accessViews.includes(route.name);
        isHomeView.value = homeViews.includes(route.name);  
        if (isAccessView.value) { // Si estem en el component de accesss, esborrem el localStorage
            localStorage.clear();
        } 
    }

    // Funció que avisa que ja tenim player al localStorge
    function getPlayer() {
        router.replace('/home') 
    }
</script>

<template>
    <!-- Contenidor global  contenint diferents estils -->
    <div :class="{ 'container': true ,'accessContainer': isAccessView, 'homeContainer': isHomeView, 'gameContainer': isGameView}" @loginRequest="handleLogin">
        <!-- Component LateralMenu amb les opcions de navegació un cop registrat usuari-->
        <LateralMenu v-if="isHomeView"/>
        <main v-if="isHomeView">
            <Top v-if="isHomeView"/>
            <!-- Component RouterView amb els diferents views de la web -->
            <section>
                <RouterView v-if="isHomeView"/>
            </section>
        </main>
        <!-- Component RouterView amb els diferents views de la web -->
        <RouterView v-if="isAccessView" @havePlayer="getPlayer()"/>
        <RouterView v-else-if="isGameView"/>
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

    .gameContainer {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 4fr 1fr;
        width: 100%;
        height: 100%;
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
