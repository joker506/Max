<template>
  <div class="level">
    <div class="level__block">
      <h2 class="level__block-title">MEDD rank</h2>
    </div>
    <div class="level__range">
      <div class="level__range-slider">
        <div class="shell" v-for="(item, index) in 4" :key="index">
          <div class="bar" :style="{ width: val + 'px' }"></div>
        </div>
      </div>
      <div class="level__range-wrap">
        <span class="level__range-title">{{ rangeMedd }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillLevel",
  data() {
    return {
      val: 30,
    };
  },

  components: {},
  computed: {
    rangeMedd() {
      let val = this.val;
      if (val >= 3) {
        return "Senior";
      } else if (val >= 2 && val < 3) {
        return "Middle";
      } else {
        return "no rank yet";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.level {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  &__block {
    &-title {
      font-size: 13px;
      line-height: 16px;
      color: #abadb2;
    }
  }
  &__range {
    display: flex;
    justify-content: space-between;
    &-slider {
      width: 210px;
      display: flex;
      justify-content: space-between;
      padding-top: 0;
      align-items: center;
    }
    &-title {
      color: $color-primary;
    }
  }
  &__slide {
    width: 50px;
  }
}
.shell {
  height: 5px;
  width: 50px;
  border-radius: 13px;
  background: #ececf1;
}
.bar {
  background: #00cbad;
  border-radius: 5px;
  height: 5px;
  width: 15px;
}
</style>
