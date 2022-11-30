<template>
  <div class="filters">
    <div class="specialty-filter">
      <h2 class="specialty-filter__title" :class="{ openlist: openList }">
        Price
      </h2>
      <span
        class="specialty-filter__arrow"
        @click="openList = !openList"
        :class="{ openlist: openList }"
      >
        <!-- ArrowUp -->Arrow
      </span>
    </div>
    <div class="specialty__wrap" v-if="openList === true">
      <div
        class="specialty__item"
        v-for="rate of correctRateSpeciality"
        :key="rate.id"
      >
        <p class="wrap__first">
          <input
            class="specialty__input"
            type="checkbox"
            :id="rate.id"
            :name="rate.name"
            :value="rate.theme"
            v-model="checkedRate"
          />
          <label class="specialty__label" :for="rate.id">{{
            rate.theme
          }}</label>
        </p>
        <p class="wrap__second">
          <span class="specialty__count">123</span>
        </p>
      </div>
      <button class="specialty__btn" @click="showMore = !showMore">
        {{ showMore ? "-" + " " + "less" : "+" + " " + "more" }}
        {{ PriceServ.length - 5 }}
      </button>
    </div>
    <p v-if="checkedRate.length">{{ checkedRate }}</p>
  </div>
</template>

<script>
export default {
  name: "PriceService",
  data() {
    return {
      showMore: false,
      openList: true,
      checkedRate: [],
    };
  },
  components: {},
  props: {
    PriceServ: {},
  },
  computed: {
    correctRateSpeciality() {
      if (this.showMore === true) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.PriceServ;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.PriceServ.slice(0, 5);
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
.openlist {
  color: $color-secondary;
}
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
