<script setup>
    // Librairies
    import { ref} from 'vue';

    // API Requests
    import { createAttackRequest } from '@/services/api/AttacksRequest.js';


    // Valors incials dels inputs
    const xAxis = ref(1);
    const yAxis = ref(1);

    // Funcions per obtenir els valors dels inputs
    const xAxisChanged = () => {
        xAxis.value = document.getElementById("myRangeX").value;
    }
    const yAxisChanged = () => {
        yAxis.value = document.getElementById("myRangeY").value;
    }

    // Funció per crear un nou attack
    async function createAttack() {
        try {
            const token = JSON.parse(localStorage.getItem('player')).token; // Obtenim token del local storage
            const attack = {                // Obtnim attack amb format 
                attack_ID: document.getElementsByClassName("input")[0].value, // Obtenim contingut del primer input
                positions: `(${xAxis.value},${yAxis.value})`, // Posem en format (x,y)
                img: document.getElementsByClassName("input")[1].value, // Obtenim contigut segon sintput
            }
            await createAttackRequest(token,attack);

        } catch (error) {
            alert(error);
        }
    }


</script>

<template>
    <!-- Contenidor popUp -->
    <div class="popup">
        <!-- Contingut del popUp -->
        <div class="popupContent">
            <!-- Capçcaler del popUp -->
            <header class="top">
                <!-- Titol -->
                <h3>CREATE A NEW ATTACK</h3>
                <!-- Botó per tancar el popUP fa emit cap el parent -->
                <button @click="$emit('onClosed')" class="closeButton">x</button>
            </header>
            <!-- Contigut del popUp -->
            <main class="aInputs">
                <!-- Iput per el nom del attack -->
                <input type="text" placeholder="Attack Name" class="input" />
                <!-- Iput per el nom del attack -->
                <input type="text" placeholder="Attack Image (url)" class="input" />
                <!-- Input del slider del attack -->
                <p>Insert the X axis (1-8)</p>
                <div class="slideContainer">
                    <input type="range" min="1" max="8" v-model="xAxis" class="slider" id="myRangeX" @input="xAxisChanged">
                    <p>X axis: {{ xAxis }}</p>
                </div>
                <!-- Input del slider del attack -->
                <p>Insert the Y axis (1-8)</p>
                <div class="slideContainer">
                    <input type="range" min="1" max="8" v-model="yAxis" class="slider" id="myRangeY" @input="yAxisChanged">
                    <p>Y Axis: {{ yAxis }}</p>
                </div>
            </main>
            <!-- Botó per crear el attack -->
            <button @click="createAttack($emit('onCreated'))" class="createButton">CREATE</button>
        </div>
    </div>
</template>

<style scoped>
    /* Estil del popUp */
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

    /* Estil del titol del popUp */
    .top {
        display: grid;
        grid-template-columns: 4fr 1fr;
        width: 100%;
        align-items: center;
        text-align: centert;
        justify-content: center;
        
    }

    /* Estil titol h3 */
    h3 {
        justify-content: center;
        text-align: center;
        color: #362864;
        font-size: 2vmax;
    }

    /* contigut del popUp */
    .popupContent {
        display: flex;
        flex-direction: column;
        margin: 2vh;
        margin-top: 5vh;
        padding: 2vh;
        height: 100%;
        width: 100%;
        background: #EFEFFE;
        border-radius: 1vh;
    }

    /* estil per el botó del close */
    .top button {
        color: white;
        background-color: #362864;
        border: none;
        font-size: 3vh;
        cursor: pointer;
        height: 5vh;
        align-items: center;
        justify-content: center;
    }

    /* Estil per contenidor dels inputs */
    .aInputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        max-height: 70vh;
        overflow-y: auto;
    }

    /* Estil per els inputs */
    input {
        margin-top: 3vh;
        height: 6vh;
        width: 70vh;
        font-size: 3vh;
        box-sizing: border-box;
        color: #362864;
        padding: 2vh;
        border: none;
        margin-bottom: 1vh;
        border-bottom: 0.1vh solid #633FC3;
    }

    input:focus {
        outline: 0.1vh solid #633FC3;
    }

    /* Defineix mida contenidor */
    .slider {
        -webkit-appearance: none;
        appearance: none;
        width: 50vh;
        height: 6vh;
        border-radius: 5vmax;   
        background: #EFEFFE;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
        padding: 2vh;
    }

    /* Defineix la mida i estil de la pilota interna */
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 4vh;
        height: 4vh;
        border-radius: 3vh; 
        background: #362864;
        cursor: pointer;
    }

    /* Contenidor del slider */
    .slideContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* Estil lletra contenidor */
    p {
        text-align: center;
        margin-bottom: 5vh;
        font-size: 3vh;
        color: #362864;

    }

    /* Botó de creació d'attack */
    .createButton {
        height: 12vh;
        width: 100%;
        font-size: 5vh;
        background-color: #362864;
        color: white;
        border: none;
        align-self: center;
    }

    @media (max-width: 900px) {
        /* Estil telefons  */
        p {
            font-size: 1.5vh;
        }

        /* Reduim mida de tot */
        input {
            width: 30vh;
            height: 2vh;
            font-size: 2vh;
            margin-top: 1vh;
        }

        /* Contenidor inputs */
        .aInputs {
            justify-content: center;
        }

        /* Mida pilota de selecció */
        .slider::-webkit-slider-thumb {
            width: 2vh;
            height: 2vh;
        }

        /* Mida contendior slider */
        .slider {
            width: 30vh;
            height: 2vh;
        }
    }


</style>
