<script>
    export default {
        props: {
            imageSrc: String,
            strAlt: String,
            route: String,
        },
        computed: {
            isSelected() {
                return this.$route.path === this.route
            }
        }
    }  
</script>

<template>
    <div :class="{'option': true, 'selected': isSelected}">
        <img :src="imageSrc" alt="" class="icon">
        <span :class="{'option': true, 'selected': isSelected}">{{ strAlt }}</span>
    </div>
</template>

<style scoped>
    .option {
        height: 5vmax;
        display: grid;
        grid-template-columns: 1fr 4fr;
        justify-content: center;
        align-items: center;

    }

    .option.selected { 
        box-sizing: border-box;
        background-color: #80547f;
        color: white;
    }

    .option:hover {
        background: #80547f;
        cursor: pointer;
    }

    .option:hover span{
        color: white;
    }

    .icon {
        width: 4vmax;
        margin-right: 1vmax;
        margin-left: 1vmax;
        align-items: center;
        justify-content: center;
    }

    span {
        text-align: center;
        color: #362864;
        font-size: 1.5vmax;
        white-space: nowrap;
    }

    @media (max-width: 900px) {
        .option {
            display: flex;
            flex-direction: column;
            height: 100%;
            grid-template-columns: 1fr;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .icon {
            display: flex;
            width: 4vmax;
        }

        .option span {
            display: none;
        }
    }
</style>