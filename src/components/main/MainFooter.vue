<template>
    <footer class="main-footer-wrapper">
        <div class="main-footer">
            <p class="note">
                © TailorEats
            </p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'main-footer',
    };
</script>

<style lang="scss" scoped>
    .main-footer-wrapper {
        background: $primary-color;
        height: $main-footer-height;
        position: relative;

        .main-footer {
            max-width: $site-width;
            margin: auto;
            padding: 0 $site-side-padding;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            color: $primary-background;
        }
    }
</style>
