<template>
  <div class="review">
    <div class="review__avatar">
      <img
        class="review__img"
        src="../../assets/img/avatar.jpg"
        alt=""
        role="presentation"
      />
    </div>
    <div class="review__content">
      <div class="review__header">
        <div class="review__title">Avian Rizky</div>
        <div class="review__date">12 April at 09.28 PM</div>
      </div>
      <div class="review__desc">
        One of the perks of working in an international company is sharing
        knowledge with your colleagues.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style lang="scss" scoped>
.review {
  display: flex;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  &__avatar {
    flex: none;
    width: 76px;
    height: 76px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 27px;
    margin-top: 2px;

    @include below(sm) {
      width: 35px;
      height: 35px;
      margin-right: 15px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__content {
    max-width: 560px;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    @include below(sm) {
      display: block;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    font-weight: bold;
    letter-spacing: 0.1px;

    &:after {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #bfc1c5;
      margin: 0 10px 0 11px;
      position: relative;
      top: -1px;

      @include below(sm) {
        display: none;
      }
    }
  }
  &__date {
    font-size: 12px;
    color: #abadb2;
  }
  &__desc {
    letter-spacing: 0.1px;
    color: #6b6f78;
  }
}
</style>
