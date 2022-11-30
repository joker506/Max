<template>
    <div class="hamburger">
        <div class="hamburger__bar"></div>
    </div>
</template>

<script>
    export default {
        name: "Hamburger"
    }
</script>

<style lang="scss" scoped>
    $hamburger-width: 20px;
    $hamburger-height: 15px;
    $hamburger-bar-height: 2px;
    $hamburger-bar-height-increment: 0;
    $hamburger-active-bar-height: $hamburger-bar-height + $hamburger-bar-height-increment;
    $hamburger-active-bar-width: 110%;
    $hamburger-bar-color: $color-dark;
    $hamburger-bar-active-color: $color-dark;
    $hamburger-bar-border-radius: 0;
    $hamburger-bar-offset: ($hamburger-height - $hamburger-bar-height) / -2;
    $hamburger-transition: $transition;

    .hamburger {
        width: $hamburger-width;
        height: $hamburger-height;
        cursor: pointer;
        position: relative;
        display: none;
        z-index: 100;
        flex: none;

        @include below(lg) {
            display: block;
        }

        &__bar {
            height: $hamburger-bar-height;
            border-radius: $hamburger-bar-border-radius;
            background-color: $hamburger-bar-color;
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            transition: $hamburger-transition;

            &:before,
            &:after {
                content: '';
                height: 100%;
                width: 100%;
                border-radius: inherit;
                background-color: $hamburger-bar-color;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                transition: $hamburger-transition;
            }

            &:before {
                top: $hamburger-bar-offset;
            }

            &:after {
                bottom: $hamburger-bar-offset;
            }
        }

        &_active &__bar {
            background: transparent;
            height: $hamburger-active-bar-height;

            &:before,
            &:after {
                width: $hamburger-active-bar-width;
                background-color: $hamburger-bar-active-color;
            }

            &:before {
                top: 0;
                transform: translateX(-50%) rotate(45deg);
            }

            &:after {
                bottom: 0;
                transform: translateX(-50%) rotate(-45deg);
            }
        }
    }
</style>
