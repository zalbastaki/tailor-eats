<template>
    <div class="home">
        <div class="header">
            <div class="text-section">
                <base-text type="h1">
                    Nutrition tailored to <span class="uppercase">you.</span>
                </base-text>
                <base-text type="p">
                    Hassle free meals tailored to your unique nutritional needs.
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
    </div>
</template>

<script>
    export default {
        name: 'home',
    };
</script>

<style lang="scss" scoped>
    .home {
        .header {
            min-height: calc(100vh - #{$main-nav-height});
            display: flex;
            align-items: center;
            justify-content: space-between;

            .text-section {
                padding-right: 50px;

                .uppercase {
                    text-transform: uppercase;
                }

                h1 {
                    font-size: 100px;
                }

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
    }
</style>
