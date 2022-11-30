<template>
    <div class="quote">
        <div class="quote__subtitle">Some short description about that clinic, bla-bla-bla</div>
        <p>Charlez Norman Friedlander, MD is a board Certified gastroenterologist in New Yourk City and is Assistant Professor of Clinical Medicine at Th Mount Sinai Medical Center. Dr Friedlander joined state of the art 14 Street Medical Arts Center to service patients of Lower East side of New York City. Dr Friedlander is a member of the American College of Gastroenterology, the American Gastroenterological Association and ...</p>
    </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style lang="scss" scoped>
    .quote {
        background: #FAFAFB;
        border-radius: 5px;
        padding: 20px 20px 20px 65px;
        letter-spacing: 0.1px;
        position: relative;
        margin-bottom: 21px;

        @include below(sm) {
            padding: 15px 15px 15px 40px;
        }

        &:before {
            content: '';
            width: 25px;
            height: 25px;
            position: absolute;
            top: 20px;
            left: 20px;

            @include below(sm) {
                width: 16px;
                height: 16px;
                top: 20px;
                left: 15px;
            }
        }

        &__subtitle {
            font-weight: bold;
            margin-bottom: 5px;
        }
    }

</style>
