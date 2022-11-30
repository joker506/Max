<template>
  <svg
    :class="['icon', `icon_${name}`]"
    height="1em"
    width="1em"
    :style="$props.color !== '' ? `fill: ${$props.color}` : ''"
  >
    <use xmlns="http://www.w3.org/2000/svg" :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      default: "icon-place",
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
<style lang="scss" scoped>
.icon {
  display: inline-block;
  fill: currentColor;
  fill-rule: evenodd;
  flex: 0 0 auto;
  width: auto;
  height: auto;
}
</style>
