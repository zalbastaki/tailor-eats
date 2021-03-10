<template>
    <div class="technology">
        <base-text type="h2">How It Works</base-text>

        <text-img-section>
            <template v-slot:img>
                <img src="@/assets/images/chip-img.jpeg" alt="chip-diagram" />
            </template>
            <template v-slot:text>
                <div v-for="(step, index) in steps" :key="index" class="step">
                    <base-text type="h3">
                        {{ step.title }}
                    </base-text>
                    <base-text type="p">
                        {{ step.description }}
                    </base-text>
                </div>
            </template>
        </text-img-section>

        <section class="questions-section">
            <base-text type="h3">Got Questions?</base-text>
            <base-button type="router-link" to="/contact-us" design="primary">
                Let's Talk!
            </base-button>
        </section>
    </div>
</template>

<script>
    import TextImgSection from '../components/TextImgSection';

    export default {
        name: 'technology',

        components: {
            TextImgSection,
        },

        data() {
            return {
                steps: [
                    {
                        title: 'Step 1',
                        description:
                            'The chip is embedded in the vascular tissue of the cephalic vein (a large vein that travels through the upper arm).',
                    },
                    {
                        title: 'Step 2',
                        description:
                            'As blood passes through the vein, the blood chemistry analyser detects the biochemistry makeup of the blood and send the data to the EEPROM unit on the micro-controller.',
                    },
                    {
                        title: 'Step 3',
                        description:
                            "NFC readers (ex. your smartphone) can then read the data (given the correct security permissions) any time they are in close proximity to the chip to know the components of the user's blood in real-time.",
                    },
                    {
                        title: 'Step 4',
                        description:
                            'Our app runs the data collected through our award-winning algorithms to determine your nutritional needs and curate a unique meal plan tailored to your unique body.',
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped>
    .technology {
        padding: $section-padding 0;

        h2 {
            text-align: center;
            margin-bottom: 50px;
        }

        img {
            max-width: 700px;
            width: 100%;
        }

        .step {
            margin-bottom: 30px;

            p {
                margin-top: 10px;
            }
        }

        .questions-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: $section-padding;

            .button {
                margin-top: 30px;
            }
        }
    }
</style>
