<template>
  <button
    :class="['button', `button_${variant}`, `button_${size}`]"
    :disabled="isDisabled"
    :type="type"
    :to="to"
    :is="typeTo"
    @click="clickHandler()"
  >
    {{ label }}
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    variant: {
      type: String,
      default: "primary", // light
    },
    icon: {
      type: String,
      default: "qwer",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "small", // middle
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler() {
      if (this.$props.to !== "") {
        this.$router.push(this.$props.to);
      } else if (this.$props.href !== "") {
        window.location = this.$props.href;
      } else {
        this.$emit("click");
      }
    },
  },
  computed: {
    typeTo() {
      if (this.to) {
        return "router-link";
      }
      return "button";
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include button();
  font-family: $font-family;
  font-weight: bold;
  padding: 0 20px;
  border-radius: 6px;
  transition: background-color $transition;
  background: transparent;
  border: none;

  $this: &;

  &_small {
    padding: 10px 16px;

    @include below(sm) {
      height: 34px;
      font-size: 13px;
    }
  }
  &_middle {
    height: 48px;
    font-size: 15px;
    font-weight: 600;

    @include below(sm) {
      height: 40px;
      font-size: 14px;
    }
  }
  &_primary {
    background-color: $color-primary;
    color: #ffffff;

    &:hover {
      @include above(lg) {
        background-color: #00b79c;
      }
    }
  }
  &_secondary {
    background-color: #ffffff;
    border: 1px solid #d5d6d9;
    color: #6b6f78;

    &:hover {
      @include above(lg) {
        background: #f8f8f8;
      }
    }
  }
  &_warning {
    background-color: $color-secondary;
    color: #ffffff;

    &:hover {
      @include above(lg) {
        background-color: #d02169;
      }
    }
  }
  &_light {
    background-color: #f8f8f8;
    color: #6b6f78;

    @at-root #{&}#{$this}_outline {
      border: 1px solid #d5d6d9;
    }

    &:hover {
      @include above(lg) {
        background-color: #d5d6d9;
      }
    }
  }
  &_full {
    width: 100%;
  }
  &_outline {
    color: $color-primary;
    border: 1px solid;
    &:hover {
      //color: chartreuse;
    }
  }
}
</style>
