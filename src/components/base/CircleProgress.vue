<template>
    <div :class="['circle-progress', `circle-progress_${size}`]" :data-progress='progress'>
        <svg :height='radius * 2' :width='radius * 2'>
            <circle
                class="circle-progress__circle circle-progress__circle_border"
                :stroke-width='stroke'
                :r='normalizedRadius'
                :cx='radius'
                :cy='radius'
            />
            <circle
                class="circle-progress__circle circle-progress__circle_bar"
                stroke-linecap='round'
                :stroke-dasharray="circumference + ' ' + circumference"
                :style='{ strokeDashoffset: strokeDashoffset }'
                :stroke-width='stroke + 1'
                :r='normalizedRadius'
                :cx='radius'
                :cy='radius'
            />
        </svg>
    </div>
</template>

<script>
    export default {
        name: "CircleProgress",
        data() {
            const normalizedRadius = this.radius - this.stroke * 0.6;
            const circumference = normalizedRadius * 2 * Math.PI;

            return {
                normalizedRadius,
                circumference
          }
        },
        props: {
            size: {
                type: String,
                default: "small", // middle
            },
            radius: {
                type: Number,
                default: 25
            },
            progress: {
                type: Number,
                default: 50
            },
            stroke: {
                type: Number,
                default: 4
            }
        },
        computed: {
            strokeDashoffset() {
                return this.circumference - this.progress / 100 * this.circumference;
            }
        },
    }
</script>

<style lang="scss" scoped>
    .circle-progress {
        position: relative;
        font-weight: 500;

        &_small {
            width: 52px;
            height: 52px;

            &:before {
                font-size: 10px;
            }
        }
        &_middle {
            width: 100px;
            height: 100px;

            &:before {
                font-size: 16px;
            }
        }
        &_middle-sm {
            width: 66px;
            height: 66px;

            &:before {
                font-size: 13px;
            }
        }

        &:before {
            content: attr(data-progress)'%';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            line-height: 1;
            font-weight: bold;
            letter-spacing: 0.1px;
        }
        &__circle {
            fill: transparent;
            transition: stroke-dashoffset 0.5s $transition;
            transform: rotate(270deg);
            transform-origin: 50% 50%;

            &_border {
                stroke: #ffffff;
            }
            &_bar {
                stroke: #00b79c;
            }
        }
    }
</style>
