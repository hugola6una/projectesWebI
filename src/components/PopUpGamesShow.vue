<script setup>
import { ref, getCurrentInstance } from 'vue';
import PlayerHistoric from '../components/PlayerHistoric.vue';
import PlayedHistoric from './PlayedHistoric.vue';

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
                <h3>MATCH MARC VS PERE DD/ MM/YYYY</h3>
                <button @click="closePopup">x</button>
            </div>
            <div class="players">
                <PlayerHistoric class="player1"/>
                <PlayerHistoric class="palyer2"/>
            </div>
            <div class="playeds">
                <PlayedHistoric class="right"/>
                <PlayedHistoric class="left"/>
                <PlayedHistoric class="left"/>
                <PlayedHistoric class="left"/>
                <PlayedHistoric class="right"/>
                <PlayedHistoric class="left"/>
                <PlayedHistoric class="right"/>
                <PlayedHistoric class="left"/>
                <PlayedHistoric class="right"/>
                
                <h1>END</h1>
            </div>
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

.players {
    display: grid;
    grid-template-columns: 1fr 1fr;

}

.playeds {
    background-color: whitesmoke;
    margin-top: 3vmax;
    display: flex;
    flex-direction: column;
    max-height: auto;
    overflow-y: auto;

}

.right {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-self: flex-end;
}

.left {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-self: flex-start;
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

    .playeds {
        max-height: 60vh;
    }
}
</style>