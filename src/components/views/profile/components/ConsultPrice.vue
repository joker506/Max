<template>
  <div class="price">
    <div class="price__wrap">
      <div class="price__top">
        <h2 class="price__title">Conditions of consultation</h2>
      </div>
      <div class="price__body">
        <Input
          size="middle"
          purpose="default"
          class="section__input"
          v-model="priceConsult"
          legend="Price of consultation"
          placeholder="Price of consultation"
        />
        <Input
          size="middle"
          purpose="default"
          class="section__input price__input"
          v-model="averageCase"
          legend="Average case solving (in days)"
          placeholder="Average case solving (in days)"
        />
      </div>
      <div class="price__bottom">
        <Checkbox
          id="priceConsult"
          name="priceConsult"
          title="Fast-track of case solving"
          v-model="priceCon"
        />
        <Input
          size="middle"
          purpose="default"
          class="section__input price__input"
          v-model="averageCase"
          legend="Average case solving (in days)"
          placeholder="Average case solving (in days)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultPrice",
  data() {
    return {
      priceCon: null,
      priceConsult: null,
      averageCase: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.price {
  //margin-top: 10px;
  width: 560px;
  background: #ffffff;
  border-radius: 10px;
  @include below(md) {
    width: 100%;
  }
  &__wrap {
    padding: 20px 16px;
  }
  &__title {
    color: $color-dark;
    padding-top: 30px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
  }
  &__input {
    margin-top: 20px;
    @include below(md) {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  &__body {
    margin-top: 30px;

    @include below(md) {
      margin-top: 20px;
    }
  }
}
</style>
