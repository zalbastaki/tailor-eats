<template>
    <section class="text-img-section" :class="order === 1 ? 'reverse' : ''">
        <div class="text-section">
            <base-text v-if="title" type="h2">
                {{ title }}
            </base-text>
            <base-text v-if="description" type="p">
                {{ description }}
            </base-text>
            <slot name="text" />
            <div v-if="callToAction" class="call-to-action">
                <base-button
                    type="router-link"
                    :to="callToAction.route"
                    design="primary"
                >
                    {{ callToAction.label }}
                </base-button>
            </div>
        </div>
        <slot name="img" />
    </section>
</template>

<script>
    export default {
        name: 'text-img-section',

        props: {
            order: {
                type: Number,
                required: false,
                default() {
                    return 0;
                },
            },

            title: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            description: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            callToAction: {
                type: Object,
                required: false,
                default() {
                    return null;
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .text-img-section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text-section {
            padding-right: 50px;
            min-width: 500px;

            p {
                margin-top: 20px;
            }

            .call-to-action {
                margin-top: 40px;

                .button {
                    width: auto !important;
                    height: auto !important;
                    background: none;
                    display: block;
                    box-shadow: none;
                    color: $primary-color;
                    text-decoration: underline;
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }

        .img {
            max-width: calc(#{$site-width} / 2);
        }

        &.reverse {
            flex-direction: row-reverse;

            .text-section {
                padding-right: 0;
                padding-left: 50px;
            }
        }
    }
</style>
