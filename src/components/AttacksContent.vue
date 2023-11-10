<script setup>
    import ItemAttack from '../components/ItemAttack.vue';
</script>

<template>
    <h1>Colection</h1>
    <section class="items">
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack class="sel" />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack />
        <ItemAttack class="sel" />
        <ItemAttack />
        <ItemAttack class="sel" />
        <ItemAttack />
    </section>
</template>

<style scoped>
.attacksContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
}

.items {
    width: 100%;
    height: 38vmax;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 38vmax;
    overflow-y: auto;
}

.sel {
    background-color: #80547f;
}
</style>
