<template>
  <modal :height="700" :adaptive="true" name="FilterName">
    <div class="special">
      <div class="special__top">
        <div class="special__wrap">
          <h2 class="special__title">Filtr name</h2>
          <button @click="$modal.hide('FilterName')">
            ❌
          </button>
        </div>
      </div>
      <div class="filter">
        <div class="filter__wrap">
          <h3 class="filter__title">List of something</h3>
          <div
            class="filter__items"
            v-for="specialty of DocSpeciality"
            :key="specialty.id"
          >
            <p>
              <input
                class="filter__input"
                type="checkbox"
                :id="specialty.id"
                :name="specialty.name"
                :value="specialty.prof"
                v-model="checkedSpeciality"
              />
              <label class="filter__label" :for="specialty.id">{{
                specialty.prof
              }}</label>
            </p>
            <p>
              <span class="filter__result">123 results</span>
            </p>
          </div>
          <button class="specialty__btn" @click="selectAll">Select All</button>
        </div>
      </div>
      <div class="filter__bottom">
        <div class="special__wrap special__wrap--bottom">
          <Button class="btn btn__filter" label="Apply" />
          <Button class="btn btn__filter-cancel" label="Cancel" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: "FilterName",
  data() {
    return {
      isCheckAll: false,
      checkedSpeciality: [],
    };
  },
  props: {
    DocSpeciality: {},
  },
  methods: {
    selectAll() {
      this.isCheckAll = !this.isCheckAll;
      this.checkedSpeciality = [];
      if (this.isCheckAll) {
        for (let i in this.DocSpeciality) {
          this.checkedSpeciality.push(this.DocSpeciality[i].prof.toString());
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.special {
  border-radius: 10px;
  &__top {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f8f8f8;
    //margin-top: 30px;
    background: #ffffff;
  }
  &__title {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    text-align: left;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 28px;
    &--body {
      flex-direction: column;
    }
    &--bottom {
      justify-content: start;
      margin-right: 30px;
    }
  }
}
.filter {
  margin-top: 30px;
  &__wrap {
    width: 95%;
    margin: auto;
  }
  &__title {
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
    margin-bottom: 25px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  &__input {
    width: 17px;
    height: 17px;
    margin-right: 12px;
  }
  &__label {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    vertical-align: text-bottom;
  }
  &__result {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #bfc1c5;
  }
  &__bottom {
    width: 95%;
    margin: auto;
    margin-top: 30px;
  }
}
.specialty__btn {
  font-weight: 600;
  text-align: left;
  color: #00cbad;
}
.btn__filter {
  margin-right: 30px;
  &-cancel {
    border: 1px solid #bfc1c5;
    color: #6b6f78;
    background: #ffffff;
  }
}
</style>
