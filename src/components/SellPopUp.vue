<script setup>
    import SolicitedItem from '../components/SolicitedItem.vue';

    defineProps(['selectedItems', 'onClosed']);

</script>

<template>
    <div class="popup">
        <div class="popupContent">
            <div class="top">
                <h3>ITEMS TO SELL</h3>
                <button @click="onClosed" class="closeButton">x</button>
            </div>
            <ul>
                <li v-for="item in selectedItems" :key="item.id">
                    <SolicitedItem :item="item" @quantityChanged="handleQuantityChanged" />
                </li>
            </ul>
            <button @click="onClosed" class="buyButton">SELL</button>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #362864;
}

.top {
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 100%;
    align-items: center;
    text-align: centert;
    justify-content: center;
}

.top h3 {
    justify-content: center;
    text-align: center;
}

.popupContent {
    display: flex;
    flex-direction: column;
    margin: 2vmax;
    margin-top: 5vmax;
    padding: 2vmax;
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: start;
    background: #EFEFFE;
    border-radius: 5px;
}

.popupContent img {
    width: 5vmax;
    height: 5vmax;
}

.top button {
    color: white;
    background-color: #362864;
    border: none;
    font-size: 2vmax;
    cursor: pointer;
    height: 3vmax;
    align-items: center;
    justify-content: center;
}

.popupContent h3 {
    color: #362864;
    font-size: 2vmax;
}

ul {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.buyButton {
    background-color: #362864;
    color: white;
    font-size: 3vmax;
    height: 10vmax;
    width: 100%;
    margin-top: 4vmax;
    margin-bottom: 5vmax;
}

</style>
