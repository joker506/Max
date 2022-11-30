<template>
  <div class="cards">
    <swiper class="cards__slider" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="cards__item" v-for="(item, index) in 8" :key="index">
        <Card />
      </swiper-slide>
    </swiper>
    <div class="cards__controls">
      <button class="cards__control cards__control_prev" slot="button-prev">
        <Icon :name="prevIcon" />
      </button>
      <button class="cards__control cards__control_next" slot="button-next">
        <Icon :name="nextIcon" />
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Cards",
  props: {},
  data() {
    return {
      swiperOptions: {
        speed: 600,
        slidesPerView: 1,
        loop: true,
        simulateTouch: false,
        spaceBetween: 19,
        navigation: {
          nextEl: '.cards__control_next',
          prevEl: '.cards__control_prev'
        },
        breakpoints: {
          992: {
            slidesPerView: 'auto'
          },
          576: {
            slidesPerView: 2
          }
        }
      },
      prevIcon: 'icon-prev-arrow',
      nextIcon: 'icon-next-arrow',
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.cards {
  position: relative;

  &__slider {
    margin: 0 37px;

    @include below(md) {
      margin: 0;
    }
  }
  &__item {
    height: auto;

    @include above(lg) {
      max-width: 305px;
    }
  }
  &__controls {
    position: absolute;
    top: 0;
    left: -10px;
    right: -10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;

    @include below(md) {
      position: static;
      height: auto;
      margin-top: 19px;
    }
  }
  &__control {
    pointer-events: auto;
    height: 100%;
    width: 32px;
    border: 1px solid #d5d6d9;
    border-radius: 4px;
    transition: background-color $transition;
    font-size: 13px;
    color: #6b6f78;

    @include below(md) {
      width: 100%;
      height: 32px;
      border-color: #f8f8f8;
      font-size: 12px;
    }

    &:hover {
      @include above(lg) {
        background-color: #f8f8f8;
      }
    }

    &_prev {
      @include below(md) {
        margin-right: 5px;
      }
    }
    &_next {
      @include below(md) {
        margin-left: 5px;
      }
    }

    .icon {
      &.icon_prev-arrow {
        left: -1px;
      }
    }
  }
}
</style>
