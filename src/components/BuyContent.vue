<script setup>
    // Librairies
    import { ref, defineAsyncComponent, onMounted} from 'vue';

    // API Requests
    import { getBuyableAttacks } from '@/services/api/AttacksRequest.js'

    // Components
    import ItemStore from '@/components/ItemStore.vue';

    // No carreguem el popUp al deixem en segon pla
    const SelectedItemsPopup = defineAsyncComponent(() => import('@/components/BuyPopUp.vue'));

    onMounted(() => {
        getAttacks()
    })

    async function getAttacks() {
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            attacks.value = await getBuyableAttacks(token);
        } catch (error) {
            console.log(error);
        }
    }

    // Variables
    const attacks = ref([]);
    const totalPrice = ref(0);
    const selectedItems = ref([]);
    const showPopup = ref(false);

    // Funcions
    function togglePopup() {
        showPopup.value = !showPopup.value;
    }

</script>

<template>
    <section v-if="!showPopup" class="buyContent">
        <p>TAP TO SELECT</p>
        <section class="items">
            <ItemStore v-for="attack in attacks" :key="attack.attack_ID" :attack="attack"></ItemStore>
        </section>
        <article class="buyAction">
            <div class="amount">
                <p>TOTAL: {{ totalPrice }}</p>
                <img src="@/assets/images/icons/coinIcon.png" alt="Coin" class="iCoin">
            </div>
            <button @click="togglePopup()">BUY</button>
        </article>
        
    </section>
    <SelectedItemsPopup v-if="showPopup" :selectedItems="selectedItems" @closed="togglePopup"/>
</template>

<style scoped>
    .buyContent {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 6fr 2fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: white;
    }

    .buyContent p {
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
        max-height: 43vh;

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
        color: white;
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
        align-items: center;
        display: flex;
        flex-direction: column;
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
