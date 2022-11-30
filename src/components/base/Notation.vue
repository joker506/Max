<template>
    <div
        :class="[
          'notation',
          `notation_${theme}`,
        ]"
    >
        <p>Clinic has the status of a collegiate consultant on MEDD. The clinic organizes concilium when a patient's clinical case is examined on the clinical board. <br> The Case Report will be issued from the Clinic with signatures of all the physicians who participated in the case solving.</p>
    </div>
</template>

<script>
    export default {
        name: "Notation",
        props: {
            theme: {
                type: String,
                default: 'dark', // Dark
            },
        }
    }
</script>

<style lang="scss" scoped>
    .notation {
        letter-spacing: 0.1px;
        border-radius: 6px;
        color: #ffffff;
        padding: 20px 20px 18px;
        margin-bottom: 30px;

        @include below(md) {
            margin-bottom: 20px;
        }
        @include below(sm) {
            padding: 15px;
        }

        &_dark {
            background: #414652;
        }
    }
</style>
