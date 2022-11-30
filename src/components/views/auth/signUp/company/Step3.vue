<template>
  <div>
    <Steps class="sign-up__steps" :step="2" />
    <h2 class="sign-up__title">Verify your email to proceed</h2>
    <form class="sign-up">
      <p class="sign-up__content">
        We've sent an email to your address {{ this.userMail }} Please, check
        your mailbox and click on the link provided in email to verify your
        address or enter five-digit confirmation code below
      </p>

      <div class="check__wrap">
        <Input
          :class="{ input__error: $v.confirCode.$error || this.eError }"
          size="middle"
          class="sign-up__confirm"
          legend="Confirmation code"
          placeholder="Confirmation code"
          type="password"
          maxlength="5"
          v-model.number="confirCode"
          @input="clearError()"
        />

        <Button
          class="check__wrap-btn"
          @click="changeStep('CompanyStep3')"
          label="Submit"
        />
      </div>
      <div class="error" v-if="this.eError">
        {{ this.eError.message }}
      </div>
      <div class="sign-up__bottom">
        <ul>
          <li class="sign-up__bottom-label">
            <a @click="resendVerification" class="label_link"
              >Send verification email again</a
            >
          </li>
          <li class="sign-up__bottom-label">
            <a class="label_link">Change email</a>
          </li>
          <li class="sign-up__bottom-label">
            I need
            <a class="label_link"> Support for email verification</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, minLength } from "vuelidate/lib/validators";

import Steps from "@/components/blocks/Steps";

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
          .dispatch("signUp/signUpVerifyEmailCompany", {
            code: this.confirCode,
            identifier: this.userMail,
            // // profile_id: this.profileId,
            // auth: this.auth,
            step: 2,
          })
          .then(
            (res) =>
              res.status === 200
                ? (this.$bus.emit("CHANGE_SIGN_UP_STEP", step),
                  (this.eError = null))
                : ((this.eError = res.data), (this.confirCode = ""))
            //this.$store.commit("signUp/GET_ERROR", ""))
            //this.$store.commit("signUp/GET_ERROR", res.data)
          );
      }
    },
    resendVerification() {
      this.resendVerificationEmail({ identifier: this.userMail });
    },
    ...mapActions({
      resendVerificationEmail: "signUp/signUpResendVerifyEmailCompany",
    }),
  },
  computed: {
    ...mapState({
      userMail: (state) => state.signUp.role.identifier,
      //errorResponseStatus: (state) => state.signUp.error.error,
      //errorResponseMsg: (state) => state.signUp.error.message,
    }),
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: $color-secondary;
  padding-bottom: 14px;
  width: 100%;
}
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
  &__confirm {
    width: 360px;
  }
  &__wrap {
    width: 100%;
  }
  &__content {
    width: 100%;
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
      margin-bottom: 15px;
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
  justify-content: space-between;
  margin-bottom: 14px;
  &-btn {
    width: 120px;
    height: 48px;
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
</style>
