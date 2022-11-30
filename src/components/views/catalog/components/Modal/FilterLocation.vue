<template>
  <modal :height="600" :adaptive="true" name="FilterLocation">
    <div class="special">
      <div class="special__top">
        <div class="special__wrap">
          <h2 class="special__title">Location</h2>
          <button @click="$modal.hide('FilterLocation')">
            ❌
          </button>
        </div>
      </div>
      <div class="filter">
        <div class="filter__wrap">
          <div class="">
            <h3 class="filter__title">Country or Region</h3>
            <!-- <Input
              v-model.trim="searchRegion"
              placeholder="Country or Region"
              @input="searchItem"
            /> -->
            <autocomplete
              :search="searchCountry"
              auto-select
              :get-result-value="getResultValue"
              placeholder="Country or Region"
              aria-label="Country or Region"
            ></autocomplete>
          </div>

          <div class="">
            <h3 class="filter__title">City or town</h3>
            <!-- <Input v-model.trim="searchTown" placeholder="City or town" /> -->
            <autocomplete
              :search="searchTown"
              auto-select
              :get-result-value="getResultValueCountry"
              placeholder="City or town"
              aria-label="City or town"
            ></autocomplete>
          </div>
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
import Autocomplete from "@trevoreyre/autocomplete-vue";

export default {
  name: "FilterName",
  data() {
    return {
      //   searchRegion: " ",
      //   searchTown: " ",
      isCheckAll: false,
      checkedSpeciality: [],
    };
  },
  components: {
    Autocomplete,
  },
  props: {
    DocSpeciality: {},
    AgeGroupPatients: {},
  },

  methods: {
    searchCountry(input) {
      if (input.length < 1) {
        return [];
      }
      return this.AgeGroupPatients.filter((animal) => {
        return animal.age.toLowerCase().startsWith(input.toLowerCase());
      });
    },
    searchTown(input) {
      if (input.length < 1) {
        return [];
      }
      return this.DocSpeciality.filter((animal) => {
        return animal.prof.toLowerCase().startsWith(input.toLowerCase());
      });
    },
    getResultValue(result) {
      return result.age;
    },
    getResultValueCountry(result) {
      return result.prof;
    },
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
    margin-top: 30px;
    background: #ffffff;
  }
  &__title {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
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
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: left;
    color: #2c323f;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  &__input {
    margin-right: 12px;
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
