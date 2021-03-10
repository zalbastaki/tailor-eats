<template>
    <div class="pricing">
        <section class="header-section">
            <base-text type="h2">Pricing</base-text>
            <base-text type="p">
                We believe that everyone should have access to good nutrition.
                Choose the plan that works best for your lifestyle and budget.
            </base-text>
        </section>

        <section class="plans-section">
            <div class="plan-container">
                <div class="plan">
                    <div class="head">
                        <base-text type="h3">The Skeptic</base-text>
                        <base-text type="h4">
                            £19.95 <span class="smaller">/ per day</span>
                        </base-text>
                    </div>
                    <div class="details">
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Breakfast
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Lunch
                        </base-text>
                    </div>
                    <base-text type="p" class="addition">
                        + £100 for the chip
                    </base-text>
                    <base-button
                        type="router-link"
                        to="/pricing"
                        design="primary"
                    >
                        Choose Plan
                    </base-button>
                </div>
            </div>
            <div class="plan-container center">
                <div class="tag">Popular</div>
                <div class="plan">
                    <div class="head">
                        <base-text type="h3">The Hustler</base-text>
                        <base-text type="h4">
                            £29.95 <span class="smaller">/ per day</span>
                        </base-text>
                    </div>
                    <div class="details">
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Breakfast
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Lunch
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Dinner
                        </base-text>
                    </div>
                    <base-text type="p" class="addition">
                        + £100 for the chip
                    </base-text>
                    <base-button
                        type="router-link"
                        to="/pricing"
                        design="primary"
                    >
                        Choose Plan
                    </base-button>
                </div>
            </div>
            <div class="plan-container">
                <div class="plan">
                    <div class="head">
                        <base-text type="h3">The Hungry</base-text>
                        <base-text type="h4">
                            £39.95 <span class="smaller">/ per day</span>
                        </base-text>
                    </div>
                    <div class="details">
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Breakfast
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Lunch
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            Dinner
                        </base-text>
                        <base-text type="p">
                            <fa-icon
                                :icon="['fas', 'check']"
                                aria-label="check"
                            />
                            2 Snacks
                        </base-text>
                    </div>
                    <base-text type="p" class="addition">
                        + £100 for the chip
                    </base-text>
                    <base-button
                        type="router-link"
                        to="/pricing"
                        design="primary"
                    >
                        Choose Plan
                    </base-button>
                </div>
            </div>
        </section>

        <section class="questions-section">
            <base-text type="h3">Got Questions?</base-text>
            <base-button type="router-link" to="/contact-us" design="primary">
                Let's Talk!
            </base-button>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'prcing',
    };
</script>

<style lang="scss" scoped>
    .pricing {
        padding: $section-padding 0;

        .header-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            p {
                max-width: 700px;
                margin-top: 20px;
            }
        }

        .plans-section {
            padding-top: $section-padding;
            display: flex;
            justify-content: center;

            .plan-container {
                min-width: calc(30% - 40px);
                display: flex;
                align-items: center;

                .plan {
                    width: 100%;
                    padding: 50px 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

                    .head {
                        padding-bottom: 30px;
                        border-bottom: 2px solid $primary-color;

                        h3 {
                            text-transform: uppercase;
                            margin-bottom: 10px;
                        }

                        h4 {
                            font-weight: bold;
                        }

                        .smaller {
                            font-size: 15px;
                        }
                    }

                    .details {
                        padding: 30px 0 30px;

                        p {
                            margin-bottom: 10px;
                        }
                    }

                    .addition {
                        font-size: 15px;
                        font-style: italic;
                    }

                    .button {
                        margin-top: 30px;
                    }
                }

                &.center {
                    min-width: calc(40% - 40px);
                    position: relative;

                    .tag {
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        background: $primary-color;
                        color: $primary-background;
                        padding: 5px 15px;
                        font-size: 15px;
                        border-radius: 20px;
                    }

                    .plan {
                        padding: 100px 20px;
                        background: $secondary-background;
                    }
                }
            }
        }

        .questions-section {
            padding-top: $section-padding;
            display: flex;
            flex-direction: column;
            align-items: center;

            .button {
                margin-top: 30px;
            }
        }
    }
</style>
