<script>
    import ItemAttack from '../components/ItemAttack.vue';

    export default {
        components: { ItemAttack },
        data() {
            return {
                items: [
                    { id: 1, name: 'Attack1', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 2, name: 'Attack2', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 3, name: 'Attack3', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 4, name: 'Attack4', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 5, name: 'Attack5', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 6, name: 'Attack1', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 7, name: 'Attack2', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 8, name: 'Attack3', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 9, name: 'Attack4', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 10, name: 'Attack5', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 11, name: 'Attack1', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 12, name: 'Attack2', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 13, name: 'Attack3', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 14, name: 'Attack4', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 15, name: 'Attack5', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 11, name: 'Attack1', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 12, name: 'Attack2', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 13, name: 'Attack3', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 14, name: 'Attack4', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                    { id: 15, name: 'Attack5', imgSrc: 'src/assets/images/icons/swordIcon.png',price: 100, selected: false },
                ],
                selectedItems: [],
                nSelectedItems: 0,
            };
        },
        methods: {
            toggleEvent(item) {
                if (this.nSelectedItems >= 3 && !item.selected) {
                    alert('You can only select 3 items');
                } else {
                    item.selected = !item.selected;
                    if (item.selected) {
                        this.selectedItems.push(item);
                    } else {
                        const index = this.selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
                        if (index !== -1) {
                        this.selectedItems.splice(index, 1);
                        }
                    }
                    this.nSelectedItems = this.selectedItems.length;
                }
            }
        },
    }
</script>

<template>
    <div class="attacksContent">
        <h1>Colection</h1>
        <section class="items">
            <ItemAttack v-for="item in items" @click="toggleEvent(item)" :key="item.id" :imageSrc="item.imgSrc" :name="item.name" :isSelected="item.selected" />
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

.sel {
    background-color: #80547f;
}

@media (max-width: 800px) {
    .attacksContent {
        max-height: 60vh;
    }
}
</style>
