<template>
    <div class="tracks">
        <div class="tracks__header">
            <ul class="tracks__controls">
                <li class="tracks__control tracks__control_active"><a class="tracks__control-link" href="#">All history</a>
                </li>
                <li class="tracks__control"><a class="tracks__control-link" href="#">Important events</a>
                </li>
                <li class="tracks__control"><a class="tracks__control-link" href="#">Sience engagement</a>
                </li>
                <li class="tracks__control"><a class="tracks__control-link" href="#">Important events</a>
                </li>
            </ul>
        </div>
        <div class="tracks__body">
            <div class="tracks__group">
                <div class="tracks__subtitle">Today</div>
                <Track />
            </div>
        </div>
    </div>
</template>

<script>
    import Track from '@/components/views/clinic/components/Track';

    export default {
        name: "Tracks",
        props: {},
        components: {
            Track
        }
    }
</script>

<style lang="scss" scoped>
    .tracks {
        margin-bottom: 30px;

        @include below(md) {
            margin-bottom: 20px;
        }

        $this: &;

        &__header {
            margin-bottom: 10px;
            position: relative;

            @include below(lg) {
                margin-bottom: 5px;
            }

            &:after {

                @include below(lg) {
                    content: '';
                    position: absolute;
                    pointer-events: none;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 50px;
                    background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 1%,rgba(250,250,251,1) 100%);
                }
            }
        }
        &__controls {
            display: flex;

            @include below(lg) {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                padding: 0 0 7px 2px;
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }
        &__control {
            white-space: nowrap;

            & + & {

                @include above(md) {
                    margin-left: 15px;
                }
            }
        }
        &__control-link {
            display: block;
            padding: 9px 20px 6px;
            border-radius: 6px;
            font-weight: bold;
            color: $body-color;
            transition: background-color $transition, box-shadow $transition;

            @include below(md) {
                padding: 4px 15px 2px;
            }

            &:hover {

                @include above(lg) {
                    background-color: #ffffff;
                }
            }

            #{$this}__control_active & {
                background-color: #fff;
                box-shadow: 0 3px 4px rgba(153, 155, 168, 0.1);
            }
        }
        &__body {
            background: #FFFFFF;
            border-radius: 10px;
            padding: 29px 30px 40px;

            @include below(md) {
                padding: 20px;
            }
            @include below(sm) {
                padding: 15px;
            }
        }
        &__subtitle {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: $color-dark;
            font-weight: bold;
            margin-bottom: 16px;
        }
        &__group {
            position: relative;
            margin-bottom: 29px;

            &:last-child {
                margin-bottom: 0;

                &:before {
                    bottom: -10px;

                    @include below(sm) {
                        bottom: 0;
                    }
                }
            }

            &:before {
                content: '';
                width: 1PX;
                position: absolute;
                top: 28px;
                left: 20px;
                bottom: -20px;
                background-color: #D5D6D9
            }
        }
    }

</style>
