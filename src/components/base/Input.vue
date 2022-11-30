<template>
  <div :class="['input', `input_${size}`, `input_${purpose}`]">
    <input
      class="input__field"
      :type="type"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      @keyup="value === ''"
      v-on:blur="$emit('blur', $event.target.value)"
    />
    <span class="input__legend" v-if="legend">{{ legend }}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {};
  },

  props: {
    type: {
      default: "text",
    },
    size: {
      type: String,
      default: "small", // middle
    },
    purpose: {
      type: String,
      default: "default", // middle
    },
    placeholder: {
      type: String,
      default: "Enter Placeholder",
    },
    value: {
      type: [String, Number, Boolean],
    },
    legend: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  $this: &;

  &__field {
    width: 100%;
    height: 100%;
    border: 1px solid #d5d6d9;
    border-radius: 6px;
    padding: 0 35px 0 15px;
    background-repeat: no-repeat;
    transition: border $transition;

    @include placeholder {
      color: #6b6f78;
    }

    #{$this}_small & {
      height: 38px;

      @include below(sm) {
        height: 34px;
      }
    }
    #{$this}_middle & {
      height: 48px;

      @include below(sm) {
        height: 40px;
      }
    }
    #{$this}_active &,
    &:focus {
      border-color: $color-primary;
    }

    #{$this}_search & {
      background-image: url("~@/assets/img/svg/magnifier.svg");
      background-position: right 15px center;
      background-color: #f8f8f8;
    }
  }
  &__legend {
    width: 90%;
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
      width: auto;
      transform: translateY(-60%);
      top: 0;
      font-size: 13px;
      color: $color-primary;
    }
  }
  &__error {
    border: 1px solid #e73078;
    border-radius: 6px;
    .input__legend {
      color: $color-secondary !important;
    }
    .input__field:focus ~ .input__legend {
      color: $color-secondary;
    }
    .input__field:not(:placeholder-shown) {
      border-color: $color-secondary;
    }
  }
}
.input__field:focus ~ .input__legend,
.input__field:not(:placeholder-shown) ~ .input__legend {
  width: auto;
  transform: translateY(-60%);
  top: 0;
  font-size: 13px;
  color: $color-primary;
}
.input__field:not(:placeholder-shown) {
  border-color: $color-primary;
}
</style>
