<template>
    <div id="app">
        <main-nav />
        <main-page>
            <router-view />
        </main-page>
        <main-footer />
    </div>
</template>

<script>
    import MainNav from './components/main/MainNav';
    import MainPage from './components/main/MainPage';
    import MainFooter from './components/main/MainFooter';

    export default {
        name: 'default',

        components: {
            MainNav,
            MainPage,
            MainFooter,
        },
    };
</script>

<style lang="scss">
    body {
        margin: 0;
    }

    #app {
        font-family: $main-font;
        color: $primary-color;
    }
</style>
