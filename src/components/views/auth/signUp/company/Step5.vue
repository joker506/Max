<template>
  <div class="">
    <Steps class="sign-up__steps" :step="4" />
    <h2 class="sign-up__title">Confirm company phone number</h2>
    <section class="sign-up">
      <div class="sign-up__wrap">
        <p class="sign-up__prev">
          Please enter the official phone number for your company. We will phone
          <br />
          this number in a few minutes and tell you a confirmation code.
        </p>
        <div class="sign-up__input">
          <Input
            :class="{ input__error: $v.phone.$error }"
            v-mask="'+7-###-###-##-##'"
            size="middle"
            class="tab-phone__input"
            legend="Phone number"
            type="tel"
            maxlength="19"
            v-model.trim="$v.phone.$model"
            placeholder="+6 141 111 11 11"
          />

          <!-- <div class="error" v-if="!$v.phone.required">Field is required</div> -->
        </div>
        <!-- <div class="check__wrap">
          <Checkbox
            name="privat"
            id="privat"
            class="session__checkbox"
            v-model="privacyPolitic"
          />
          <label for="privat" class="sign-step__checkbox-label"
            >I have read and I agree to the
            <a class="label_link" href=""> MEDD Terms of Service</a>, including
            the <a class="label_link" href="">User Agreement</a> and
            <a class="label_link" href="">Privacy Policy</a>
          </label>
        </div> -->
        <div class="btn__wrap">
          <Button
            class="sign-up__btn"
            @click="changeStep('CompanyStep5')"
            label="Send verification code"
          />
        </div>
      </div>
    </section>
  </div>

  <!-- <section>
    <Steps :step="2"/>
    <h2>Use your phone as a login</h2>
    <input type="email" placeholder="Email address" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <Button @click="changeStep('PatientStepPhone3')">Continue</Button>
  </section> -->
</template>

<script>
import { mapState } from "vuex";
import { mask } from "vue-the-mask";
import { required, minLength } from "vuelidate/lib/validators";
import Steps from "@/components/blocks/Steps";

export default {
  name: "Step5",
  components: {
    Steps,
  },
  data() {
    return {
      phone: "",
      privacyPolitic: "",
    };
  },
  validations: {
    phone: {
      required,
      minLength: minLength(16),
    },
  },
  directives: {
    mask,
  },
  methods: {
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("Error");
      } else if (!this.$v.$invalid) {
        this.$store
          .dispatch("signUp/signUpVerifyPhoneCompany", {
            identifier: this.identifier,
            phone_number: this.phone,
          })
          .then((res) =>
            res.status === 200
              ? this.$bus.emit("CHANGE_SIGN_UP_STEP", step)
              : this.$store.commit("signUp/GET_ERROR", res.data)
          );
        // this.$store.commit("signUp/SIGN_UP_PHONE", {
        //   identifier: this.phone,
        // });
      }
      // this.$store.dispatch("auth/signUpAnonym", {
      //   email: this.email,
      //   password: this.password,
      //   step: 1,
      // });
      // this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
    },
  },
  computed: {
    ...mapState({
      // errorResponseStatus: (state) => state.signUp.error.error,
      // errorResponseMsg: (state) => state.signUp.error.message,
      identifier: (state) => state.signUp.role.identifier,
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
  &__wrap {
    width: 100%;
  }
  &__prev {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
  }
  &__input {
    margin-top: 5%;
  }
  &__steps {
    margin: auto;
    margin-bottom: 60px;
    width: 560px;
    @include below(md) {
      width: 100%;
    }
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
.btn__wrap {
  margin-top: 40px;
}
.check {
  &__wrap {
    display: flex;
    margin-top: 40px;
    margin-bottom: 15px;
    line-height: normal;
    align-self: center;
    margin-bottom: 5%;
  }
}
.label_link {
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: $color-primary;
}
</style>
