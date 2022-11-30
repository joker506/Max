<template>
  <header class="header">
    <div class="header__container container">
      <button @click="openMenu" class="header__panel-toggle">
        <Hamburger :class="{ hamburger_active: isMenuOpen }" />
      </button>
      <Logo path="/" />
      <div class="header__holder">
        <div class="header__panel" :class="{ header__panel_open: isMenuOpen }">
          <Nav />
          <ul class="header__buttons">
            <li class="header__buttons-item">
              <button class="header__buttons-link">
                <Icon class="header__buttons-icon" name="icon-search" />
              </button>
            </li>
            <li class="header__buttons-item">
              <button class="header__buttons-link">
                <Icon class="header__buttons-icon" name="icon-likes" />
              </button>
            </li>
            <li class="header__buttons-item">
              <button class="header__buttons-link">
                <Icon class="header__buttons-icon" name="icon-notify" />
                <span class="header__buttons-badge"></span>
              </button>
            </li>
          </ul>
        </div>
        <div class="header__group">
          <User />
          <Lang />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Nav from "@/components/blocks/Nav";

export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu: function() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e2e2ea;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: $header-height;

    @include below(lg) {
      height: $header-height-tablet;
    }
    @include below(md) {
      height: $header-height-mobile;
    }
  }
  &__panel-toggle {
    padding: 10px;
    margin-left: -10px;
  }
  &__holder {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 79px;

    @include below(xl) {
      margin-left: 30px;
    }
    @include below(lg) {
      flex: none;
    }
  }
  &__panel {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include below(lg) {
      position: fixed;
      top: $header-height-tablet;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ffffff;
      flex-direction: column;
      justify-content: center;
      overflow-y: auto;
      padding: 20px 0;
      transition: all $transition;
      transform: translateX(-100%);
      opacity: 0;
      visibility: hidden;
    }
    @include below(md) {
      top: $header-height-mobile;
    }

    &_open {
      @include below(lg) {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__group {
    flex: none;
    display: flex;
    align-items: center;
  }
  &__buttons {
    display: flex;
    align-items: center;
    position: relative;
    top: -1px;
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

    &:hover {
      @include above(lg) {
        color: $color-primary;
      }
    }
  }
  &__buttons-badge {
    position: absolute;
    top: -2px;
    right: -3px;
    background-color: $color-secondary;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
</style>
