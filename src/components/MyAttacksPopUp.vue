<script setup>
    import { ref, defineProps} from 'vue';

    const { onClosed } = defineProps(['onClosed']);
    const xAxis = ref(1);
    const yAxis = ref(1);

    const xAxisChanged = () => {
        xAxis.value = document.getElementById("myRangeX").value;
    }

    const yAxisChanged = () => {
        yAxis.value = document.getElementById("myRangeY").value;
    }

</script>

<template>
    <div class="popup">
        <div class="popupContent">
            <div class="top">
                <h3>CREATE A NEW ATTACK</h3>
                <button @click="onClosed" class="closeButton">x</button>
            </div>
            <div class="aInputs">
                <input type="text" placeholder="Attack Name" class="input" />
                <p>Insert the X axis</p>
                <div class="slideContainer">
                    <input type="range" min="1" max="8" v-model="xAxis" class="slider" id="myRangeX" @input="xAxisChanged">
                    <p> {{ xAxis }}</p>
                </div>
                <p>Insert the Y axis</p>
                <div class="slideContainer">
                    <input type="range" min="1" max="8" v-model="yAxis" class="slider" id="myRangeY" @input="yAxisChanged">
                    <p> {{ yAxis }}</p>
                </div>
            </div>
            <button class="createButton">CREATE</button>
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

.aInputs {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vmax;
}

input {
    box-sizing: border-box;
    color: #362864;
    width: 25vmax;
    height: 5vmax;
    font-size: 2vmax;
    border: none;
    padding: 1vmax;
    margin-bottom: 2vmax;
    text-align: center;
    resize: none;
}

.slideContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.slideContainer p {
    margin-left: 5vmax;
    margin-bottom: 3vmax;

}

.createButton {
    margin-bottom: 5vmax;
    height: 8vmax;
    width: 100%;
    font-size: 3vmax;
    background-color: #362864;
    color: white;
    border: none;
    align-self: center;

}

p {
    font-size: 2vmax;
    color: #362864;
}

</style>
