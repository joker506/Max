<template>
  <div :class="['card', `card_${size}`]">
    <div
      class="card__cover"
      :style="{
        'background-image':
          'url(' + require('../../assets/img/cover-2.jpg') + ')',
      }"
    ></div>
    <div class="card__body">
      <div class="card__heading">
        <Avatar size="middle" :image="avatar" class="card__avatar" />
        <div class="card__caption">
          <div class="card__title">Dr. {{ name }}</div>
          <div class="card__login">{{ adress }}</div>
        </div>
      </div>
      <div class="card__tags">
        <div class="card__tags-wrap">
          Scientific topic #1 • Career topic #48 • Scientific interests #4 •
          Scientific topic #4 • Career topic #96 • Scientific interests #24 •
          Scientific topic #8
        </div>
      </div>
      <div class="card__details">
        <ul class="card__details-list">
          <li class="card__details-item">
            <Icon class="card__details-icon" name="icon-specialization" />
            <span class="card__details-legend"
              >Gastroenterology | Obstetrics & Gynecology | Reproductive
              Endocrinology</span
            >
          </li>
          <li class="card__details-item">
            <Icon class="card__details-icon" name="icon-place" />
            <span class="card__details-legend">{{ city }} | 3+ Yrs Exp</span>
          </li>
        </ul>
      </div>
      <div class="card__footer" v-if="hasFooter">
        <div class="card__price">1200 $</div>
        <ul class="card__buttons">
          <li class="card__button">
            <button data-tooltip="Share" class="card__button-link">
              <Icon class="card__button-icon" name="icon-share" />
            </button>
          </li>
          <li class="card__button">
            <button data-tooltip="Add to compare" class="card__button-link">
              <Icon class="card__button-icon" name="icon-compare" />
            </button>
          </li>
          <li class="card__button">
            <button data-tooltip="Like" class="card__button-link">
              <Icon class="card__button-icon" name="icon-likes" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      avatar: require("../../assets/img/avatar.jpg"),
    };
  },
  props: {
    size: {
      type: String,
      default: "middle", // middle
    },
    hasFooter: {
      type: Boolean,
      default: false,
    },
    name: null,
    adress: null,
    city: {
      type: String,
      default: "CITY",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  $this: &;

  &__cover {
    flex: none;
    width: 100%;
    height: 79px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px 10px 0 0;

    #{$this}_middle & {
      @include above(md) {
        height: 100px;
      }
    }

    @include below(md) {
      height: 60px;
    }
  }
  &__body {
    flex: auto;
    display: flex;
    flex-direction: column;
    border-top: none;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    border: 1px solid #d5d6d9;

    #{$this}_middle & {
      @include above(md) {
        border: none;
      }
    }
  }
  &__heading {
    display: flex;
    padding: 0 20px 16px;
    border-bottom: 2px solid #f8f8f8;
    flex: none;

    @include below(md) {
      padding: 0 15px 10px;
    }
  }
  &__avatar {
    margin-top: -35px;
    margin-right: 9px;

    @include below(md) {
      margin-top: -15px;
    }
    #{$this}_middle & {
      @include above(md) {
        margin-top: -25px;
        margin-right: 14px;
        width: 120px;
        height: 120px;
      }
    }
  }
  &__caption {
    padding-top: 11px;

    @include below(md) {
      padding-top: 7px;
    }

    #{$this}_middle & {
      @include above(md) {
        padding-top: 20px;
      }
    }
  }
  &__title {
    font-weight: bold;
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.2px;
    color: $color-dark;
    margin-bottom: 2px;

    #{$this}_middle & {
      @include above(md) {
        font-size: 16px;
        line-height: 1.2;
      }
    }
  }
  &__login {
    font-size: 12px;
    color: $color-primary;

    #{$this}_middle & {
      @include above(md) {
        font-size: 14px;
      }
    }
  }
  &__tags-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  &__tags {
    flex: auto;
    padding: 16px 20px 12px;
    line-height: 1.42;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: #6b6f78;
    border-bottom: 2px solid #f8f8f8;

    @include below(md) {
      padding: 12px 15px;
    }

    #{$this}_middle & {
      @include above(md) {
        font-size: 14px;
        line-height: 1.5;
      }
    }
  }
  &__tags-item {
    margin-right: 3px;

    &:after {
      content: "•";
    }

    &:last-child {
      margin-right: 0;

      &:after {
        content: none;
      }
    }
  }
  &__details {
    padding: 20px;
    flex: none;

    @include below(md) {
      padding: 12px 15px;
    }
  }
  &__details-item {
    display: flex;
    align-items: center;

    & + & {
      margin-top: 5px;
    }
  }
  &__details-icon {
    flex: none;
    font-size: 16px;
    margin-right: 10px;
    position: relative;
    top: -1px;
  }
  &__details-legend {
    font-size: 12px;
    line-height: 1.25;
    color: #95989f;

    #{$this}_middle & {
      @include above(md) {
        font-size: 14px;
      }
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #f8f8f8;
    padding: 20px;

    @include below(md) {
      padding: 12px 15px;
    }
  }
  &__price {
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.1px;
    color: $color-dark;

    @include below(md) {
      font-size: 16px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
  }
  &__button {
    & + & {
      margin-left: 5px;
    }
  }
  &__button-link {
    display: block;
    width: 32px;
    height: 32px;
    background: #f8f8f8;
    border-radius: 6px;
    color: #92929d;
    transition: color $transition, background-color $transition;

    @include below(md) {
      width: 28px;
      height: 28px;
    }

    &:hover {
      @include above(lg) {
        color: #ffffff;
        background-color: $color-primary;
      }
    }
  }
  &__button-icon {
    font-size: 14px;

    @include below(md) {
      font-size: 12px;
    }
  }
}
</style>
