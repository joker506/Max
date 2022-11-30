<template>
  <div class="dashboard">
    <div class="dashboard__wrap">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashContent",
};
</script>

<style lang="scss" scoped>
.dashboard {
  height: 340px;
  width: 780px;
  background: #ffffff;
  border-radius: 10px;
  @include below(md) {
    width: auto;
    height: auto;
  }
  &__wrap {
    padding: 10px;
    margin: 0 auto;
  }
}
</style>
