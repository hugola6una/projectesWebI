<script setup>
      import router from '../router';
</script>

<template>
    <h2>ARE YOU SURE YOU WANT TO DELETE "USER"?</h2>
    <p>All player-related information will be automaticly delated.</p>
    <div class="options">
        <button>CONFIRM</button>
        <button>CANCEL</button>
    </div>
</template>

<style scoped>

h2, p {
    color: #362864;
}

h2 {
    font-size: 3vmax;
}

p {
    font-size: 1.5vmax;
}

.options {
    margin-top: 4vmax;
}

button {
    margin: 1vmax;
    background-color: #362864;
    color: white;
    height: 4vmax;
    width: 15vmax;
}

button:hover {
    background-color: #80547f;
}

</style>
