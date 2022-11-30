<template>
  <div class="physician">
    <div class="physician__header">
      <ul class="physician__items">
        <li
          v-for="(item, index) in activity"
          :key="index"
          @click="selected = item.name"
          :class="{ physician__item_active: item.name == selected }"
          class="physician__item"
        >
          <a class="physician__item-link ">{{ item.title }}</a>
        </li>
      </ul>
    </div>

    <div class="physician__body">
      <h2 class="body__title">Scientific and career interests of consultant</h2>
      <component v-bind:is="selected"></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfessActivity",
  data() {
    return {
      selected: "List",
      activity: [
        {
          id: 0,
          title: "Clinical threads and Career topics",
          name: "List",
        },
        {
          id: 1,
          title: "Performed procedures",
          name: "Quote",
        },
        {
          id: 2,
          title: "Treated conditions",
          name: "Notation",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.physician {
  background: #ffffff;
  border-radius: 10px;
  &__header {
    border-bottom: 2px solid #f8f8f8;
  }
  &__items {
    display: flex;
  }
  &__item {
    margin-right: 30px;
    padding: 20px;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #00cbad;
    }
    &_active {
      border-bottom: 2px solid#00CBAD;
    }
    &-link {
      color: #80848c;
    }
  }
  &__body {
    padding: 20px;
    padding-top: 30px;
  }
}
.body__title {
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  color: #abadb2;
}
</style>
