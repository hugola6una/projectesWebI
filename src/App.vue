<script setup>

</script>

<template>
    <div id="container">
        <RouterView />
    </div>
</template>

<style scoped>
    #container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        height: 100vh; 
    }

    @media (max-width: 900px) {
        #container {
            display: flex;
            flex-direction: column;
        }
    }
</style>
