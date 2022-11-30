<template>
    <div class="offices">
        <div class="offices__blocks">
            <div class="offices__block">
                <div class="offices__header">
                    <div class="offices__caption">
                        <div class="offices__title">
                            • Dignity Health - California Hospital Medical Center
                            <span class="offices__badge">Main unit</span>
                        </div>
                    </div>
                    <div class="offices__detail">
                        <Icon class="offices__detail-icon" :name="placeIcon" />
                        <span class="offices__detail-legend">Los Angeles, CA, USA</span>
                    </div>
                </div>
                <div class="offices__group">
                    <div class="offices__legend">Type of medical practice</div>
                    <div class="offices__text">
                        Hospital with stationary treatment
                    </div>
                </div>
                <div class="offices__group">
                    <div class="offices__legend">Specialties</div>
                    <div class="offices__text">12 clinical specialties</div>
                </div>
            </div>
            <div class="offices__block">
                <div class="offices__header">
                    <div class="offices__caption">
                        <div class="offices__title">
                            • Dignity Health - Diagnostic Radiology Center
                        </div>
                    </div>
                    <div class="offices__detail">
                        <Icon class="offices__detail-icon" :name="placeIcon" />
                        <span class="offices__detail-legend">Los Angeles, CA, USA</span>
                    </div>
                </div>
                <div class="offices__group">
                    <div class="offices__legend">Type of medical practice</div>
                    <div class="offices__text">Advanced diagnostic office</div>
                </div>
                <div class="offices__group">
                    <div class="offices__legend">Specialties</div>
                    <div class="offices__text">• Diagnostic Radiology</div>
                </div>
            </div>
        </div>
        <div class="offices__footer">
            <Button size="middle" class="button_outline button_light button_full">See another offices (2)</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Offices",
        data() {
            return {
                placeIcon: 'icon-place'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .offices {

        &__blocks {
            margin-bottom: 9px;

            @include below(md) {
                margin-bottom: 0;
            }
        }
        &__block {
            position: relative;
            padding-bottom: 30px;
            margin-bottom: 30px;

            @include below(md) {
                padding-bottom: 20px;
                margin-bottom: 20px;
            }

            &:after {
                content: '';
                position: absolute;
                height: 2px;
                bottom: 0;
                left: -20px;
                right: -20px;
                background-color: #f8f8f8;
            }

            &:last-child {
                margin-bottom: 0;

                &:after {
                    display: none;
                }
            }
        }
        &__header {
            margin-bottom: 19px;
        }
        &__caption {
            margin-bottom: 7px;
        }
        &__title {
            font-size: 14px;
            letter-spacing: 0.2px;
        }
        &__badge {
            display: inline-flex;
            background: #F8F8F8;
            border-radius: 4px;
            line-height: 1;
            font-size: 10px;
            color: #6B6F78;
            padding: 5px 11px;
            margin-left: 10px;
            position: relative;
            top: -2px;
        }
        &__detail {
            display: flex;
        }
        &__detail-icon {
            font-size: 18px;
            margin-right: 10px;
            flex: none;
            position: relative;
            top: -1px;
        }
        &__detail-legend {
            font-size: 13px;
            color: #80848C;
        }
        &__group {
            margin-bottom: 16px;

            &:last-child {
                margin-bottom: 0;
            }
        }
        &__legend {
            font-size: 13px;
            line-height: 16px;
            color: #ABADB2;
            margin-bottom: 9px;
        }
        &__text {
            letter-spacing: 0.1px;
        }
    }
</style>
