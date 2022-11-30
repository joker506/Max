<template>
  <div class="">
    <header class="header">
      <div class="header__container container">
        <button @click="openMenu" class="header__panel-toggle">
          <Hamburger :class="{ hamburger_active: isMenuOpen }" />
        </button>
        <Logo path="/" />
        <div class="header__holder">
          <div
            class="header__panel"
            :class="{ header__panel_open: isMenuOpen }"
          >
            <div class="button__wrap" v-if="isMenuOpen">
              <Button
                class="btn__not-auth button_secondary"
                label="Log in"
                @click="openModal"
              />
              <Button
                class="button_primary btn__not-auth"
                label="Sign up"
                @click="signUp"
              />
            </div>
          </div>
          <div class="header__group">
            <Button
              class="button_secondary btn__not-auth"
              label="Log in"
              @click="logIn"
            />
            <Button
              class="button_primary  btn__not-auth"
              label="Sign up"
              @click="signUp"
            />
            <Lang />
          </div>
        </div>
      </div>
    </header>
    <SignIn class="modal__sign-in" v-if="openSign" />
    <!-- <SignUp class="modal__sign-in" v-if="openSignUp" /> -->
  </div>
</template>

<script>
import SignIn from "@/components/modals/SignIn/SignIn.vue";
//import SignUpPage from '@/components/pages/SIgnUpPage'
export default {
  name: "HeaderNotAuth",
  data() {
    return {
      openSign: false,
      openSignUp: true,
      isMenuOpen: false,
    };
  },
  components: {
    SignIn,
  },
  methods: {
    logIn() {
      if (!this.openSign) {
        this.$router.push("/");
        this.openSign = true;
      }
    },
    signUp() {
      this.openSign = false;
      this.$router.push("/sign_up");
    },
    openModal() {
      if (this.openSign && !this.openSignUp) {
        this.openSign = false;
        this.openSignUp = true;
      } else {
        this.openSign = true;
        this.openSignUp = false;
      }
    },
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  //   created() {
  //     this.$buefy.modal.open({
  //       parent: this,
  //       component: SignIn,
  //       width: 560,
  //       hasModalCard: true,
  //     });
  //   },
};
</script>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: inset 0px -1px 0px #e2e2ea;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: $header-height;

    @include below(lg) {
      height: $header-height-tablet;
    }
    @include below(md) {
      height: $header-height-mobile;
    }
  }
  &__panel-toggle {
    padding: 10px;
    margin-left: -10px;
  }
  &__holder {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 79px;

    @include below(xl) {
      margin-left: 30px;
    }
    @include below(lg) {
      flex: none;
    }
  }
  &__panel {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include below(lg) {
      position: fixed;
      top: $header-height-tablet;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ffffff;
      flex-direction: column;
      justify-content: center;
      overflow-y: auto;
      padding: 20px 0;
      transition: all $transition;
      transform: translateX(-100%);
      opacity: 0;
      visibility: hidden;
    }
    @include below(md) {
      top: $header-height-mobile;
    }

    &_open {
      @include below(lg) {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &__group {
    flex: none;
    display: flex;
    align-items: center;
    @include below(md) {
      display: none;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    position: relative;
    top: -1px;
  }
  &__buttons-item {
    & + & {
      margin-left: 30px;

      @include below(xl) {
        margin-left: 20px;
      }
    }
  }
  &__buttons-link {
    color: #6b6f78;
    font-size: 24px;
    position: relative;
    transition: color $transition;

    &:hover {
      @include above(lg) {
        color: $color-primary;
      }
    }
  }
  &__buttons-badge {
    position: absolute;
    top: -2px;
    right: -3px;
    background-color: $color-secondary;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
.btn__not-auth {
  width: 136px;
  margin: 0px 10px;
}
// .btn-succes {
//   background: $color-primary;
//   color: $body-bg;
//   &:hover {
//     background: #00b79c;
//   }
// }
.button__wrap {
  display: none;
  @include below(md) {
    display: flex;
  }
}
.modal {
  &__sign-in {
    position: fixed;
    top: 15%;
    left: 33%;
    @include below(md) {
      left: 0%;
    }
  }
}
</style>
