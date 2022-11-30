<template>
  <div class="slider">
    <div class="slider__header">
      <div class="slider__title">Recommended experts</div>
      <a class="slider__more" href="#">More</a>
    </div>
    <div class="slider__body">
      <swiper class="slider__container" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="slider__item"
          v-for="(item, index) in 8"
          :key="index"
        >
          <Expert />
        </swiper-slide>
      </swiper>
      <div class="slider__controls">
        <button
          class="slider__control slider__control_prev"
          slot="button-prev"
          icon="Icon"
          label=""
        >
          <Icon :name="prevIcon" />
        </button>
        <button
          class="slider__control slider__control_next"
          slot="button-next"
          label=""
        >
          <Icon :name="nextIcon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Slider",
  props: {},
  data() {
    return {
      swiperOptions: {
        speed: 600,
        slidesPerView: 1,
        loop: true,
        simulateTouch: false,
        spaceBetween: 5,
        navigation: {
          nextEl: ".slider__control_next",
          prevEl: ".slider__control_prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
      prevIcon: "icon-prev-arrow",
      nextIcon: "icon-next-arrow",
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.slider {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  @include below(sm) {
    padding: 15px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  &__title {
    font-weight: 600;
    font-size: 18px;
    color: $color-dark;

    @include below(sm) {
      font-size: 15px;
    }
  }
  &__more {
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: $color-primary;
  }
  &__body {
    position: relative;
    min-width: 0;
  }
  &__container {
    margin: 0 50px;
    position: relative;
    z-index: 1;

    @include below(md) {
      margin: 0;
    }
  }
  &__item {
    height: auto;
    padding-right: 3px;
  }
  &__controls {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;

    @include below(md) {
      position: static;
      margin-top: 20px;
    }
  }
  &__control {
    width: 32px;
    height: 100%;
    border: 1px solid #d5d6d9;
    border-radius: 4px;
    font-size: 12px;
    color: #6b6f78;
    pointer-events: auto;
    transition: background-color $transition;

    @include below(md) {
      width: 100%;
      height: 32px;
      border-color: #f8f8f8;
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
  }
}
</style>
