<template>
  <div class="error-page">
    <h1 class="error-page__title">Page not found</h1>
    <router-link class="error-page__link" to="/">Back</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &__link {
    color: #00cbad;
  }
}
</style>
