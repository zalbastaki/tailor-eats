<template>
    <div id="page-wrapper">
        <div id="page">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'main-page',
    };
</script>

<style lang="scss" scoped>
    #page-wrapper {
        padding: 0 $site-side-padding;
        min-height: calc(100vh - #{$main-nav-height} - #{$main-footer-height});
        overflow-x: hidden;

        #page {
            max-width: $site-width;
            margin: auto;
        }
    }
</style>
