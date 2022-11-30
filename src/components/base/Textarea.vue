<template>
  <div class="textarea">
    <textarea
      class="textarea__field"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></textarea>
    <span class="textarea__legend" v-if="legend">{{ legend }}</span>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    legend: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  position: relative;
  $this: &;

  &__field {
    width: 100%;
    border: 1px solid #d5d6d9;
    box-sizing: border-box;
    border-radius: 6px;
    height: 96px;
    resize: none;
    padding: 15px;
    transition: border $transition;

    #{$this}_active &,
    &:focus {
      border-color: $color-primary;
    }
  }
  &__legend {
    color: #abadb2;
    position: absolute;
    left: 10px;
    top: 14px;
    pointer-events: none;
    transition: all $transition;
    line-height: 1.2;
    background-color: #ffffff;
    padding: 3px 5px;
    border-radius: 11px;

    #{$this}_active &,
    #{$this}__field:focus + & {
      transform: translateY(-40%);
      top: 0;
      font-size: 13px;
      color: $color-primary;
    }
  }
}
</style>
