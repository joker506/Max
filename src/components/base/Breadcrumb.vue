<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__item">
        <a class="breadcrumb__legend" href="#">Catalog</a>
      </li>
      <li class="breadcrumb__item">
        <span class="breadcrumb__legend">Consultant {{ login }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["login"],
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  background: #ffffff;
  border-radius: 6px;
  padding: 14px 20px 12px;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;

  @include below(md) {
    margin-bottom: 20px;
    padding: 10px 10px 8px;
  }
  @include below(sm) {
    font-size: 13px;
    padding: 8px 8px 6px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    &:after {
      content: "/";
      margin-right: 2px;
      margin-left: 4px;
      color: #80848c;
    }

    &:last-child {
      &:after {
        content: none;
      }
    }
  }
  &__legend {
    color: #80848c;

    @at-root a#{&} {
      color: $color-primary;
    }
  }
}
</style>
