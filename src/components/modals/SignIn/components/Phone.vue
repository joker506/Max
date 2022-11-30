<template>
  <div class="tab-phone">
    <div class="tab-phone__wrap ">
      <Input
        :class="{ input__error: $v.phone.$error || this.eError }"
        v-mask="'+7-(###)-###-##-##'"
        size="middle"
        class="tab-phone__input"
        legend="Phone number"
        type="tel"
        maxlength="10"
        v-model.trim="$v.phone.$model"
        placeholder="+7 777 777 77 77"
        @input="clearError()"
      />
      <!-- <div class="error" v-if="isInvalid">Field is required</div> -->
      <div class="error" v-if="$v.phone.$error">
        Field is required
      </div>
      <!-- <div class="error" v-if="!$v.phone.phone">Field is phone</div> -->
    </div>

    <div class="tab-phone__wrap">
      <Input
        :class="{ input__error: $v.password.$error || this.eError }"
        size="middle"
        class="tab-phone__input"
        legend="Password"
        placeholder="Password"
        type="password"
        maxlength="10"
        v-model.trim="$v.password.$model"
        @input="clearError()"
      />
      <div class="error" v-if="$v.password.$dirty && $v.password.$required">
        Password is required
      </div>
      <div
        class="error"
        v-else-if="$v.password.$dirty && !$v.password.minLength"
      >
        Password must be 8 characters
      </div>
    </div>
    <div class="error" v-if="this.eError">
      {{ this.eError.message }}
    </div>
    <div class="">
      <Button class="btn__phone" label="Continue" @click="signParams" />
    </div>
    <div class="tab-phone__bottom">
      <span class="password-forgot__legend">Forgot your password?</span>
      <button class="password-forgot__action">
        Send email with linkfor reset password
      </button>
      <router-link class="fornew-user" to="/sign_up"
        >Sign up for new user</router-link
      >
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  name: "Phone",
  data() {
    return {
      isTouched: false,
      phone: "",
      password: "",
      eError: null,
      //repeatPassword: "",
    };
  },
  validations: {
    phone: {
      required,
      minLength: minLength(18),
    },
    password: {
      required,
      minLength: minLength(8),
    },
    // repeatPassword: {
    //   required,
    //   sameAsPassword: sameAs("password"),
    // },
  },
  directives: {
    mask,
  },
  methods: {
    onTouch() {
      this.isTouched = true;
    },
    signParams() {
      this.signIn();
    },

    ...mapActions({
      signIn() {
        this.$store.dispatch("auth/signIn", {
          username: this.phone,
          password: this.password,
        });
      },
    }),
  },
  computed: {
    isInvalid() {
      return this.isTouched;
    },
    ...mapState({
      isAuth: (state) => state.auth.isAuthenticated,
    }),
  },
  watch: {
    isAuth(isAuthenticated) {
      if (isAuthenticated === true) {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: #e73078;
}
.tab-phone {
  width: 100%;
  &__wrap {
    margin-top: 5%;
  }
  &__bottom {
    margin-top: 6%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
.btn {
  &__phone {
    margin-top: 10%;
    width: 100%;
  }
}
.password-forgot__action {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  text-decoration: underline;
  color: $color-primary;
  &:hover {
    color: #00b79c;
  }
}
.fornew-user {
  width: 100%;
  text-align: center;
  margin-top: 5%;
  color: $color-primary;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  &:hover {
    color: #00b79c;
  }
}
</style>
