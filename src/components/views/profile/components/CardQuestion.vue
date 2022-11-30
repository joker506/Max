<template>
  <div class="question">
    <div class="question__wrap">
      <div class="question__top">
        <span class="question__top-item">• 48130 {{ question.id }}</span>
        <span class="question__top-item">
          <a class="question__top-prev" href="#"> Preview questions</a>
        </span>
      </div>

      <div class="question__body">
        <h2 class="question__title">
          {{ question.title || question.prof }} Assessment (Basic EMR)
        </h2>
        <span class="question__val">123 questions</span>
      </div>
      <div class="question__bottom">
        <p class="question__content">
          Questions to collect basic EMR-data (and other text for demonstrate
          two rows, eg - Lorem Ipsum Dolorem)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardQuestion",

  props: {
    question: {},
  },
};
</script>

<style lang="scss" scoped>
.question {
  margin: 15px 0;
  background: #ffffff;
  border: 1px solid #d5d6d9;
  border-radius: 10px;
  &__wrap {
    padding: 20px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    &-prev {
      font-family: Poppins;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      color: #00cbad;
    }
  }
  &__body {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
  }
  &__title {
    font-family: Lato;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: #565b65;
    margin-right: 3%;
  }
  &__val {
    padding-top: 1%;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1px;
    color: #00cbad;
  }
  &__bottom {
    margin-top: 10px;
  }
  &__content {
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    color: #2c323f;
  }
}
</style>
