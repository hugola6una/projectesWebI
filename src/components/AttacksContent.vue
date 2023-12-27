<script setup>
    // Libraries
    import { computed} from 'vue';
    // Components
    import ItemAttack from '../components/ItemAttack.vue';

    // Variables
    var items = computed(() => [{ id: 1, name: 'Attack1', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },])

    // Functions
    function toggleEvent(item) {
        item.selected = !item.selected;
        console.log(item);
    }
</script>

<template>
    <article class="attacksContent">
        <h1>Colection</h1>
        <section class="items">
            <ItemAttack v-for="item in items" @click="toggleEvent(item)" :key="item.id" :imageSrc="item.imgSrc" :name="item.name" :isSelected="item.selected" />
        </section>
    </article>
</template>

<style scoped>

.attacksContent {
    margin: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: white;
    max-height: 60vh;
    
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

@media (max-width: 800px) {
    .attacksContent {
        max-height: 60vh;
    }
}
</style>
