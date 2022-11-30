<template>
  <div class="">
    <div class="steps">step{{ step }}</div>
    <div class="rank">
      <div class="rank__items">
        <div
          class="rank__item"
          :class="this.step ? 'rank__item_active' : ''"
        ></div>
        <div
          class="rank__item "
          :class="this.step > 1 ? 'rank__item_active' : ''"
        ></div>
        <div
          class="rank__item "
          :class="this.step > 2 ? 'rank__item_active' : ''"
        ></div>
        <div
          class="rank__item "
          :class="this.step > 3 ? 'rank__item_active' : ''"
        ></div>
        <div
          class="rank__item"
          :class="this.step === 5 ? 'rank__item_active' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style lang="scss" scoped>
.steps {
  margin-left: 12%;
  color: #abadb2;
  @include below(md) {
    width: 100%;
  }
}
.rank {
  display: flex;
  align-items: center;
  line-height: 1;
  @include below(md) {
    // width: 100%;
  }

  &__items {
    display: flex;
    flex: auto;
  }
  &__item {
    flex: auto;
    background: #f1f1f5;
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
