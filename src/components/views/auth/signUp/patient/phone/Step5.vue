<template>
  <section>
    <Steps class="sign-up__steps" :step="5" />
    <h2 class="sign-up__title">Let's give you a name!</h2>
    <form class="sign-up">
      <span class="sign-up__subtitle"
        >Enter your name (even if you are the caregiver and not the patient
        himself)</span
      >
      <div class="sign-up__wrap">
        <Input
          :class="{ input__error: $v.userName.$error }"
          size="middle"
          class="sign-up__name"
          legend="User Name"
          placeholder="User Name"
          type="text"
          maxlength="10"
          v-model.trim="$v.userName.$model"
        />
        <Input
          :class="{ input__error: $v.lastName.$error }"
          size="middle"
          class="sign-up__name"
          legend="Last Name"
          placeholder="Last Name"
          type="text"
          maxlength="10"
          v-model.trim="$v.lastName.$model"
        />
        <Button
          class="sign-up__btn"
          @click="changeStep('PatientStepPhone6')"
          label="Submit"
        />
      </div>
    </form>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import Steps from "@/components/blocks/Steps";

export default {
  name: "Step5",
  data() {
    return {
      userName: "",
      lastName: "",
    };
  },
  validations: {
    userName: {
      required,
    },
    lastName: {
      required,
    },
  },
  components: {
    Steps,
  },
  methods: {
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("ERROR");
      } else {
        this.$store.commit("signUp/SIGN_UP_PHONE", {
          user_name: this.userName,
          last_name: this.lastName,
        });
        this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
      }
    },
    ...mapActions({
      getPositionUser: "signUp/getPositionUser",
    }),
  },
  mounted: function() {
    //this.country = this.countryUser;
    this.getPositionUser();
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  margin: auto;
  margin-top: 50px;
  width: 560px;
  background: #ffffff;
  box-shadow: 3px -5px 40px rgba(205, 205, 212, 0.1);
  border-radius: 16px;
  padding: 30px;
  padding-bottom: 40px;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $font;
  @include below(md) {
    width: 100%;
  }
  &__subtitle {
    color: #565b65;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
  &__steps {
    margin: auto;
    margin-bottom: 60px;
    width: 560px;
  }
  &__wrap {
    width: 100%;
  }
  &__name {
    width: 100%;
    margin-bottom: 40px;
  }
  &__title {
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
    color: $color-dark;
  }
  &__btn {
    width: 100%;
  }
}
</style>
