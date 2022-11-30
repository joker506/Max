<template>
  <div class="popap">
    <div class="modal">
      <div class="modal__wrap">
        <div class="modal__top">
          <h2 class="modal__title">Legal name or Cover name?</h2>
          <button @click="closeModal">
            <Icon
              name="icon-close"
              width="24px"
              height="24px"
              color="#6B6F78"
            />
          </button>
        </div>
        <div class="modal__body">
          <h3 class="modal__subtitle">What difference is it?</h3>
          <ul class="modal__body-list">
            <li class="list__item">
              1. The use of real name and personal data on the platform will
              allow you to receive official case reports and other documents
              addressed to the patient's legal name. Thus,
              <b> the documents become legally significant.</b>
            </li>
            <li class="list__item">
              2. In addition, for anonymous users, the function of
              <b> uploading medical images and documents</b> is closed, because
              they may contain personal information.
            </li>
          </ul>
        </div>
        <div class="sign-step__checkbox">
          <div class="check__wrap">
            <Radio
              id="patient-true"
              @change="changed"
              value="false"
              name="patient"
              label="I want to use real name and full-featured service"
              v-model="anonimPatient"
            />
            <Radio
              id="patient-false"
              @change="changed"
              value="true"
              name="patient"
              label="I want to be anonym patient"
              v-model="anonimPatient"
              :checked="true"
            />
          </div>
        </div>
        <Button
          class="sign-up__btn"
          @click="changeStep(anonimPatient)"
          label="Continue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      anonimPatient: "true",
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeM");
    },
    changed(e) {
      this.$emit("changed", e);
      //console.log("Change handler says...");
      console.log(e);
    },
    changeStep(anonimPatient) {
      this.$emit("changeStep", anonimPatient);
    },
  },
};
</script>

<style lang="scss" scoped>
.popap {
  z-index: 100;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal {
  position: absolute;
  width: 750px;
  height: 513px;
  left: 425px;
  top: 15%;
  background: #ffffff;
  border-radius: 10px;
  @include below(md) {
    width: 100%;
    left: 0;
    top: 0;
  }
  &__wrap {
    padding: 30px;
  }
  &__top {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    align-items: center;
    letter-spacing: 0.2px;
  }
  &__subtitle {
    font-weight: 900;
    font-size: 16px;
    line-height: 18px;
    color: #565b65;
  }
  &__body {
    margin-top: 50px;
    padding: 0;
    &-list {
      margin-top: 25px;
    }
  }
}
.list__item {
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.3px;
  color: #565b65;
}
.sign-step__checkbox {
  margin-top: 30px;
  width: 100%;
}
</style>
