<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="link in menuLinks"
        :key="link.id"
        :class="{ nav__item_active: $route.path === link.path }"
      >
        <router-link class="nav__link" :to="link.path">{{
          link.name
        }}</router-link>
      </li>
    </ul>
    <Button to="/catalog" label="Look up Catalog" />
  </nav>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
      sel: 0,
      menuLinks: [
        {
          id: 0,
          name: "Dashboard",
          path: "/dashboard",
        },
        {
          id: 1,
          name: "medical story",
          path: "/clinic",
        },
        {
          id: 2,
          name: "Orders",
          path: "/orders",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;

  $this: &;

  @include below(lg) {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    margin-right: 19px;

    @include below(lg) {
      display: block;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  &__item {
    & + & {
      @include below(lg) {
        margin-top: 15px;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 24px;
    color: #2c323f;
    height: $header-height;
    position: relative;
    padding: 2px 24px 0;
    transition: color $transition;
    overflow: hidden;

    @include below(xl) {
      padding: 0 10px;
      font-size: 13px;
    }
    @include below(lg) {
      height: auto;
      display: block;
      text-align: center;
      font-size: 15px;
    }

    &:after {
      content: "";
      background: #8b8f93;
      height: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 5px 5px 0 0;
      transition: transform $transition;
      transform: translateY(100%);

      #{$this}__item_active & {
        background-color: $color-secondary;
        transform: translateY(0);
      }
    }
    &:hover {
      @include above(lg) {
        color: #6b6f78;

        &:after {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>
