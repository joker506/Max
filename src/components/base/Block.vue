<template>
  <div class="block">
    <div class="block__header">
      <div class="block__title">{{ title }}</div>
      <a :href="linkUrl" class="block__link" v-if="linkUrl">{{ linkText }}</a>
    </div>
    <div class="block__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Bock",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    "link-Url": {
      type: String,
      default: "#",
    },
    linkText: {
      type: String,
      default: "linkText",
    },
  },
};
</script>

<style lang="scss" scoped></style>
