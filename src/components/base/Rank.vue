<template>
    <div class="rank">
        <div class="rank__items">
            <div class="rank__item rank__item_active"></div>
            <div class="rank__item rank__item_active"></div>
            <div class="rank__item rank__item_active"></div>
            <div class="rank__item"></div>
        </div>
        <div class="rank__legend">Senior</div>
    </div>
</template>

<script>
    export default {
        name: "Rank"
    }
</script>

<style lang="scss" scoped>
    .rank {
        display: flex;
        align-items: center;
        line-height: 1;

        &__items {
            display: flex;
            flex: auto;
        }
        &__item {
            flex: auto;
            background: #F1F1F5;
            border-radius: 5px;
            height: 4px;

            &_active {
                background-color: $color-primary;
            }

            & + & {
                margin-left: 2px;
            }
        }
        &__legend {
            flex: none;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 0.1px;
            color: $color-primary;
            margin-left: 9px;
        }
    }
</style>
