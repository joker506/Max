<template>
  <div>
    <SvgSprite />
    <div class="app__inner">
      <Header />

      <slot />
    </div>
  </div>
</template>

<script>
import Header from "@/components/blocks/Header";

export default {
  name: "DefaultLayout",
  components: {
    Header,
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
