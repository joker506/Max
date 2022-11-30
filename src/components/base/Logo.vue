<template>
  <div class="logo">
    <router-link :to="path">
      <Icon class="logo__icon" name="icon-logo"
    /></router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  flex: none;
  margin-right: auto;

  &__icon {
    width: 81px;

    @include below(xl) {
      width: 68px;
    }
    @include below(sm) {
      width: 60px;
    }
  }
}
</style>
