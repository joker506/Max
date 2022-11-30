<template>
  <div class="track">
    <div class="track__header">
      <div class="track__date">2020</div>
      <div class="track__topic">Selected publication (research article)</div>
    </div>
    <div class="track__body">
      <div class="track__caption">
        <div class="track__title">
          Updating of quality requirements for gastric endoscopy examination
        </div>
        <div class="track__detail">
          <svg
            class="icon icon_place track__detail-icon"
            height="1em"
            width="1em"
          >
            <use xlink:href="#icon-place"></use>
          </svg>
          <div class="track__legend">Los Angeles, CA, USA</div>
        </div>
      </div>
      <div class="track__group">
        <div class="track__legend">Published in</div>
        <div class="track__desc">
          The American Journal of Gastroenterology (AJG)
        </div>
      </div>
      <div class="track__group">
        <div class="track__legend">DOI</div>
        <div class="track__desc">#115(11):1786-1796, November 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Track",
};
</script>

<style lang="scss" scoped>
.track {
  max-width: 565px;
  border: 1px solid #d5d6d9;
  border-radius: 10px;
  padding: 20px 19px 14px;
  margin-bottom: 20px;
  margin-left: 60px;
  position: relative;

  @include below(sm) {
    margin-left: 35px;
    padding: 15px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "";
    position: absolute;
    right: 100%;
    top: 27px;
    height: 1px;
    width: 40px;
    background-color: #d5d6d9;

    @include below(sm) {
      width: 16px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @include below(sm) {
      display: block;
    }
  }
  &__date {
    color: #80848c;
    display: flex;
    align-items: center;
    font-size: 12px;

    &:after {
      content: "";
      flex: none;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #abadb2;
      margin: 0 10px;

      @include below(sm) {
        display: none;
      }
    }
  }
  &__topic {
    letter-spacing: 0.1px;
    color: $color-primary;
  }
  &__body {
  }
  &__caption {
    margin-bottom: 12px;
  }
  &__title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.35;
    letter-spacing: 0.2px;

    @include below(md) {
      font-size: 16px;
    }
    @include below(sm) {
      font-size: 14px;
    }
  }
  &__group {
    letter-spacing: 0.1px;
    margin-bottom: 9px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  &__legend {
    color: #80848c;
    letter-spacing: 0.1px;
  }
  &__desc {
    font-weight: bold;
    font-size: 15px;

    @include below(sm) {
      font-size: 13px;
    }
  }
  &__detail {
    display: flex;
    align-items: flex-start;
    margin-top: 3px;
  }
  &__detail-icon {
    margin-right: 10px;
    font-size: 18px;
  }
}
</style>
