<template>
  <div>
    <SvgSprite />
    <div class="app__inner">
      <HeaderNotAuth />
      <slot />
    </div>
  </div>
</template>

<script>
import HeaderNotAuth from "@/components/blocks/HeaderNotAuth";
export default {
  name: "NotAuthLayout",
  components: {
    HeaderNotAuth,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
}
.app__inner {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
