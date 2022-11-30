<template>
  <ul class="list">
    <li class="list__item">
      <span class="list__legend">Allergy and Immunology</span
      ><span class="list__count">+ 12</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
};
</script>

<style lang="scss" scoped>
.list {
  letter-spacing: 0.1px;

  &__item {
    position: relative;
    padding-left: 12px;

    & + & {
      margin-top: 5px;
    }

    &:before {
      content: "•";
      flex: none;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &__legend {
    margin-right: 17px;

    @include below(sm) {
      margin-right: 10px;
    }
  }
  &__count {
    display: inline-flex;
    line-height: 1;
    padding: 6px 6px 4px;
    background: $color-primary;
    border-radius: 3px;
    font-size: 10px;
    color: #ffffff;
    position: relative;
    top: -1px;

    &_empty {
      background-color: #d5d6d9;
    }
  }
}
</style>
