<script setup>
import { ref, getCurrentInstance } from 'vue';

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
            <button @click="closePopup">
                <img src="..\assets\images\icons\coinIcon.png" alt="Close" class="iClose">
            </button>
        </div>
    </div>
</template>
    

    
<style scoped>
    .popup {
        position: fixed;
        width: 100%;
        height: 100%;

        margin-bottom: 6vmax;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
    .popupContent {
        display: flex;
        flex-direction: column;
        margin: 2vmax;
        padding: 2vmax;
        height: 100%;
        width: 100%;
        text-align: center;
        justify-content: start;
        background: white;
        border-radius: 5px;
    }

    .popupContent img {
        width: 5vmax;
        height: 5vmax;
    }

    .popupContent button {
        background: #80547f;
        border: none;
        margin: 0;
        padding: 0;
    }
</style> 