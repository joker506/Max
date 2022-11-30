<template>
  <div class="radio">
    <input
      class="custom-checkbox"
      type="radio"
      :id="id"
      v-on="listeners"
      v-bind="$attrs"
    />
    <label class="checkbox__label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  model: {
    prop: "radioModel",
    event: "radio-select",
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: (event) => {
          console.log("Change event says...");
          console.log(event.target.value);
          this.$emit("radio-select", event.target.value);
          this.$emit("change", event.target.value);
        },
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.radio {
  margin: 10px 0;
  //width: 180px;
  &__label {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    cursor: pointer;
  }
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:checked + label::before {
  background-image: url("~@/assets/img/svg/check-icon.svg");
  background-size: 150%;
}
/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
</style>
