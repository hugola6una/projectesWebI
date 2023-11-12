<script setup>
import { ref } from 'vue';
import ItemStore from '../components/ItemStore.vue';
import SelectedItemsPopup from '../components/BuyPopUp.vue';

const items = ref([
    { id: 1, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0 },
    { id: 2, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 3, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 4, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 5, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 6, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 7, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 8, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 9, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png' , quantity: 0 },
    { id: 10, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 11, name: 'Attack1', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 12, name: 'Attack2', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 13, name: 'Attack3', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 14, name: 'Attack4', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
    { id: 15, name: 'Attack5', price: 100, selected: false, image: '/src/assets/images/icons/swordIcon.png', quantity: 0  },
]);

const totalPrice = ref(0);
const selectedItems = ref([]);
const showPopup = ref(false);

const updateTotal = (item) => {
    const isSelected = item.selected;

    if (isSelected) {
        totalPrice.value += item.price;
        selectedItems.value.push(item);
    } else {
        totalPrice.value -= item.price;
        const index = selectedItems.value.findIndex(selectedItem => selectedItem.id === item.id);
        if (index !== -1) {
            selectedItems.value.splice(index, 1);
        }
    }
};

const buyButtonClick = () => {
    showPopup.value = true;
};

const closePopup = () => {
    showPopup.value = false;
};
</script>

<template>
    <div class="buyContent">
        <h3>TAP TO SELECT</h3>
        <section class="items">
            <ItemStore
                v-for="item in items"
                :key="item.id"
                :initialSelected="item.selected"
                :itemName="item.name"
                :itemPrice="item.price"
                :itemImage="item.image"
                @itemSelected="updateTotal"
            />
        </section>
        <div class="buyAction">
            <div class="amount">
                <p>TOTAL: {{ totalPrice }}</p>
                <img src="../assets/images/icons/coinIcon.png" alt="Coin" class="iCoin">
            </div>
            <button @click="buyButtonClick">BUY</button>
        </div>
        <SelectedItemsPopup
            v-if="showPopup"
            :selectedItems="selectedItems"
            @closed="closePopup"
        />
    </div>
</template>

<style scoped>
.buyContent {
    margin: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: white;
}

.buyContent h3 {
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

.buyAction {
    margin-top: 2vmax;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vmax;
}

@media (max-width: 900px) {
    .items {
        height: 30vh;
        max-height: 30vh;
    }
    .buyAction {
        justify-content: end;
    }
}
</style>
