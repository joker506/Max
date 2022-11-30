<template>
  <div class="filters">
    <div class="filters__top">
      <h2 class="filters__title">Filters</h2>
      <button class="filters__btn" @click="clearAll">Clear All</button>
    </div>
    <div class="specialty-filter">
      <h2 class="specialty-filter__title">Specialty</h2>
      <span class="specialty-filter__arrow" @click="openList = !openList">
        <!-- ArrowUp -->Arrow
      </span>
    </div>
    <div class="specialty__wrap" v-if="openList === true">
      <div
        class="specialty__item"
        v-for="specialty of correctDocSpeciality"
        :key="specialty.id"
      >
        <p class="wrap__first">
          <input
            class="specialty__input"
            type="checkbox"
            :id="specialty.id"
            :name="specialty.name"
            :value="specialty.prof"
            v-model="checkedSpeciality"
          />
          <label class="specialty__label" :for="specialty.id">{{
            specialty.prof
          }}</label>
        </p>
        <p class="wrap__second">
          <span class="specialty__count">123</span>
        </p>
      </div>

      <button class="specialty__btn" @click="showMore = !showMore">
        {{ showMore ? "-" + " " + "less" : "+" + " " + "more" }}
        {{ DocSpeciality.length - 6 }}
        specialties
      </button>
    </div>
    <p v-if="checkedSpeciality.length">{{ checkedSpeciality }}</p>
  </div>
</template>

<script>
export default {
  name: "AsideFilter",
  data() {
    return {
      showMore: false,
      openList: true,
      checkedSpeciality: [],
    };
  },
  components: {},
  props: {
    DocSpeciality: {},
  },
  computed: {
    correctDocSpeciality() {
      if (this.showMore === true) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.DocSpeciality;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.DocSpeciality.slice(0, 6);
      }
    },
  },
  methods: {
    clearAll() {
      let arr = this.checkedSpeciality;
      arr.splice(0, arr.length);
      console.log("clearAll");
    },
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
