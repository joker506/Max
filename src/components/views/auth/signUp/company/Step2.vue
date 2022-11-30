<template>
  <div>
    <Steps class="sign-up__steps" :step="1" />
    <h2 class="sign-up__title">Use email for login</h2>
    <section class="sign-step">
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Input
            :class="{
              input__error: $v.password.$error || this.eError,
            }"
            size="middle"
            class="tab-phone__input"
            legend="Email address"
            type="email"
            maxlength="30"
            v-model.trim="$v.email.$model"
            placeholder="Email address"
          />
          <span
            >Please, use a mailbox with your company domain, not public email
            services</span
          >
          <!-- <div class="error" v-if="!$v.email.required">Field is required</div>
      <div class="error" v-if="!$v.email.email">Field is email</div> -->
        </div>
      </div>
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Input
            :class="{
              input__error:
                $v.password.$error || !$v.password.minLength || this.eError,
            }"
            size="middle"
            class="tab-phone__input"
            legend="Password"
            placeholder="Password"
            type="password"
            maxlength="10"
            v-model.trim="password"
            @input="clearError()"
          />
          <!-- <span
          >Password must be at least 8 characters long (letters and
          numbers)</span
        > -->
          <!-- <div class="error" v-if="!$v.password.required">
          Password is required
        </div> -->
          <div class="error" v-if="!$v.password.minLength">
            Password must be at least 8 characters long (letters and numbers)
          </div>
        </div>
      </div>
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Input
            :class="{
              input__error:
                $v.repeatPassword.$error ||
                !$v.repeatPassword.sameAsPassword ||
                this.eError,
            }"
            size="middle"
            class="tab-phone__input"
            legend="Repead password"
            placeholder="Repeat password"
            type="password"
            maxlength="10"
            v-model.trim="repeatPassword"
            @input="clearError()"
          />
          <div class="error" v-if="this.eError">
            {{ this.eError.message }}
          </div>
          <!-- <div class="error" v-if="this.errorResponseStatus">
            {{ this.errorResponseMsg }}
          </div> -->
          <!-- <div class="error" v-if="!$v.repeatPassword.required">
          Password is required
        </div> -->
          <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
            Password does not match
          </div>
        </div>
      </div>
      <div class="sign-step__bottom">
        <div class="sign-step__checkbox">
          <div class="check__wrap">
            <Checkbox
              name="privat"
              id="privat"
              class="session__checkbox"
              v-model="privacyPolitic"
            />
            <label for="privat" class="sign-step__checkbox-label"
              >I have read and I agree to the
              <a class="label_link" href=""> MEDD Terms of Service</a>,
              including the <a class="label_link" href="">User Agreement</a> and
              <a class="label_link" href="">Privacy Policy</a>
            </label>
          </div>
          <Checkbox
            name="mailing"
            id="mailing"
            class="session__checkbox"
            title="I agree to receive useful emails from MEDD"
            v-model="emailFromMedd"
          />
        </div>
        <div class="btn__wrap">
          <!-- <Button class="sign-step__btn" label="Continue" @click="stepSecond" /> -->
          <Button
            class="sign-step__btn"
            @click="changeStep('CompanyStep2')"
            label="Continue"
          />
        </div>
      </div>
    </section>
    <!-- <h2>Use email for login</h2>
    <input type="email" placeholder="Email address" v-model="email">
    <input type="password" placeholder="Password" v-model="password"> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

import Steps from "@/components/blocks/Steps";

export default {
  name: "Step2",
  components: {
    Steps,
  },
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolitic: false,
      emailFromMedd: false,
      eError: null,
      // email: "",
      // password: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    clearError() {
      this.eError = null;
    },
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("Error");
      } else if (!this.$v.$invalid) {
        this.$store.commit("signUp/SIGN_UP_EMAIL", {
          identifier: this.email,
          password: this.password,
          password_repeat: this.repeatPassword,
        });
        this.$store
          .dispatch("signUp/signUpCompany", {
            step: 1,
          })
          .then(
            (res) =>
              res.status === 200
                ? (this.$bus.emit("CHANGE_SIGN_UP_STEP", step),
                  (this.eError = null))
                : ((this.eError = res.data),
                  (this.password = ""),
                  (this.repeatPassword = ""))
            //this.$store.commit("signUp/GET_ERROR", ""))
            //this.$store.commit("signUp/GET_ERROR", res.data)
          );
        // .then((res) =>
        //   res.status === 200
        //     ? (this.$store.commit("signUp/CLEAR_ERROR", " "),
        //       this.$bus.emit("CHANGE_SIGN_UP_STEP", step))
        //     : this.$store.commit("signUp/GET_ERROR", res.data)
        // );
      }

      // this.$store.dispatch("auth/signUpAnonym", {
      //   email: this.email,
      //   password: this.password,
      //   step: 1,
      // });
    },
  },
  computed: {
    ...mapState({
      errorResponseStatus: (state) => state.signUp.error.error,
      errorResponseMsg: (state) => state.signUp.error.message,
    }),
  },
};
</script>

<style lang="scss" scoped>
.error {
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
  margin-top: 50px;
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
    &:nth-child(1) {
      padding-bottom: 20px;
      border-bottom: 2px solid #f8f8f8;
    }
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
  &__checkbox {
    padding-left: 30px;
    padding-right: 30px;
    &-label {
      line-height: normal;
      align-self: center;
    }
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
  font-weight: 700;
  line-height: 38px;
  text-align: center;
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
