<template>
  <div class="user">
    <div class="user__avatar">
      <img
        class="user__img"
        src="../../assets/img/avatar.jpg"
        alt=""
        role="presentation"
      />
    </div>
    <div class="user__title">Austin Robertson</div>
    <svg
      class="icon icon_dropdown user__icon"
      height="1em"
      width="1.4285714285714286em"
    >
      <use xlink:href="#icon-dropdown"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "User",
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  margin-left: 31px;

  @include below(lg) {
    margin-left: 0;
  }

  &__avatar {
    width: 32px;
    height: 32px;
    overflow: hidden;
    flex: none;
    border-radius: 50%;
    margin-right: 12px;

    @include below(xl) {
      margin-right: 8px;
    }
    @include below(sm) {
      width: 26px;
      height: 26px;
      margin-right: 5px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    font-weight: bold;
    font-size: 15px;
    color: #2c323f;
    position: relative;
    top: 1px;

    @include below(sm) {
      font-size: 13px;
    }
  }
  &__icon {
    flex: none;
    margin-left: 15px;
    font-size: 7px;

    @include below(xl) {
      margin-left: 10px;
    }
    @include below(sm) {
      margin-left: 5px;
      font-size: 4px;
    }
  }
}
</style>
