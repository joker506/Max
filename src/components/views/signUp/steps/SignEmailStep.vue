<template>
  <section class="sign-step">
    <div class="sign-step__wrap">
      <div class="sign-step__input">
        <Input
          :class="{ input__error: $v.email.$error }"
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
          :class="{ input__error: $v.password.$error }"
          size="middle"
          class="tab-phone__input"
          legend="Password"
          placeholder="Password"
          type="password"
          maxlength="10"
          v-model.trim="password"
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
          :class="{ input__error: $v.repeatPassword.$error }"
          size="middle"
          class="tab-phone__input"
          legend="Repead password"
          placeholder="Repeat password"
          type="password"
          maxlength="10"
          v-model.trim="repeatPassword"
        />
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
            <a class="label_link" href=""> MEDD Terms of Service</a>, including
            the <a class="label_link" href="">User Agreement</a> and
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
        <Button class="sign-step__btn" label="Continue" @click="stepSecond" />
      </div>
    </div>
  </section>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

export default {
  name: "SignEmailStep",
  data() {
    return {
      privacyPolitic: false,
      emailFromMedd: false,
      email: "",
      password: "",
      repeatPassword: "",
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
    stepSecond() {},
  },
};
</script>

<style lang="scss" scoped>
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
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
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
