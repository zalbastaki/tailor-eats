<template>
    <component :is="type" class="text" :class="[type, $mq]">
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'base-text',

        props: {
            type: {
                type: String,
                required: false,
                default() {
                    return 'p';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .text {
        color: $primary-color;
        margin: 0;
    }

    .h1 {
        font-size: 60px;
        font-weight: bold;
    }

    .h2 {
        font-size: 25px;
    }

    .h3 {
        font-size: 35px;
    }

    .h4 {
        font-size: 25px;
    }

    .p {
        line-height: 1.5;
    }
</style>
