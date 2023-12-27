<!-- Compoennt de Input per a formularis -->
<script setup>
    import { defineProps, ref } from 'vue';

    import ErrorSpan from '@/components/ErrorSpan.vue';

  // Props
    // Rebem la informació del tipus d'input, placeholder, modelValue, error i msgError
    defineProps([
        'inputType',
        'inputPlaceholder',
        'modelValue',
        'error',
        'msgError'
    ]);

    // Control de focus del input
    const isFocused = ref(false);
    

    // Event handler per a l'input per actualitzar el modelValue
    const handleInput = (value, emit) => {
        emit('update:modelValue', value);
    };

    // Controla el focus del input
    const handleFocus = () => {
        isFocused.value = true;
    };
</script>

<template>
    <!-- Input amb contigut variable, ja sigui el tipus si esta focus i el seu respectiu place holder -->
    <input :type="inputType" :class="{ error, focused: isFocused }" :placeholder="inputPlaceholder" autocomplete="" @input="handleInput($event.target.value, $emit)" @focus="handleFocus" @blur="isFocused = false"/>
    <!-- Span que es mostre en cas de que hi hagi un error -->
    <ErrorSpan v-if="error" :message="msgError"/>
</template>

<style scoped>
    /* Estil del input */
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

    /* Actualització del estil del input en cas de focus */
    input:focus {
        outline: 0.1em solid #362864;
    }

    /* Color de placeHolder del inut */
    input::placeholder {
        color: #362864;
    }

    /* Estil per a dimensions més petites  */
    @media (max-width: 900px) {
        /* Estil input dimensions més petita */
        input {
            background: transparent;
            color: white;
            border: none;
            border-bottom: 0.1em solid #ffffff;
        }

        /* Estil input focus dimensions més petita */
        input:focus {
        outline: 0.1em solid #ffffff;
        }

        /* Actualitza color focus en dimensions més petites */
        input::placeholder {
        color: #ffffff;
        }
    }
</style>
