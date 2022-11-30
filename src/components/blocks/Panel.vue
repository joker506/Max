<template>
  <div class="panel" :class="{ panel_open: isPanelOpen }">
    <div class="panel__container container">
      <ul class="panel__list">
        <li
          v-for="item in linksItem"
          :key="item.id"
          class="panel__list-item"
          :class="{ 'panel__list-item_highlighted': item.id === selected }"
          @click="selected = item.id"
        >
          <button class="panel__list-link">{{ item.name }}</button>
        </li>
      </ul>
      <div class="panel__group">
        <ul class="panel__buttons">
          <li class="panel__buttons-item">
            <button
              @click="openModalShare"
              class="panel__buttons-link"
              data-tooltip="Share"
            >
              <Icon class="panel__buttons-icon" name="icon-share" />
            </button>
          </li>
          <li class="panel__buttons-item">
            <button class="panel__buttons-link" data-tooltip="Add to compare">
              <Icon class="panel__buttons-icon" name="icon-compare" />
            </button>
          </li>
          <li class="panel__buttons-item">
            <button class="panel__buttons-link" data-tooltip="Like">
              <Icon class="panel__buttons-icon" name="icon-likes" />
            </button>
          </li>
        </ul>
        <Button label="$200 / consultation" />
      </div>
    </div>
    <button class="panel__control panel__control_open" @click="openPanel">
      <span class="panel__control-item">
        <Icon class="panel__buttons-icon" name="icon-menu" />
      </span>
    </button>
    <button class="panel__control panel__control_close" @click="openPanel">
      <span class="panel__control-item">
        <Icon class="panel__buttons-icon" name="icon-cross" />
      </span>
    </button>
    <div class="panel__button-wrap">
      <Button label="$200 / consultation" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      selected: 0,
      linksItem: [
        {
          id: 0,
          name: "Profile",
        },
        {
          id: 1,
          name: "Reviews",
        },
        {
          id: 2,
          name: "Patient data enquiry",
        },
      ],
      isPanelOpen: false,
    };
  },
  methods: {
    openPanel: function() {
      this.isPanelOpen = !this.isPanelOpen;
    },
    openModalShare: function() {
      this.$modal.show("modalShare");
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
    height: $panel-height;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: $color-dark;
    position: relative;
    overflow: hidden;
    transition: color $transition;

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
</style>
