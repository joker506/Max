<template>
  <div :class="['card', `card_${size}`]">
    <div
      class="card__cover"
      :style="{
        'background-color': 'white',
      }"
    >
      <button
        v-if="isRegistr"
        @click="$router.push('/')"
        class="card__button-link"
      >
        <Icon class="card__button-icon" name="icon-settings" />
      </button>
    </div>
    <div class="card__body">
      <div class="card__heading">
        <Avatar size="middle" :image="avatar" class="card__avatar" />
        <div class="card__caption">
          <div class="card__title">Dr. {{ name }}</div>
          <div class="card__login">{{ adress }}</div>
          <span class="card__physicin">Physician</span>
        </div>
        <Button
          outline
          :to="isRegistration ? '/consultation' : '/dashboard/aplication'"
          label="Application for Consultant status"
          variant="outline"
        />
      </div>
      <Tooltip />
      <div class="card__position">
        <div class="card__position-wrap">
          <span> 52 y. o.</span>
        </div>
        <div class="card__position-wrap">
          <span>Male</span>
        </div>
      </div>
      <div class="card__position">
        <div class="card__position-wrap">
          <span>32 Yrs Exp</span>
        </div>
        <div class="card__position-wrap">
          <Icon />
          <span> Los Angeles, CA, USA</span>
        </div>
      </div>

      <div class="card__footer" v-if="hasFooter">
        <Speciality
          v-if="isRegistr"
          title="Langauges Spoken"
          :spec="state.languages"
          prof="true"
        />
        <SkillLevel v-if="isRegistr" />

        <Speciality
          v-if="isRegistr"
          title="Specialty"
          :spec="state.specialty"
          prof="true"
        />
        <Speciality
          v-if="isRegistr"
          title="Age group of patients"
          :spec="state.ageGroup"
        />
        <Speciality
          v-if="isRegistr"
          title="Degree and clinical position"
          :spec="state.ageGroup"
        />
        <!-- <Toggle /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from "@/components/views/dashboard/components/Tooltip";
import SkillLevel from "@/components/views/dashboard/components/SkillLevel";
import Speciality from "@/components/views/dashboard/components/Speciality";
import { mapState } from "vuex";

export default {
  name: "DashCard",
  data() {
    return {
      isRegistration: "",
      avatar: require("@/assets/img/avatar.jpg"),
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
  components: {
    Tooltip,
    SkillLevel,
    Speciality,
  },
  computed: {
    ...mapState({
      state: (state) => state.speciality,
      isRegistr: (state) => state.physicin.registrUser,
    }),
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
    padding: 20px;
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
    position: relative;
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
    flex-direction: column;
    align-items: center;
    //text-align: center;

    @include below(md) {
      padding: 0 15px 10px;
    }
  }
  &__position {
    display: flex;
    justify-content: space-between;
    padding: 20px 16px;
    border-bottom: 2px solid #f8f8f8;
    &-wrap {
      width: 50%;
    }
  }
  &__avatar {
    margin-top: -35px;
    margin-right: 9px;
    border: 3px dashed #00cbad;

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
    padding-bottom: 15px;

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
  &__physicin {
    color: #92929d;
    text-transform: capitalize;
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
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-top: 2px solid #f8f8f8;
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
    margin-left: auto;
    display: block;
    width: 32px;
    height: 32px;
    //background: #f8f8f8;
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
        //background-color: $color-primary;
      }
    }
  }
  &__button-icon {
    font-size: 32px;

    @include below(md) {
      font-size: 12px;
    }
  }
}
</style>
