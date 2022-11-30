<template>
  <div id="app" class="app">
    <div class="main">
      <div class="main__container container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~@/assets/scss/_styles.scss";
#app {
  font-size: $font-size;
  font-family: $font-family;
  line-height: $line-height;
  background-color: $body-bg;
}
.main {
  flex: 1 0 auto;
  padding-top: $header-height + 30px;
  padding-bottom: 40px;
  /*background: #d9d9d9;*/

  @include below(lg) {
    padding-top: $header-height-tablet + 30px;
  }
  @include below(md) {
    padding-top: $header-height-mobile + 20px;
  }

  .has-panel-page & {
    @include above(lg) {
      padding-bottom: $panel-height + 40px;
    }
  }
}
.container {
  @include container;
}
.grid {
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  margin-bottom: 10px;

  $this: &;

  @include below(lg) {
    flex-direction: column-reverse;
  }

  &_reverse {
    flex-direction: row;

    @include below(lg) {
      flex-direction: column;
    }
  }

  &__narrow {
    flex: none;
    width: 340px;
    margin-right: 40px;

    #{$this}_reverse & {
      margin-right: 0;
      margin-left: 40px;

      @include below(lg) {
        margin-left: 0;
      }
    }

    &_small {
      width: 280px;
    }

    @include below(xl) {
      width: 280px;
    }
    @include below(lg) {
      width: 100%;
      margin-right: 0;
    }
  }
  &__wide {
    flex: auto;
    min-width: 0;

    .col_1-2 {

      @include below(md) {
        width: percentage(1/1);
      }
    }
  }
}
</style>
