<template>
  <div class="additional__inner">
    <div class="additional__block">
      <div class="additional__group">
        <div class="additional__block-title">
          Additional options for consultation
        </div>
        <div class="additional__remove-wrap">
          <a href="#" class="additional__remove-link">Erase addition</a>
        </div>
        <div class="additional__field">
          <Input
            size="middle"
            purpose="default"
            placeholder="Option name"
            legend="Option name"
          />
        </div>
        <div class="additional__field">
          <Input
            size="middle"
            purpose="default"
            placeholder="Price"
            legend="Price"
          />
        </div>
      </div>
      <div class="additional__group">
        <a href="#" class="additional__add-link">+ Add more</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdditionalOpt",
};
</script>

<style lang="scss" scoped>
.additional {
  widows: 560px;
  background: #ffffff;
  border: 1px solid #d5d6d9;
  border-radius: 10px;
  margin-bottom: 20px;

  $this: &;

  &:last-child {
    margin-bottom: 0;
  }
  &__inner {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    margin-bottom: 10px;

    &_dark {
      background-color: rgba(86, 91, 101, 0.1);
    }

    #{$this}__heading {
      margin-top: -30px;
    }
  }
  &__block {
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__group {
    border-bottom: 2px solid #f8f8f8;
    padding: 30px;

    &:last-child {
      border-bottom: none;
    }
  }

  &__block-title {
    font-weight: bold;
    color: $color-dark;
    font-size: 16px;
    margin-bottom: 12px;

    #{$this}__block-heading & {
      margin-bottom: 0;
    }
  }

  &__block-legend {
    color: #95989f;
  }
  &__field {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__add-link {
    color: $color-primary;
    font-weight: bold;
  }
  &__remove-wrap {
    text-align: right;
    margin-bottom: 10px;
  }
  &__remove-link {
    color: $color-secondary;
    font-weight: bold;
    font-size: 12px;
  }
}
</style>
