<template>
  <div>
    <Steps class="sign-up__steps" :step="3" />
    <h2 class="sign-up__title">Set up your password</h2>
    <section class="sign-step">
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Input
            :class="{ input__error: $v.password.$error }"
            size="middle"
            class="tab-phone__input"
            legend="Password"
            placeholder="Password"
            type="password"
            maxlength="10"
            v-model.trim="password"
            @input="clearError()"
          />
          <span class="error" v-if="!$v.password.minLength">
            Password must be at least 8 characters long (letters and numbers)
          </span>
        </div>
      </div>
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Input
            :class="{ input__error: $v.repeatPassword.$error }"
            size="middle"
            class="tab-phone__input"
            legend="Repead password"
            placeholder="Repeat password"
            type="password"
            maxlength="10"
            v-model.trim="repeatPassword"
            @input="clearError()"
          />
          <span class="error" v-if="!$v.repeatPassword.sameAsPassword">
            Password does not match
          </span>
          <div class="error" v-if="this.eError">
            {{ this.eError.message[0] }}
          </div>
        </div>
      </div>
      <div class="sign-step__bottom">
        <div class="btn__wrap">
          <!-- <Button class="sign-step__btn" label="Continue" @click="stepSecond" /> -->
          <Button
            class="sign-step__btn"
            @click="changeStep('MerchantStep4')"
            label="Continue"
          />
        </div>
      </div>
    </section>
    <!-- <h2>Use email for login</h2>
    <input type="email" placeholder="Email address" v-model="email">
    <input type="password" placeholder="Password" v-model="password"> -->
  </div>
  <!-- //   <section>
//     <Steps :step="4" />
//     <h2>Let's get acquainted!</h2>
//     <Button @click="changeStep('PatientStepPhone5')">Continue</Button>
//   </section> -->
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

import Steps from "@/components/blocks/Steps";
import { mapState } from "vuex";

export default {
  name: "Step4",
  data() {
    return {
      password: "",
      repeatPassword: "",
      eError: null,
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
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
        this.$store.commit("signUp/SIGN_UP_PASSWORD", {
          password: this.password,
          password_repeat: this.repeatPassword,
        });
        this.$store
          .dispatch("signUp/signUpPassword", {
            identifier: this.userPhone,
            password: this.password,
            password_repeat: this.repeatPassword,
            step: 5,
          })
          .then((res) =>
            res.status === 200
              ? (this.$bus.emit("CHANGE_SIGN_UP_STEP", step),
                (this.eError = null))
              : ((this.eError = res.data),
                (this.password = ""),
                (this.repeatPassword = ""))
          );
        //this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
      }
    },
  },
  computed: {
    change() {
      return this.identifier.replace(/[- )(]/g, "");
    },
    ...mapState({
      userPhone: (state) => state.signUp.role.identifier,
    }),
  },
};
</script>

<style lang="scss" scoped>
.error {
  font-style: italic;
  color: $color-secondary;
}
.sign-up__steps {
  margin: auto;
  margin-bottom: 60px;
  width: 560px;
}
.sign-step {
  width: 560px;
  background: #ffffff;
  box-shadow: 3px -5px 40px rgba(205, 205, 212, 0.1);
  border-radius: 16px;
  margin: auto;
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
  &__input {
    margin-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
  }
  &__select {
    margin-top: 5%;
    margin-bottom: 8%;
  }
  &__bottom {
    width: 100%;
  }
  &__btn {
    width: 100%;
  }
}
.btn__wrap {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
}
.sign-up__title {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: #2c323f;
}
.label_link {
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  color: $color-primary;
}
.check__wrap {
  display: flex;
  margin-top: 40px;
  margin-bottom: 15px;
}
</style>
