<script setup>

    // Components 
    import SolicitedItem from '@/components/SolicitedItem.vue';

    const {selectedAttacks} = defineProps(['selectedAttacks']);


</script>

<template>
    <!-- Contenidor popUP -->
    <div class="popup">
        <!-- Contingut popUp -->
        <div class="popupContent">
            <header class="top">
                <h3>ITEMS TO BUY</h3>
                <button @click="$emit('closePopUp')" class="closeButton">x</button>
            </header>
            <ul>
                <li v-for="item in selectedAttacks" :key="item.id">
                    <SolicitedItem :item="item" />
                </li>
            </ul>
            <button @click="$emit('buyItems')" class="buyButton">BUY</button>
        </div>
    </div>
</template>

<style scoped>
    /* Estil popUp */
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

    /*  Header del popUP*/
    .top {
        display: grid;
        grid-template-columns: 4fr 1fr;
        width: 100%;
        align-items: center;
        text-align: centert;
        justify-content: center;
    }

    /* Estil titol popUp */
    .top h3 {
        justify-content: center;
        text-align: center;
        color: #362864;
        font-size: 4vh;
    }

    /* Estil contigut popUp */
    .popupContent {
        display: flex;
        flex-direction: column;
        margin: 2vh;
        margin-top: 5vh;
        padding: 3vh;
        height: 100%;
        width: 100%;
        text-align: center;
        background: #EFEFFE;
    }

    /* Estil botó close */
    .top button {
        color: white;
        background-color: #362864;
        border: none;
        font-size: 4vh;
        cursor: pointer;
        height: 5vh;
        align-items: center;
        justify-content: center;
    }

    /* Estil de l allista */
    ul {
        list-style-type: none; /* Treiem els bullets* */
        margin: 0;
        padding: 0;
        height: 70vh;
        max-height: 70vh;
        overflow-y: auto; 
        overflow-x: hidden;
    }

    /* estil boto compra */
    .buyButton {
        border: none;
        background-color: #362864;
        color: white;
        font-size: 6vh;
        height: 15vh;
        width: 100%;
    }

</style>
