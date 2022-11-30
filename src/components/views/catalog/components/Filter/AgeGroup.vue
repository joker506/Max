<template>
  <div class="filters">
    <div class="filters__top"></div>
    <div class="specialty-filter">
      <h2 class="specialty-filter__title">Age group of patients</h2>
      <span class="specialty-filter__arrow" @click="openList = !openList">
        <!-- ArrowUp -->Arrow
      </span>
    </div>
    <div class="specialty__wrap" v-if="openList === true">
      <div
        class="specialty__item"
        v-for="agegroup of AgeGroupPatients"
        :key="agegroup.id"
      >
        <p class="wrap__first">
          <input
            class="specialty__input"
            type="checkbox"
            :id="agegroup.id"
            :name="agegroup.name"
            :value="agegroup.age"
            v-model="checkedAgeGroup"
          />
          <label class="specialty__label" :for="agegroup.id">{{
            agegroup.age
          }}</label>
        </p>
        <p class="wrap__second">
          <span class="specialty__count">123</span>
        </p>
      </div>
    </div>
    <p v-if="checkedAgeGroup.length">{{ checkedAgeGroup }}</p>
  </div>
</template>

<script>
export default {
  name: "AgeGroup",
  data() {
    return {
      openList: true,
      checkedAgeGroup: [],
    };
  },
  props: {
    AgeGroupPatients: {},
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 280px;
  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
  }
  &__btn {
    font-family: Lato;
    font-size: 12px;
    font-weight: 600;
    text-align: left;
    color: #00cbad;
    border-bottom: 1px dashed #00cbad;
  }
  .specialty-filter {
    display: flex;
    justify-content: space-between;
    &__title {
      font-size: 14px;
      font-weight: 900;
      text-align: left;
      margin-bottom: 14px;
    }
    &__arrow {
      cursor: pointer;
    }
  }
  .specialty__item {
    display: flex;
    justify-content: space-between;
  }
  .wrap__first > input[type="checkbox"] {
    margin-right: 14px;
    margin-bottom: 10px;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  .specialty__label {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #6b6f78;
  }
  .specialty__count {
    margin-right: 0;
  }
  .specialty__btn {
    font-weight: 600;
    text-align: left;
    color: #00cbad;
  }
}
</style>
