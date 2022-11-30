<template>
  <section>
    <Steps class="sign-up__steps" :step="3" />
    <h2 class="sign-up__title">Let's get acquainted!</h2>
    <form class="sign-up">
      <span class="sign-up__subtitle">Enter your company details</span>
      <div class="sign-up__wrap">
        <Input
          :class="{ input__error: $v.companyName.$error }"
          size="middle"
          class="sign-up__name"
          legend="Company name or Clinic brand name"
          placeholder="Company name or Clinic brand name"
          type="text"
          maxlength="10"
          v-model.trim="$v.companyName.$model"
        />
        <Multiselect
          v-model="companyType"
          class="sign-up__select multiselect_middle multiselect_light multiselect_single sign-up__name"
          track-by="id"
          placeholder="Company type"
          :searchable="false"
          :show-labels="false"
          :options="companyTypes"
          label="name"
          :close-on-select="true"
        >
        </Multiselect>

        <Button
          class="sign-up__btn"
          @click="changeStep('CompanyStep4')"
          label="Submit"
        />
      </div>
    </form>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";

import { required } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";
import Steps from "@/components/blocks/Steps";

export default {
  name: "Step4",
  data() {
    return {
      companyType: "",
      companyName: "",
    };
  },
  validations: {
    companyName: {
      required,
    },
  },
  components: {
    Steps,
    Multiselect,
  },
  methods: {
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("ERROR");
      } else {
        this.$store
          .dispatch("signUp/signUpSetCompany", {
            identifier: this.identifier,
            company_name: this.companyName,
            company_type: this.companyType.id,
          })
          .then((res) =>
            res.status === 200
              ? this.$bus.emit("CHANGE_SIGN_UP_STEP", step)
              : console.log("e")
          );
        // this.$store.commit("signUp/SIGN_UP_PHONE", {
        //   user_name: this.userName,
        //   last_name: this.lastName,
        // });
        this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
      }
    },
    ...mapActions({
      getPositionUser: "signUp/getPositionUser",
    }),
  },
  computed: {
    ...mapState({
      companyTypes: (state) => state.signUp.typesRoles,
      identifier: (state) => state.signUp.role.identifier,
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
