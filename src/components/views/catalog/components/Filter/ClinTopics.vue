<template>
  <div class="filters">
    <div class="filters__top"></div>
    <div class="specialty-filter">
      <h2 class="specialty-filter__title" :class="{ openlist: openList }">
        Сlinical threads and topics
      </h2>
      <span
        class="specialty-filter__arrow"
        :class="{ openlist: openList }"
        @click="openList = !openList"
      >
        <!-- ArrowUp -->Arrow
      </span>
    </div>
    <div class="specialty__wrap" v-if="openList === true">
      <div
        class="specialty__item"
        v-for="clin of correctClinicalTheme"
        :key="clin.id"
      >
        <p class="wrap__first">
          <input
            style="display:none"
            class="specialty__input"
            type="checkbox"
            :id="clin.id"
            :name="clin.name"
            :value="clin.theme"
            v-model="checkedClinGroup"
          />
          <label class="specialty__label" :for="clin.id">{{
            clin.theme
          }}</label>
        </p>
      </div>
      <button class="specialty__btn" @click="showMore = !showMore">
        {{ showMore ? "-" + " " + "less" : "+" + " " + "more" }}
        {{ ClinicalTheme.length - 5 }}
        specialties
      </button>
      <p v-if="checkedClinGroup.length">{{ checkedClinGroup }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClinTopics",
  data() {
    return {
      showMore: false,
      openList: true,
      checkedClinGroup: [],
    };
  },
  props: {
    ClinicalTheme: {},
  },
  computed: {
    correctClinicalTheme() {
      if (this.showMore === true) {
        return this.ClinicalTheme;
      } else {
        return this.ClinicalTheme.slice(0, 5);
      }
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
