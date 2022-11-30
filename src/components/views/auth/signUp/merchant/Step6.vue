<template>
  <div>
    <Steps class="sign-step__steps" :step="5" />
    <h2 class="sign-step__title">Where are you at?</h2>
    <section class="sign-step">
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <div class="sign-step__subtitle-wrap">
            <span class="sign-step__subtitle"
              >Set up your main location and the preferred language of
              communication</span
            >
          </div>
          <Multiselect
            v-model="country"
            class="sign-step__select multiselect_middle multiselect_light multiselect_single"
            track-by="id"
            placeholder="Country"
            :show-labels="false"
            :options="allCountry"
            open-direction="bottom"
            label="name"
            :close-on-select="true"
          >
          </Multiselect>
        </div>
      </div>
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Multiselect
            v-model="city"
            class="sign-step__select multiselect_middle multiselect_light multiselect_single"
            track-by="id"
            placeholder="City"
            :show-labels="false"
            :options="userGroups"
            open-direction="bottom"
            label="name"
            :close-on-select="true"
          >
          </Multiselect>
        </div>
      </div>
      <div class="sign-step__wrap">
        <div class="sign-step__input">
          <Multiselect
            v-model="languges"
            class="sign-step__select multiselect_middle multiselect_light multiselect_single"
            track-by="id"
            placeholder="Language"
            :searchable="true"
            :show-labels="false"
            :options="allCountry"
            label="name"
            :close-on-select="true"
          >
          </Multiselect>
        </div>
        <div class="btn__wrap">
          <Button
            class="sign-step__btn"
            label="Continue"
            @click="changeStep('MerchantStepFinal')"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import Steps from "@/components/blocks/Steps";

export default {
  name: "Step5",
  data() {
    return {
      country: {},
      city: [],
      languges: [],
    };
  },
  components: {
    Steps,
    Multiselect,
  },
  computed: {
    ...mapState({
      identifier: (state) => state.signUp.role.identifier,
      userGroups: (state) => state.signUp.groupRoles,
      countryUser: (state) => state.signUp.userCountry,
      cityUser: (state) => state.signUp.userCity,
      langUser: (state) => state.signUp.userLang,
      allCountry: (state) => state.signUp.allCountries,
    }),
  },
  watch: {
    // country: function() {
    //   this.country = this.countryUser;
    // },
  },
  methods: {
    changeStep(step) {
      if (!this.identifier) {
        console.log("error");
      } else {
        this.$store
          .dispatch("signUp/SetUserLocation", {
            identifier: this.identifier,
            country: this.country.name,
            city: this.city.name,
            language: this.languges.name,
          })
          .then((res) =>
            res.status == 200
              ? this.$bus.emit("CHANGE_SIGN_UP_STEP", step)
              : console.log(res)
          );
      }
    },
    ...mapActions({
      //getPositionUser: "signUp/getPositionUser",
    }),
  },

  mounted: function() {
    this.country = this.countryUser;
    this.city = this.cityUser;
    this.languges = this.langUser;
    //this.getPositionUser();
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
    &:nth-child(2) {
      padding-bottom: 20px;
      border-bottom: 2px solid #f8f8f8;
    }
  }
  &__steps {
    margin: auto;
    margin-bottom: 60px;
    width: 560px;
    @include below(md) {
      width: 100%;
    }
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
  &__subtitle {
    color: #565b65;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
    &-wrap {
      margin-bottom: 30px;
    }
  }

  &__input {
    margin-top: 40px;
    padding-left: 30px;
    padding-right: 30px;
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
