<template>
  <div class="tooltip" v-show="isShow">
    <div class="tooltip__content" v-if="!isRegistration">
      Please, fill out the application for obtaining the status of a consultant
      in clinical cases
    </div>
    <div class="tooltip__content" v-if="isRegistration">
      <span>Congratulations! </span> <br />
      Your Consultant status has been approved
    </div>
    <!-- <div class="tooltip__content">
      Earlier you have {filled out}/{begun filling out} Application for
      Consultant status
      <span>We have a few additional questions</span>
    </div> -->

    <!-- <div class="tooltip__content">
      Earlier you have begun filling out Consultation page but haven’t confirmed
      it
    </div> -->

    <Button
      :to="isRegistration ? '/consultation' : '/dashboard/aplication'"
      :label="
        isRegistration
          ? 'Create your Consultation Page'
          : 'Go to Application page'
      "
      class="tooltip__btn"
    />
    <button @click="isShow = false" v-if="isRegistration">
      <Icon class="tooltip__close" name="icon-close" />
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tooltip",
  data() {
    return {
      // isRegistration: false,
      isShow: true,
    };
  },
  computed: {
    ...mapState({
      isRegistration: (state) => state.physicin.registrUser,
    }),
  },
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  color: white;
  top: 240px;
  z-index: 1;
  left: 38px;
  min-height: 145px;
  width: 280px;
  background: #00b79c;
  border-radius: 10px;
  box-shadow: 0px -10px 20px rgba(143, 149, 163, 0.3);
  @include below(md) {
    position: relative;
    top: 0px;
    left: 0;
    margin: auto;
  }
  &__content {
    padding: 30px 20px 0;
    width: 100%;
  }
  &__btn {
    background: #00b79c;
    font-weight: normal;
    text-decoration: underline !important;
  }
  &__close {
    position: absolute;
    top: 24px;
    right: 15px;
    cursor: pointer;
  }
}
</style>
