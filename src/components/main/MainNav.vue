<template>
    <nav role="navigation" class="main-nav-wrapper">
        <div class="main-nav">
            <router-link to="/">
                <img src="@/assets/images/logo.png" alt="logo" class="logo" />
            </router-link>

            <ul class="nav">
                <li
                    v-for="(navItem, index) in nav"
                    :key="index"
                    class="nav-item"
                >
                    <router-link :to="navItem.route">
                        {{ navItem.label }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'main-nav',

        data() {
            return {
                nav: [
                    { route: '/', label: 'Home' },
                    { route: '/technology', label: 'Technology' },
                    { route: '/pricing', label: 'Pricing' },
                    { route: '/contact-us', label: 'Contact Us' },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped>
    .main-nav-wrapper {
        background: $secondary-background;
        height: $main-nav-height;
        position: relative;
    }

    .main-nav {
        max-width: $site-width;
        margin: auto;
        padding: 0 $site-side-padding;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);

        .logo {
            height: 35px;
        }
    }

    .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex: 1;
        justify-content: flex-end;

        .nav-item {
            margin-left: 30px;
            text-transform: uppercase;
            font-weight: 500;

            a {
                text-decoration: none;
                color: $primary-color;

                &:hover {
                    font-weight: bold;
                }
            }
        }
    }
</style>
