<script setup>
    import { ref } from 'vue';
    import ItemAttack from '../components/ItemAttack.vue';

    const items = ref([
    { id: 1, name: 'Attack1', price: 100, selected: false },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: true },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    { id: 1, name: 'Attack1', price: 100, selected: true },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: false },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    { id: 1, name: 'Attack1', price: 100, selected: false },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: true },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    
    
]);
</script>

<template>
    <div class="attacksContent">
        <h1>Colection</h1>
        <section class="items">
            <ItemAttack
                v-for="item in items"
                :key="item.id"
                :initialSelected="item.selected"
                :itemName="item.name"
                :price="item.price"
                @itemSelected="updateTotal"
            />
        </section>
    </div>
</template>

<style scoped>

.attacksContent {
    margin: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    background-color: white;
    max-height: 70vh;
    
}
.attacksContent h1 {
    margin-top: 3vmax;
    font-size: 2.5vmax;
    color: #362864; 
}

.items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
}

.sel {
    background-color: #80547f;
}

@media (max-width: 800px) {
    .attacksContent {
        max-height: 60vh;
    }
}
</style>
