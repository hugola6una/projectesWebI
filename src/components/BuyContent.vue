<script setup>
    // Librairies
    import { ref, defineAsyncComponent, onMounted} from 'vue';

    // API Requests
    import { getBuyableAttacks, buyAttack} from '@/services/api/AttacksRequest.js'

    // Components
    import ItemStore from '@/components/ItemStore.vue';

    // No carreguem el popUp al deixem en segon pla
    const BuyPopUp = defineAsyncComponent(() => import('@/components/BuyPopUp.vue'));

    onMounted(() => {
        getAttacks()
    })

    // Variables
    const attacks = ref([]);
    const selectedAttacks = ref([]);
    const totalPrice = ref(0);
    const showPopup = ref(false);

    // Funcions
    function togglePopup() {
        showPopup.value = !showPopup.value;
    }

    const increaseTotal = (item) => {
        totalPrice.value += item.price;
    };

    const decreaseTotal = (item) => {
        totalPrice.value -= item.price;
    };

    async function getAttacks() {
        const token = JSON.parse(localStorage.getItem('player')).token
        try {
            attacks.value = await getBuyableAttacks(token);
        } catch (error) {
            console.log(error);
        }
    }

    async function buyAttacks() {
        try {
            showPopup.value = false;
            const token = JSON.parse(localStorage.getItem('player')).token
            for (let i = 0; i < selectedAttacks.value.length; i++) {
                const id = selectedAttacks.value[i].attack_ID;
                await buyAttack(token, id);
            }
        } catch (error) {
            alert(error);
        } finally {
            selectedAttacks.value = [];
        }
        
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
            decreaseTotal(attack);
        } else {
            selectedAttacks.value.push(attack);
            increaseTotal(attack);
        }
    }

</script>

<template>
    <section v-if="!showPopup" class="buyContent">
        <p>TAP TO SELECT</p>
        <section class="items">
            <ItemStore v-for="attack in attacks" :key="attack.attack_ID" :attack="attack" :isSelected="checkSelected(attack)" @toggleSelection="toggleSelecion(attack)"></ItemStore>
        </section>
        <article class="buyAction">
            <div class="amount">
                <p>TOTAL: {{ totalPrice }}</p>
                <img src="@/assets/images/icons/coinIcon.png" alt="Coin" class="iCoin">
            </div>
            <button @click="togglePopup()" :disabled="selectedAttacks.length === 0">BUY</button>
        </article>
        
    </section>
    <BuyPopUp v-if="showPopup" :selectedAttacks="selectedAttacks" @closePopUp="togglePopup()" @buyItems="buyAttacks()"/>
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
