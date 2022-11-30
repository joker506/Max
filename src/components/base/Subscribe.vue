<template>
  <div class="subscribe">
    <div class="subscribe__title">Save this search</div>
    <div class="subscribe__desc">
      Get notification about new experts in your clinic case.
    </div>
    <input
      class="subscribe__input"
      type="email"
      name="email"
      placeholder="Type Your Email"
    />
    <Button variant="warning subscribe__button" label="Subscribe" />
  </div>
</template>

<script>
export default {
  name: "Subscribe",
};
</script>

<style lang="scss" scoped>
.subscribe {
  background: #414652;
  border-radius: 6px;
  color: #f8f8f8;
  padding: 25px 20px;
  margin-bottom: 35px;

  &__title {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__desc {
    max-width: 210px;
    line-height: 1.15;
    margin-bottom: 20px;
  }
  &__input {
    width: 100%;
    padding: 0 13px;
    border: 1px solid #d5d6d9;
    border-radius: 6px;
    height: 38px;
    margin-bottom: 10px;

    @include placeholder {
      color: #abadb2;
    }
  }
  &__button {
    width: 100%;
  }
}
</style>
