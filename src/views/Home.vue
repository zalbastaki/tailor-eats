<template>
    <div class="home">
        <section class="header-section">
            <div class="header">
                <div class="text-section">
                    <base-text type="h1">
                        Nutrition tailored to you.
                    </base-text>
                    <base-text type="p">
                        Hassle free meals tailored to your unique nutritional
                        needs.
                    </base-text>
                    <div class="call-to-action">
                        <base-button
                            type="router-link"
                            to="/technology"
                            design="primary"
                        >
                            How It Works
                        </base-button>
                        <base-button
                            type="router-link"
                            to="/pricing"
                            design="secondary"
                        >
                            Get Started
                        </base-button>
                    </div>
                </div>
                <img
                    src="@/assets/images/home/header-img.png"
                    alt="illustration"
                    class="img"
                />
            </div>
            <div class="scroll-arrow">
                <fa-icon
                    :icon="['fas', 'chevron-down']"
                    aria-label="arrow-down"
                    class="arrow"
                    @click="scrollDown"
                />
            </div>
        </section>

        <section class="steps-section" id="home-scroll-to">
            <base-text type="h2">
                As easy as 1, 2, 3...
            </base-text>
            <div class="steps">
                <div v-for="(step, index) in steps" :key="index" class="step">
                    <img
                        v-if="index === 0"
                        src="@/assets/images/home/step1-img.png"
                        alt="illustration"
                        class="img"
                    />
                    <img
                        v-if="index === 1"
                        src="@/assets/images/home/step2-img.png"
                        alt="illustration"
                        class="img"
                    />
                    <img
                        v-if="index === 2"
                        src="@/assets/images/home/step3-img.png"
                        alt="illustration"
                        class="img"
                    />
                    <base-text type="h3">
                        {{ step.title }}
                    </base-text>
                    <base-text type="p">
                        {{ step.description }}
                    </base-text>
                </div>
            </div>
        </section>

        <text-img-section
            v-for="(section, index) in textImgSections"
            :key="index"
            :order="section.order"
            :title="section.title"
            :description="section.description"
            :call-to-action="section.callToAction"
        >
            <template v-slot:img>
                <img
                    v-if="index === 0"
                    src="@/assets/images/chip-img.jpeg"
                    alt="illustration"
                    class="img"
                />
                <img
                    v-if="index === 1"
                    src="@/assets/images/home/know-yourself-img.png"
                    alt="illustration"
                    class="img"
                />
                <img
                    v-if="index === 2"
                    src="@/assets/images/home/feel-good-img.png"
                    alt="illustration"
                    class="img"
                />
            </template>
        </text-img-section>

        <section class="email-section">
            <template v-if="!emailSubmitted">
                <base-text type="h2">Get 20% off!</base-text>
                <base-text type="p">
                    Sign up to our monthly newsletter.
                </base-text>
                <div class="email-input">
                    <input
                        v-model="email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="youremail@gmail.com"
                    />
                    <base-button
                        type="button"
                        height="39px"
                        width="150px"
                        @click="submitEmail"
                    >
                        Submit
                    </base-button>
                </div>
            </template>
            <template v-else>
                <base-text type="h3">
                    Thank you for signing up to our newsletter!
                </base-text>
                <base-text type="p">
                    Check your email for a 20% discount code.
                </base-text>
            </template>
        </section>
    </div>
</template>

<script>
    import TextImgSection from '../components/TextImgSection';

    export default {
        name: 'home',

        components: {
            TextImgSection,
        },

        data() {
            return {
                steps: [
                    {
                        title: 'Pick your plan',
                        description:
                            'Choose from a selection of subscription plans to match every budget.',
                    },
                    {
                        title: 'Insert the chip',
                        description:
                            'Follow the instructions in your dashboard to insert the chip and start minitoring your nutritional needs.',
                    },
                    {
                        title: 'Choose your meals',
                        description:
                            "Every night we'll curate meals for your specific nutritional needs, just choose your favorites!",
                    },
                ],

                textImgSections: [
                    {
                        order: 1,
                        title: 'The future is personal.',
                        description:
                            "Our one of a kind in vivo chip tracks your unique nutritional needs in real-time, for a truly personalized meal delivery service. The chip is embedded in your arm to track your unique blood composition. Our award-winning algorithims determine the optimal nutrition for your body. All you have to do is pick your favorite meals, we'll take care of the rest!",
                        callToAction: {
                            label: 'Our Technology',
                            route: '/technology',
                        },
                    },
                    {
                        order: 0,
                        title: 'You should know yourself.',
                        description:
                            "We track a number of vitamins, mineral, and hormones to create a tailored nutritional plan that will help you achieve all your important goals, and will ensure you feel your best doing it. You'll be able to view all the real-time data your chip collects in your dashboard, along with our expert advice and nutritional knowledge.",
                        callToAction: {
                            label: 'Get Started',
                            route: '/pricing',
                        },
                    },
                    {
                        order: 1,
                        title: 'Let us help you feel your best.',
                        description:
                            "Nutrition plays a vital role in all of our bodily functions, and every body is unique. We help you learn your unique body and feed it right with a few clicks. We'll do all the hardwork so you can get better sleep, more energy, vibrant hair and skin, a longer life expectancy, and tasty meals!",
                        callToAction: {
                            label: "Let's Talk",
                            route: '/contact-us',
                        },
                    },
                ],
                emailSubmitted: false,
                email: '',
            };
        },

        methods: {
            scrollDown() {
                const el = document.getElementById('home-scroll-to');
                el.scrollIntoView();
            },

            submitEmail() {
                if (!this.email || !this.validateEmail(this.email)) {
                    alert('Invalid email.');
                    return;
                }

                this.emailSubmitted = true;
            },

            validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        },
    };
</script>

<style lang="scss" scoped>
    .home {
        .header-section {
            min-height: calc(100vh - #{$main-nav-height});
            display: flex;
            flex-direction: column;

            .header {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .text-section {
                    padding-right: 50px;

                    p {
                        font-size: 30px;
                        margin-top: 20px;
                    }

                    .call-to-action {
                        display: flex;
                        margin-top: 40px;

                        .button {
                            margin-right: 20px;
                        }
                    }
                }

                .img {
                    max-width: calc(#{$site-width} / 2);
                }
            }

            .scroll-arrow {
                text-align: center;
                font-size: 30px;
                padding: 0 0 75px;

                .arrow {
                    cursor: pointer;

                    &:hover {
                        transform: translateY(5px);
                    }
                }
            }
        }

        .steps-section {
            padding: $section-padding 0;
            text-align: center;

            .steps {
                display: flex;
                padding: 30px 0;

                .step {
                    width: 33%;
                    padding: 0 30px;

                    .img {
                        max-width: 100%;
                    }

                    p {
                        margin-top: 20px;
                    }
                }
            }
        }

        .email-section {
            padding: $section-padding 0;
            text-align: center;

            h2 {
                text-transform: uppercase;
            }

            h3 {
                margin-bottom: 10px;
            }

            .email-input {
                margin-top: 30px;
                display: flex;
                justify-content: center;

                input {
                    padding: 0 10px;
                    border: 2px solid $primary-color;
                    height: 35px;
                    width: 400px;
                }
            }
        }
    }
</style>
