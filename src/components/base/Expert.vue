<template>
  <div class="expert">
    <div
      class="expert__cover"
      :style="{
        'background-image':
          'url(' + require('../../assets/img/cover-2.jpg') + ')',
      }"
    >
      <span class="expert__badge">$1 240</span>
    </div>
    <div class="expert__body">
      <div class="expert__title">Dr. Charlez Norman Friedlander</div>
      <div class="expert__tags">
        <div class="expert__tags-wrap">
          Scientific topic #1 • Career topic #48 • Scientific interests #4 •
          Scientific topic #4
        </div>
      </div>
      <div class="expert__control">
        <Button class="expert__button" variant="light" label="View more" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {},
};
</script>

<style lang="scss" scoped>
.expert {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &__cover {
    flex: none;
    height: 70px;
    border-radius: 6px 6px 0 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
  }
  &__badge {
    background: #00a28a;
    line-height: 1;
    position: absolute;
    top: 15px;
    right: -3px;
    display: flex;
    align-items: center;
    padding: 2px 4px 0 0;
    height: 28px;
    border-radius: 0 2px 2px 0;
    color: #ffffff;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.1px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 17px;
      right: 98%;
      background-color: inherit;
      clip-path: polygon(100% 0, 100% 100%, 0% 100%, 77% 50%, 0% 0%);
    }
  }
  &__body {
    flex: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #f8f8f8;
    border-top: none;
    padding: 16px 14px 10px;
    border-radius: 0 0 6px 6px;
  }
  &__title {
    flex: none;
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 0.2px;
    color: $color-dark;
    margin-bottom: 10px;
  }
  &__tags {
    flex: auto;
    line-height: 1.35;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.1px;
    color: #6b6f78;
  }
  &__tags-wrap {
    display: flex;
    flex-wrap: wrap;
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
  &__control {
    padding-top: 14px;
    margin: 0 -5px;
  }
  &__button {
    font-weight: 600;
    width: 100%;
  }
}
</style>
