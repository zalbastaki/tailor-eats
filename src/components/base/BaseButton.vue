<template>
    <component
        :is="type"
        :type="buttonType"
        :to="to"
        :href="href"
        :target="target"
        :rel="rel"
        :disabled="disabled"
        class="button"
        :class="[design, disabled ? 'disabled' : '']"
        :style="{
            width,
            height,
        }"
        @click="$emit('click')"
    >
        <slot />
    </component>
</template>

<script>
    export default {
        name: 'base-button',

        props: {
            type: {
                type: String,
                required: true,
            },

            buttonType: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            to: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            href: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            rel: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            target: {
                type: String,
                required: false,
                default() {
                    return null;
                },
            },

            disabled: {
                type: Boolean,
                required: false,
                default() {
                    return false;
                },
            },

            design: {
                type: String,
                required: false,
                default() {
                    return 'primary';
                },
            },

            width: {
                type: String,
                required: false,
                default() {
                    return '228px';
                },
            },

            height: {
                type: String,
                required: false,
                default() {
                    return '57px';
                },
            },
        },
    };
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20;
        text-transform: uppercase;
        color: $primary-background;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        border: 0;
        text-decoration: none;
        cursor: pointer;

        &.primary {
            background: $primary-color;

            &:hover {
                background: darken($primary-color, 5%);
            }

            &:focus {
                outline: 3px solid rgba($primary-color, 0.3);
            }

            &.disabled {
                background: rgba($primary-color, 0.3);
            }
        }

        &.secondary {
            background: $primary-background;
            color: $primary-color;

            &:hover {
                background: darken($primary-background, 5%);
            }

            &:focus {
                outline: 3px solid rgba($primary-background, 0.7);
            }

            &.disabled {
                background: rgba($primary-background, 0.7);
            }
        }

        &.disabled {
            pointer-events: none;
        }
    }
</style>
