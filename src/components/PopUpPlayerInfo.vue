<script setup>
import { ref, getCurrentInstance } from 'vue';
import PlayerContent from '../components/PlayerInfoContent.vue';


const isVisible = ref(true);
const { emit } = getCurrentInstance();

const closePopup = () => {
    isVisible.value = false;
    emit('closed');
};
</script>

<template>
    <div v-if="isVisible" class="popup">
        <div class="popupContent">
            <div class="top">
                <h3>PLAYER INFORMATION</h3>
                <button @click="closePopup">x</button>
            </div>
            <PlayerContent />
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
    color: white;
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
    background: #362864;
    border-radius: 5px;
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
    font-size: 2vmax;
}

h1 {
    color: #362864;
    font-size: 3vmax;

}



@media (max-width: 800px) {
    .popup {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>