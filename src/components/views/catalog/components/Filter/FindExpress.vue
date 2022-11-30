<template>
  <div class="find-express">
    <h2 class="find-express__title">Find experts by...</h2>
    <div class="find-express__fields">
      <div class="find-express__field">
        <Multiselect
          class="multiselect_middle find-express__dropdown"
          v-model="findExpress.selected"
          track-by="prof"
          :searchable="false"
          :options="DocSpeciality"
          label="prof"
          :close-on-select="true"
          multiple
        >
        </Multiselect>
      </div>
      <div class="find-express__field">
        <!-- Удалить @input -->
        <Input
          size="middle"
          purpose="search"
          class="find-express__input"
          v-model="findExpress.userProblem"
          placeholder="Health problematics and/or Conditions"
        />
      </div>
      <div class="find-express__field">
        <Multiselect
          class="multiselect_middle find-express__select"
          v-model="findExpress.clinicPosition"
          track-by="prof"
          placeholder="Degree or Clinical position"
          :searchable="false"
          :options="DocCompany"
          :close-on-select="true"
        ></Multiselect>
      </div>
      <Button
        class="find-express__button"
        size="middle"
        label="Search Now"
        @click="findExpressSearch(findExpress)"
      />
    </div>
    <div class="find-express__content">
      <span
        >We’ve found 25 keywords that are relevant to your query.
        <a href="#" class="find-express__content--link">Look at this, please</a>
      </span>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "FindExpress",
  data() {
    return {
      findExpress: {
        selected: [],
        userProblem: null,
        clinicPosition: null,
      },
    };
  },
  props: {
    DocSpeciality: {},
    DocCompany: {},
  },
  components: {
    Multiselect,
  },
  methods: {
    findExpressSearch(arr) {
      let _search = arr;
      console.log(_search);
      this.$store.commit("physicin/CHANGE_SEARCH", _search);
    },
  },
};
</script>

<style lang="scss" scoped>
.find-express {
  background: #ffffff;
  padding: 33px 30px 26px;
  box-shadow: 0 5px 45px -25px rgba(226, 235, 241, 0.6);
  border-radius: 10px;
  margin-bottom: 20px;

  @include below(md) {
    padding: 15px;
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: $color-dark;
    margin-bottom: 13px;
  }
  &__fields {
    display: flex;

    @include below(lg) {
      flex-wrap: wrap;
    }
  }
  &__field {
    flex: 1 1 0%;
    max-width: 303px;
    margin-right: 20px;

    @include below(lg) {
      width: 100%;
      max-width: 100%;
      flex: auto;
      margin-right: 0;
      margin-bottom: 15px;
    }
    @include below(md) {
      margin-bottom: 10px;
    }
  }
  &__button {
    flex: none;
  }
  &__content {
    display: block;
    font-size: 13px;
    margin-top: 20px;

    &--link {
      text-decoration: none;
      color: #008e79;
    }
  }
}
</style>
