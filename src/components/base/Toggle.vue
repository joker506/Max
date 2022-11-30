<template>
    <label class="toggle">
        <input class="toggle__checkbox" type="checkbox">
        <span class="toggle__container">
            <span class="toggle__handle"></span>
            <span class="toggle__legend toggle__legend_yes">{{ onText }}</span>
            <span class="toggle__legend toggle__legend_no">{{ offText }}</span>
        </span>
    </label>
</template>

<script>
    export default {
        name: "Toggle",
        props: {
            onText: String,
            offText: String
        }
    }
</script>

<style lang="scss" scoped>
    .toggle {
        display: inline-flex;
        cursor: pointer;
        $this: &;

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            background: #F1F1F5;
            height: 26px;
            border: 1px solid rgba(120, 143, 164, 0.2);
            box-sizing: border-box;
            border-radius: 100px;
            padding: 0 13px;
            transition: background-color $transition;
        }
        &__checkbox {
            display: none;

            &:checked ~ #{$this}__container {
                background-color: $color-primary;

                #{$this}__handle {
                    transform: translate3d(calc(100% - 22px),0,0);
                }
                #{$this}__legend_yes {
                    opacity: 1;
                    color: #ffffff;
                }
                #{$this}__legend_no {
                    opacity: 0;
                }
            }
        }
        &__legend {
            font-size: 12px;
            line-height: 1;
            color: #6B6F78;
            text-transform: uppercase;
            transition: all $transition;

            &_yes {
                opacity: 0;
            }
        }
        &__handle {
            position: absolute;
            z-index: 1;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            transition: transform $transition;

            &:before {
                content: '';
                position: absolute;
                border-radius: 50%;
                background-color: #ffffff;
                width: 22px;
                height: 22px;
                top: 0;
                left: 0;
            }
        }
    }
</style>
