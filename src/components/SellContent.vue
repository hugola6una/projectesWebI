<script setup>
    import { ref, defineAsyncComponent, onMounted } from 'vue';
    import ItemStore from '@/components/ItemStore.vue';
    import { getOwnAttacks, sellAttack } from '@/services/api/AttacksRequest.js'

    const SellPopUp = defineAsyncComponent(() => import('@/components/SellPopUp.vue'));

    onMounted(() => {
        getAttacks()
    })

    // Funcions
    async function getAttacks() {
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            attacks.value = await getOwnAttacks(token);
            attacks.value = attacks.value.filter(attack => !attack.on_sale);
        } catch (error) {
            console.log(error);
        }
    }

    async function sellAttacks(sellData) {
        try {
            const token = JSON.parse(localStorage.getItem('player')).token
            for (let i = 0; i < sellData.length; i++) {
                await sellAttack(token, sellData[i].attack.attack_ID, sellData[i].price);
            }
        } catch (error) {
            alert(error);
        } finally {
            selectedAttacks.value = [];
        }
    }

    function togglePopup() {
        showPopup.value = !showPopup.value;
    }

    function checkSelected(attack) {
        if (selectedAttacks.value.includes(attack)) {
            return true;
        } else {
            return false;
        }
    }

    function toggleSelecion(attack) {
        if (selectedAttacks.value.includes(attack)) {
            selectedAttacks.value.splice(selectedAttacks.value.indexOf(attack), 1);
        } else {
            selectedAttacks.value.push(attack);
        }
    }

    // Variables
    const attacks = ref([]);
    const totalPrice = ref(0);
    const selectedAttacks = ref([]);
    const showPopup = ref(false);
    
</script>

<template>
    <section v-if="!showPopup" class="sellContent">
        <p>TAP TO SELECT</p>
        <section class="items">
            <ItemStore v-for="attack in attacks" :key="attack.attack_ID" :attack="attack" :isSelected="checkSelected(attack)" @toggleSelection="toggleSelecion(attack)"></ItemStore>
        </section>
        <article class="sellAction">
            <div class="amount">
                <p>TOTAL: {{ totalPrice }}</p>
                <img src="@/assets/images/icons/coinIcon.png" alt="Coin" class="iCoin">
            </div>
            <button @click="togglePopup()">SELL</button>
        </article>
        
    </section>
    <SellPopUp v-if="showPopup" :selectedAttacks="selectedAttacks" @closed="togglePopup" @sellItems="sellAttacks"/>
</template>

<style scoped>
.sellContent {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 1fr 6fr 2fr;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: white;
        max-height: 70vh;
    }

    .sellContent p {
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

    .sellAction {
        align-items: center;
        display: flex;
        flex-direction: column;
    }

@media (max-width: 900px) {
    .items {
        height: 30vh;
        max-height: 30vh;
    }
    .sellAction {
        justify-content: end;
    }
}
</style>
