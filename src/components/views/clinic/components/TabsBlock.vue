<template>
  <div class="tabs-block">
    <div class="tabs-block__header">
      <ul class="tabs-block__controls">
        <li class="tabs-block__control tabs-block__control_active">
          <button
            class="tabs-block__control-link"
            data-tab-title="About and Specialization"
          ></button>
        </li>
        <li class="tabs-block__control">
          <button
            class="tabs-block__control-link"
            data-tab-title="Performed procedures"
          ></button>
        </li>
        <li class="tabs-block__control">
          <button
            class="tabs-block__control-link"
            data-tab-title="Treated conditions"
          ></button>
        </li>
        <li class="tabs-block__control">
          <button
            class="tabs-block__control-link"
            data-tab-title="Clinic units (filials)"
          ></button>
        </li>
      </ul>
    </div>
    <div class="tabs-block__body">
      <div class="tabs-block__content tabs-block__content_active">
        <Quote />
        <div class="tabs-block__row">
          <div class="tabs-block__col">
            <div class="tabs-block__subtitle">Specialization</div>
            <List />
          </div>
          <div class="tabs-block__col">
            <div class="tabs-block__subtitle">Age group of patients</div>
            Должен быть список
          </div>
        </div>
      </div>
      <div class="tabs-block__content">2</div>
      <div class="tabs-block__content">3</div>
      <div class="tabs-block__content">
        <Offices />
      </div>
    </div>
  </div>
</template>

<script>
import Offices from "@/components/views/clinic/components/Offices";

export default {
  name: "TabsBlock",
  props: {},
  components: {
    Offices,
  },
};
</script>

<style lang="scss" scoped>
.tabs-block {
  margin-top: 30px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;

  @include below(md) {
    margin-bottom: 20px;
  }

  $this: &;

  &__header {
    border-bottom: 2px solid #f8f8f8;
    position: relative;

    &:after {
      @include below(lg) {
        content: "";
        position: absolute;
        pointer-events: none;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50px;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0) 1%,
          rgba(255, 255, 255, 1) 100%
        );
      }
    }
  }
  &__controls {
    display: flex;
    align-items: center;

    @include below(lg) {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__control {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $color-primary;
      border-radius: 5px 5px 0 0;
      opacity: 0;
      visibility: hidden;
      transition: opacity $transition, visibility $transition;

      @include below(md) {
        height: 2px;
      }
    }

    &_active {
      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__control-link {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    padding: 4px 21px 0;
    font-size: 14px;
    letter-spacing: 0.1px;
    color: #80848c;
    transition: color $transition, font-weight $transition;

    @include below(md) {
      padding: 0 10px;
      height: 50px;
    }

    #{$this}__control_active & {
      color: #565b65;
    }

    &:hover {
      @include above(lg) {
        color: #565b65;
      }
    }

    &:before,
    &:after {
      content: attr(data-tab-title);
      white-space: nowrap;
    }
    &:before {
      #{$this}__control_active & {
        opacity: 0;
      }
    }
    &:after {
      font-weight: bold;
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: 2px;
      transform: translate(-50%, -50%);

      @include below(md) {
        margin-top: 0;
      }

      #{$this}__control_active & {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__body {
    padding: 17px 20px 29px;

    @include below(md) {
      padding: 15px;
    }
  }
  &__content {
    display: none;

    &_active {
      display: block;
    }
  }
  &__subtitle {
    font-size: 13px;
    line-height: 1.25;
    color: #abadb2;
    margin-bottom: 9px;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
  &__col {
    width: percentage(1/2);
    padding-right: 40px;

    @include below(md) {
      padding-right: 20px;
    }
    @include below(sm) {
      width: percentage(1/1);
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
