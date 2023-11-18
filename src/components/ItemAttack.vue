<script>
    export default {
        props: {
            imageSrc: String,
            name: String,
            isSelected: Boolean,
        },
    }

</script>

<template>
    <article :class="{ 'item': true, sel: isSelected }" @click="handleClick">
        <img :src="imageSrc" alt="" />
        <p>{{ name }}</p>
    </article>
</template>


<style scoped>
    .item {
        display: flex;
        flex-direction: column;
        width: 8vmax;
        height: 6vmax;
        border: none;
        padding: 1vmax;
        margin: 1vmax;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .item:hover {
        cursor: pointer;
    }

    .item img {
        margin-top: 1.5vmax;
        width: 4vmax;
    }
    .item p {
        font-size: 1.2vmax;
    }

    .sel {
        background-color: #80547f;
    }
</style>
