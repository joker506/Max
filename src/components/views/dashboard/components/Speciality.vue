<template>
  <div class="specialty">
    <div class="specialty__block">
      <h2 class="specialty__block-title">{{ title }}</h2>
    </div>
    <div v-if="title === 'Langauges Spoken'" class="specialty__block">
      <span
        class="specialty__block-prof"
        v-for="(item, index) in spec"
        :key="index"
        >{{ item.prof }},
      </span>
    </div>
    <div v-if="title === 'Specialty'" class="specialty__block">
      <span
        class="specialty__block-prof"
        v-for="(item, index) in spec"
        :key="index"
        >{{ item.prof }} |
      </span>
    </div>
    <div v-if="title === 'Age group of patients'" class="specialty__block">
      <ul>
        <li
          v-for="(item, index) in spec"
          :key="index"
          class="specialty__block-prof"
        >
          • {{ item.age }}
        </li>
      </ul>
    </div>
    <div
      v-if="title === 'Degree and clinical position'"
      class="specialty__block"
    >
      <ul>
        <li
          v-for="(item, index) in spec.slice(0, 3)"
          :key="index"
          class="specialty__block-prof"
        >
          {{ item.age }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Speciality",
  props: ["title", "spec", "prof"],
};
</script>

<style lang="scss" scoped>
.specialty {
  width: 100%;
  margin-top: 30px;
  &__block {
    &-title {
      font-size: 13px;
      line-height: 16px;
      color: #abadb2;
    }
    &-age {
      list-style: disc;
    }
  }
}
</style>
