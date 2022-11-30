<template>
  <div class="tabs">
    <div class="tabs__header">
      <ul class="tabs__items">
        <button
          class="arrow-left"
          @click="selected = 'General'"
          :class="{ arrow_active: selected !== 'General' }"
        >
          <Icon class="tabs__arrow" name="icon-arrowPrev" />
          <span class="arrow__label">Previous step</span>
        </button>
        <div class="wrap">
          <li
            v-for="(item, index) in activity"
            :key="index"
            @click="selected = item.name"
            :class="{ physician__item_active: item.name == selected }"
            class="tabs__item"
          >
            <a class="tabs__item-link ">
              <span
                class="circle"
                :class="{ circle_active: item.name == selected }"
              />
              {{ item.title }}</a
            >
            <span class="line" v-if="!index == 1"></span>
          </li>
        </div>
        <button
          class="arrow-right"
          @click="selected = 'Conditions'"
          :class="{ arrow_active: selected !== 'Conditions' }"
        >
          <span class="arrow__label">Next step</span>
          <Icon class="tabs__arrow" name="icon-arrowNext" />
        </button>
      </ul>
    </div>
    <div class="physician__body">
      <keep-alive>
        <component :is="selected"></component>
      </keep-alive>
    </div>
    <AplicationPanel @changeBtn="qwe" />
  </div>
</template>

<script>
import AplicationPanel from "@/components/blocks/AplicationPanel";
import General from "@/components/views/profile/components/General";
import Conditions from "@/components/views/profile/components/Conditions";

export default {
  name: "TabsBlock",
  components: {
    General,
    Conditions,
    AplicationPanel,
  },

  data() {
    return {
      selected: "General",
      activity: [
        {
          id: 0,
          title: "GENERAL",
          name: "General",
        },
        {
          id: 1,
          title: "REQUIRED Medical DATA",
          name: "Conditions",
        },
      ],
    };
  },
  methods: {
    qwe() {
      console.log("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  @include below(md) {
    display: none;
  }
}
.circle {
  display: inline-flex;
  vertical-align: middle;
  border-radius: 100%;
  width: 17px;
  height: 17px;
  border: 1px solid #bfc1c5;
  margin-right: 10px;
  background: #bff2ea;
  &_active {
    background: $color-primary;
  }
}
.line {
  display: inline-flex;
  border: 1px solid grey;
  width: 100px;
  vertical-align: middle;
  margin-left: 30px;
}
.tabs {
  border-radius: 10px;
  &__header {
    display: flex;
    border-bottom: 2px solid #f8f8f8;
    margin-bottom: 30px;
    background: #ffffff;
  }
  &__items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    //background: #ffffff;
    @include below(md) {
      flex-direction: column;
    }
  }
  &__item {
    //margin-right: 30px;
    padding: 20px;
    // border-bottom: 3px solid transparent;
    // &:hover {
    //   border-bottom: 3px solid #00cbad;
    // }
    &_active {
      border-bottom: 2px solid#00CBAD;
    }
    &-link {
      color: #565b65;
      @include below(md) {
        font-size: 10px;
      }
    }
  }
  &__body {
    //padding: 20px;
    padding-top: 30px;
  }
}
.arrows__wrap {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  background: #fafafb;
}
.tabs__arrow {
  width: 24px;
  height: 24px;
}

.arrow {
  &-left {
    margin-left: 3%;
    color: transparent;
  }
  &-right {
    margin-right: 3%;
    color: transparent;
  }

  &_active {
    color: $color-primary;
  }
  &__label {
    padding: 0 10px;
    vertical-align: middle;
  }
}

.body__title {
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  color: #abadb2;
}
.bottom {
  margin-bottom: 50px;
}
</style>
