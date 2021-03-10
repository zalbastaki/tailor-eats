<template>
    <div class="contact-us">
        <section class="info-section">
            <base-text type="h1">We'd love to hear from you.</base-text>
            <base-text type="p" class="subtitle">
                Fill up the contact form and our team wil get back to you within
                24 hours.
            </base-text>
            <div class="contact-info">
                <base-text type="p">
                    <fa-icon :icon="['fas', 'envelope']" aria-label="email" />
                    <a href="mailto:hello@tailoreats.com">
                        hello@tailoreats.com
                    </a>
                </base-text>
                <base-text type="p">
                    <fa-icon :icon="['fas', 'phone']" aria-label="phone" />
                    <a href="tel:01904123456">
                        +44 (0) 1904-123456
                    </a>
                </base-text>
            </div>
        </section>

        <section class="form-section">
            <template v-if="!messageSent">
                <div class="input-container">
                    <label for="name">Name</label>
                    <input v-model="name" type="text" name="name" id="name" />
                </div>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div class="input-container">
                    <label for="message">Message</label>
                    <textarea v-model="message" name="message" id="message" />
                </div>
                <base-button
                    type="button"
                    class="submit-btn"
                    @click="sendMessage"
                >
                    Send Message
                </base-button>
            </template>
            <template v-else>
                <base-text type="h3">
                    Thank you for getting in touch!
                </base-text>
                <base-text type="p">
                    We'll get back to you shortly.
                </base-text>
                <base-button type="button" width="350px" @click="resetForm">
                    Send Another Message
                </base-button>
            </template>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'contact-us',

        data() {
            return {
                name: '',
                email: '',
                message: '',
                messageSent: true,
            };
        },

        methods: {
            sendMessage() {
                if (!this.name) {
                    alert('You must provide your name.');
                    return;
                }

                if (!this.email) {
                    alert('You must provide your email so we can reach you.');
                    return;
                }

                if (!this.validateEmail(this.email)) {
                    alert('The email you provided is invalid.');
                    return;
                }

                if (!this.message) {
                    alert('You must provide a message.');
                    return;
                }

                this.messageSent = false;
            },

            resetForm() {
                this.name = '';
                this.email = '';
                this.message = '';
                this.messageSent = false;
            },

            validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        },
    };
</script>

<style lang="scss" scoped>
    .contact-us {
        min-height: calc(100vh - #{$main-nav-height});
        display: flex;
        align-items: center;

        .info-section {
            width: calc(50% - 100px);
            min-width: 500px;
            padding-right: 100px;

            h1 {
                margin-bottom: 50px;
            }

            .subtitle {
                font-size: 30px;
            }

            .contact-info {
                margin-top: 85px;

                a {
                    color: $primary-color;
                    text-decoration: none;
                }

                p {
                    margin-top: 15px;
                    font-size: 25px;
                    font-weight: bold;
                }
            }
        }

        .form-section {
            display: flex;
            flex-direction: column;
            width: 50%;

            .input-container {
                margin-bottom: 30px;

                label {
                    display: block;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                input,
                textarea {
                    width: calc(100% - 24px);
                    border: 2px solid $primary-color;

                    &:focus {
                        border: 3px solid $primary-color;
                        outline: 0;
                    }
                }

                input {
                    height: 35px;
                    padding: 0 10px;
                }

                textarea {
                    height: 250px;
                    padding: 10px;
                    resize: none;
                }
            }

            .button {
                align-self: center;

                &.submit-btn {
                    align-self: flex-end;
                }
            }

            h3 {
                margin-bottom: 15px;
                align-self: center;
            }

            p {
                margin-bottom: 60px;
                align-self: center;
            }
        }
    }
</style>
