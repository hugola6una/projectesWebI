<script setup>
    import { defineProps, ref } from 'vue';

  // Props
    defineProps([
        'inputType',
        'inputPlaceholder',
        'modelValue',
        'error',
        'msgError'
    ]);

    // Estado para el manejo del foco
    const isFocused = ref(false);
    

    // Evento de actualización
    const handleInput = (value, emit) => {
        emit('update:modelValue', value);
    };

    // Manejador de evento focus
    const handleFocus = () => {
        isFocused.value = true;
    };
</script>

<template>
    <input :type="inputType" :class="{ error, focused: isFocused }" :placeholder="inputPlaceholder" autocomplete="" @input="handleInput($event.target.value, $emit)" @focus="handleFocus" @blur="isFocused = false"/>
    <span v-if="error" class="error"> {{ msgError }}</span>
</template>

<style scoped>
    input {
        display: flex;
        margin-top: 1vmax;
        height: 4vmax;
        width: 35vmax;
        font-size: 2vmax;
        box-sizing: border-box;
        color: #362864;
        padding: 1vmax;
        border: none;
        border-bottom: 0.1em solid #362864;
    }

    input:focus {
        outline: 0.1em solid #362864;
    }

    input::placeholder {
        color: #362864;
    }

    span {
        color: #ff0000;
        margin-top: 1vh;
        font-size: 1vh;
        text-decoration: none;
    }

    .error {
        border-bottom: 0.1em solid #ff0000;
    }

    .focused {
        border-bottom: 0.1em solid #362864; /* Cambia el color cuando el input está enfocado */
    }

    @media (max-width: 900px) {
        input {
        background: transparent;
        color: white;
        border: none;
        border-bottom: 0.1em solid #ffffff;
        }

        input:focus {
        outline: 0.1em solid #ffffff;
        }

        input::placeholder {
        color: #ffffff;
        }
    }
</style>
