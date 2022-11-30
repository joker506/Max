<template>
  <div class="panel" :class="{ panel_open: isPanelOpen }">
    <div class="panel__container container">
      <ul class="panel__list">
        <button class="aplicate__btn" @click="$router.go(-1)">
          <Icon name="icon-arrowPrev" />
          Go back to
        </button>
      </ul>
      <ul class="panel__list">
        <Button class="aplicate__btn link-outline" label="continue later" />
        <Button
          class="panel__list-link "
          @click="submitProfile"
          label="Submit profile"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AplicationPanel",
  data() {
    return {
      isPanelOpen: false,
    };
  },

  methods: {
    submitProfile() {
      this.$emit("changeBtn");
      //this.$store.commit("physicin/CHANGE_REGISRATION", true);
      //this.$router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -15px 35px rgba(226, 235, 241, 0.4);

  $this: &;

  @include below(lg) {
    top: 0;
    transform: translateX(-100%);
    transition: all $transition;
  }

  &_open {
    @include below(lg) {
      transform: translateX(0);
      z-index: 30;
      opacity: 1;
      visibility: visible;
    }
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $panel-height;

    @include below(lg) {
      flex-direction: column;
      text-align: center;
      min-height: 100vh;
      padding-top: 20px;
      padding-bottom: 20px;
      overflow-y: auto;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all $transition;
    }

    #{$this}_open & {
      opacity: 1;
      visibility: visible;
    }
  }
  &__list {
    display: flex;
    align-items: center;

    @include below(lg) {
      display: block;
      margin-bottom: 20px;
    }
  }
  &__list-item {
    & + & {
      @include below(lg) {
        margin-top: 15px;
      }
    }
  }
  &__list-link {
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 48px;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    position: relative;
    overflow: hidden;
    transition: color $transition;
    &:first-child {
      margin-right: 30px;
    }
    @include below(xl) {
      font-size: 13px;
    }
    @include below(lg) {
      font-size: 15px;
      height: auto;
      display: block;
    }

    #{$this}__list-item_highlighted & {
      color: $color-secondary;

      &:after {
        transform: translateY(0);
        background-color: $color-secondary;
      }
    }

    &:after {
      content: "";
      background: $color-primary;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 5px 5px 0 0;
      transition: transform $transition, background-color $transition;
      transform: translateY(100%);
    }
    &:hover {
      &:after {
        @include above(lg) {
          transform: translateY(0);
        }
      }
    }
  }
  &__list-count {
    margin-left: 10px;
    color: #ffffff;
    font-size: 10px;
    line-height: 1;
    padding: 5px 6px;
    background: $color-primary;
    border-radius: 3px;
    position: relative;
    top: -3px;
  }
  &__group {
    display: flex;
    align-content: center;

    @include below(lg) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  &__control {
    position: absolute;
    left: $site-padding;
    top: 0;
    display: none;

    @include below(lg) {
      display: block;
    }
    @include below(md) {
    }

    &_open {
      left: 100%;
      bottom: 60px;
      top: auto;
      overflow: hidden;
      border-radius: 0 6px 6px 0;
    }
    &_close {
      top: 0;
      left: 0;

      .icon {
        font-size: 18px;
      }
    }
  }
  &__control-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: $color-primary;
    font-size: 22px;
    color: #ffffff;
  }
  &__button-wrap {
    display: none;
    position: absolute;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding: 10px;

    @include below(lg) {
      display: block;
    }

    .button {
      width: 100%;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    position: relative;
    top: -1px;
    margin-right: 30px;

    @include below(lg) {
      margin-right: 0;
      margin-top: 20px;
    }
  }
  &__buttons-item {
    & + & {
      margin-left: 30px;

      @include below(xl) {
        margin-left: 20px;
      }
    }
  }
  &__buttons-link {
    color: #6b6f78;
    font-size: 24px;
    position: relative;
    transition: color $transition;

    @include above(lg) {
      font-size: 20px;
    }

    &:hover {
      @include above(lg) {
        color: $color-primary;
      }
    }
  }
}
.link-outline {
  text-transform: uppercase;
  height: 48px;
  border: 1px solid #d5d6d9;
  background: transparent;
  color: #6b6f78;
  margin-right: 20px;
  //   &:hover {
  //     background: transparent;
  //     border: 1px solid #6b6f78;
  //     outline: transparent;
  //   }
}
.aplicate__btn {
  color: #95989f;
  background: transparent;
  &:hover {
    color: #6b6f78;
    background: transparent;
  }
}
</style>
