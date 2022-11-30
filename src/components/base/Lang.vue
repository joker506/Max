<template>
    <button class="lang">
        <Icon class="lang__icon" name="icon-lang" />
    </button>
</template>

<script>
    export default {
        name: "Lang"
    }
</script>

<style lang="scss" scoped>
    .lang {
        margin-left: 30px;

        @include below(xl) {
            margin-left: 15px;
        }

        &__icon {
            font-size: 22px;
            color: #6B6F78;

            @include below(sm) {
                font-size: 18px;
            }
        }
    }

</style>
