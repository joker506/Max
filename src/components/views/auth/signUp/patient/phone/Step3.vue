<template
  ><div>
    <Steps class="sign-up__steps" :step="3" />
    <h2 class="sign-up__title">Verify your phone to proceed</h2>
    <form class="sign-up">
      <p class="sign-up__content">
        We have just send you SMS-code. <br />
        Please note that SMS delivery can take a minute or more.
      </p>
      <span class="sign-up__bottom-label">
        Didn't receive the code?
        <a class="label_link" href=""> Resend me code (one in 60 seconds)</a>
      </span>
      <div class="check__wrap">
        <Input
          :class="{ input__error: $v.confirCode.$error || this.eError }"
          size="middle"
          class="sign-up__confirm"
          legend="SMS code"
          placeholder="SMS code"
          type="password"
          maxlength="5"
          v-model.number="confirCode"
          @input="clearError()"
        />
        <div class="error" v-if="this.eError">
          Does not match! Check entried sms-code or phone on previous step
        </div>
        <div class="error" v-if="this.eError">
          {{ this.eError.message }}
        </div>
        <Button
          class="check__wrap-btn"
          @click="changeStep('PatientStepPhone4')"
          label="Submit"
        />
      </div>
    </form>
  </div>
  <!-- <section>
    <Steps :step="3"/>
    <h2>Set up your password</h2>
    <button @click="changeStep('PatientStepPhone4')">Continue</button>
  </section> -->
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import Steps from "@/components/blocks/Steps";
import { mapState } from "vuex";

export default {
  name: "Step3",
  data() {
    return {
      confirCode: "",
      eError: null,
    };
  },
  validations: {
    confirCode: {
      required,
      minLength: minLength(5),
    },
  },
  components: {
    Steps,
  },
  methods: {
    clearError() {
      this.eError = null;
    },
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("Error");
      } else {
        this.$store
          .dispatch("signUp/signUpVerifyPhoneUser", {
            code: this.confirCode,
            identifier: this.userPhone,
            //
            step: 2,
          })
          .then((res) =>
            res.status === 200
              ? (this.$bus.emit("CHANGE_SIGN_UP_STEP", step),
                (this.eError = null))
              : ((this.eError = res.data), (this.confirCode = ""))
          );
        // this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
      }
    },
  },
  computed: {
    ...mapState({
      userPhone: (state) => state.signUp.role.identifier,
    }),
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
  &__steps {
    margin: auto;
    margin-bottom: 60px;
    width: 560px;
    @include below(md) {
      width: 100%;
    }
  }

  &__wrap {
    width: 100%;
  }
  &__content {
    width: 100%;
    margin-bottom: 7%;
  }
  &__select {
    margin-top: 5%;
    margin-bottom: 8%;
  }
  &__btn {
    margin-top: 40px;
    width: 100%;
  }
  &__bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    &-label {
      width: 100%;
      margin-bottom: 5%;
    }
  }
}
.sign-up__steps {
  margin: auto;
  margin-bottom: 60px;
  width: 560px;
}
.sign-up__title {
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: $color-dark;
}
.check__wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //margin-bottom: 28px;
  &-btn {
    height: 48px;
    margin-top: 5%;
  }
}
.label_link {
  text-decoration: underline;
  font-size: 14px;
  font-style: bold;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: $color-primary;
}
.error {
  font-size: 13px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: $color-secondary;
}
</style>
