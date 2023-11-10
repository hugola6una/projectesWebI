<script setup>
import { ref } from 'vue';
import ItemStore from '../components/ItemStore.vue';

const items = ref([
    { id: 1, name: 'Attack1', price: 100, selected: false },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: false },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    { id: 1, name: 'Attack1', price: 100, selected: false },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: false },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    { id: 1, name: 'Attack1', price: 100, selected: false },
    { id: 2, name: 'Attack2', price: 100, selected: false },
    { id: 3, name: 'Attack3', price: 100, selected: false },
    { id: 4, name: 'Attack4', price: 100, selected: false },
    { id: 5, name: 'Attack5', price: 100, selected: false },
    
]);

const totalPrice = ref(0);

const updateTotal = (item) => {
    if (item.selected) {
        totalPrice.value += item.price;
    } else {
        totalPrice.value -= item.price;
    }
};
</script>

<template>
    <div class="sellContent">
        <h3>TAP TO SELECT</h3>
        <section class="items">
            <ItemStore
                v-for="item in items"
                :key="item.id"
                :initialSelected="item.selected"
                :itemName="item.name"
                :price="item.price"
                @itemSelected="updateTotal"
            />
        </section>
        <div class="sellAction">
            <div class="amount">
                <p>TOTAL: {{ totalPrice }}</p>
                <img src="../assets/images/icons/coinIcon.png" alt="Coin" class="iCoin">
            </div>
            <button>SELL</button>
        </div>
    </div>
</template>

<style scoped>
.sellContent {
    margin: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: white;
}

.sellContent h3 {
    margin: 2vmax;
    font-size: 1vmax;
    color: #362864;
}

.items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto;
    height: 40vh;
    max-height: 40vh;

}

.amount {
    display: flex;
    margin-top: 2vmax;
    height: 3vmax;
    width: 25vmax;
    background-color: #80547f;
    color: white;
    text-align: start;
    align-items: center;
}

.amount p {
    font-size: 1vmax;
}

.amount img {
    margin-left: 0.2vmax;
    width: 2vmax;
}

button {
    color: white;
    background-color: #362864;
    height: 5vmax;
    width: 25vmax;
    font-size: 3vmax;
    border: none;
}

.sellAction {
    margin-top: 2vmax;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vmax;
}

@media (max-width: 800px) {
    .items {
        height: 30vh;
        max-height: 30vh;
    }
 
    .sellAction {
        justify-content: end;
    }
}
</style>
