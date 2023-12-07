<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const isAccessView = ref(true);
    const isHomeView = ref(false);

    onMounted(() => {
        checkCustomView();
    });

    watch(() => route.name, () => {
        checkCustomView();
    });

    function checkCustomView() {
        const accessViews = ['access', 'loginPlayer', 'createPlayer'];
        const homeViews = ['home', 'user', 'ranking', 'store', 'my-attacks', 'games'];
        isAccessView.value = accessViews.includes(route.name);
        isHomeView.value = homeViews.includes(route.name);
    }
</script>

<template>
    <div :class="{ 'container': true ,'accessContainer': isAccessView, 'homeContainer': isHomeView}">
        <RouterView />
    </div>
</template>

<style scoped>
    .container {
        display: grid;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    .accessContainer {
        grid-template-columns: 1fr 1fr;
    }

    .homeContainer {
        grid-template-columns: 1fr 4fr;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 900px) {
        .container {
            display: flex;
            flex-direction: column;
        }
    }
</style>
