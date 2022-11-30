<template>
  <div class="checkbox">
    <input
      type="checkbox"
      class="custom-checkbox"
      :id="id"
      :name="name"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.checked)"
    />
    <label class="checkbox__label" :for="name">{{ title }}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
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
  border-radius: 5px;
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
