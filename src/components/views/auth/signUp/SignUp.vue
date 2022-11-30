<template>
  <section>
    <div class="content-wrap">
      <div class="container" v-if="!isStart">
        <div class="page-content registration-page">
          <h1 class="registration-page__title">Become a member</h1>
          <div class="registration-page__subtitle">
            Let’s Sign up to get access to all MEDD power!
          </div>
          <section class="sign-up">
            <div class="sign-up__wrap">
              <h2 class="sign-up__title">Who do you want to be on MEDD?</h2>
            </div>
            <div class="sign-up__wrap">
              <!-- <Multiselect
                v-model="userRole"
                class="sign-up__select multiselect_middle multiselect_light multiselect_single"
                track-by="id"
                placeholder="My role"
                :searchable="false"
                :show-labels="false"
                :options="userGroups"
                label="name"
                :close-on-select="true"
                @close="onTouch"
              >
              </Multiselect> -->
              <Multiselect
                v-model="myRole"
                class="sign-up__select multiselect_middle multiselect_light multiselect_single"
                track-by="id"
                placeholder="My role"
                :searchable="false"
                :show-labels="false"
                :options="roles"
                label="name"
                :close-on-select="true"
                @close="onTouch"
              >
              </Multiselect>
              <span class="error-role" v-if="isInvalid"
                >Please check your role</span
              >
            </div>
            <div class="sign-up__wrap">
              <Button
                class="sign-up__btn"
                label="Get started"
                @click="start()"
              />
            </div>
          </section>
          <!-- <div class="shadow-box">
            <div class="shadow-box__title">Who do you want to be on MEDD?</div>
            <div class="form-group">
              <select class="select" v-model="myRole">
                <option v-for="role in roles" :value="role.name">{{
                  role.name
                }}</option>
              </select>
              <span class="text-field__title">My role</span>
            </div>
            <Button class="button wide-button" @click="start()"
              >Get started</Button
            >
          </div> -->
        </div>
      </div>
      <component v-if="isStart" :is="componentsSignUp"></component>
    </div>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
// Patient
import PatientStep1 from "@/components/views/auth/signUp/patient/Step1";
//import Patient from "@/components/views/auth/signUp/patient/Step1";

// Company
import CompanyStep1 from "@/components/views/auth/signUp/company/Step2";
import CompanyStep2 from "@/components/views/auth/signUp/company/Step3";
import CompanyStep3 from "@/components/views/auth/signUp/company/Step4";
import CompanyStep4 from "@/components/views/auth/signUp/company/Step5";
import CompanyStep5 from "@/components/views/auth/signUp/company/Step6";
import CompanyStep6 from "@/components/views/auth/signUp/company/Step7";
import CompanyStepFinal from "@/components/views/auth/signUp/company/StepFinal";

//import Company from "@/components/views/auth/signUp/company/Step2";

// Merchant
import MerchantStep1 from "@/components/views/auth/signUp/merchant/Step2";
import MerchantStep2 from "@/components/views/auth/signUp/merchant/Step3";
import MerchantStep3 from "@/components/views/auth/signUp/merchant/Step4";
import MerchantStep4 from "@/components/views/auth/signUp/merchant/Step5";
import MerchantStep5 from "@/components/views/auth/signUp/merchant/Step6";
import MerchantStepFinal from "@/components/views/auth/signUp/merchant/StepFinal";

//

// Email
import PatientStepEmail2 from "@/components/views/auth/signUp/patient/email/Step2";
import PatientStepEmail3 from "@/components/views/auth/signUp/patient/email/Step3";
import PatientStepEmail4 from "@/components/views/auth/signUp/patient/email/Step4";
import PatientStepEmail5 from "@/components/views/auth/signUp/patient/email/Step5";
import PatientStepEmailFinal from "@/components/views/auth/signUp/patient/email/StepFinal";

// Phone
import PatientStepPhone2 from "@/components/views/auth/signUp/patient/phone/Step2";
import PatientStepPhone3 from "@/components/views/auth/signUp/patient/phone/Step3";
import PatientStepPhone4 from "@/components/views/auth/signUp/patient/phone/Step4";
import PatientStepPhone5 from "@/components/views/auth/signUp/patient/phone/Step5";
import PatientStepPhone6 from "@/components/views/auth/signUp/patient/phone/Step6";
import PatientStepPhoneFinal from "@/components/views/auth/signUp/patient/phone/StepFinal";
import { mapState, mapActions } from "vuex";

export default {
  name: "SignUp",
  components: {
    Multiselect,
    //Company,
    CompanyStep1,
    CompanyStep2,
    CompanyStep3,
    CompanyStep4,
    CompanyStep5,
    CompanyStep6,
    CompanyStepFinal,

    //Merchant
    MerchantStep1,
    MerchantStep2,
    MerchantStep3,
    MerchantStep4,
    MerchantStep5,
    MerchantStepFinal,

    //Patient,
    PatientStep1,
    PatientStepEmail2,
    PatientStepEmail3,
    PatientStepEmail4,
    PatientStepEmail5,
    PatientStepEmailFinal,
    PatientStepPhone2,
    PatientStepPhone3,
    PatientStepPhone4,
    PatientStepPhone5,
    PatientStepPhone6,
    PatientStepPhoneFinal,
  },
  data() {
    return {
      isTouched: true,
      userRole: "Patient",
      myRole: "Patient",
      roles: [
        {
          id: 1,
          name: "Company",
          activeStep: "CompanyStep1",
        },
        // {
        //   id: 2,
        //   name: "Merchant",
        //   activeStep: "MerchantStep1",
        // },

        {
          id: 3,
          name: "Patient",
          activeStep: "PatientStep1",
        },
        {
          id: 2,
          name: "Physician",
          activeStep: "MerchantStep1",
        },
        {
          id: 4,
          name: "Medical assistant",
          activeStep: "MerchantStep1",
        },
        {
          id: 5,
          name: "Translator",
          activeStep: "MerchantStep1",
        },
      ],
      isStart: false,
    };
  },
  computed: {
    isInvalid() {
      return this.isTouched && this.userRole.length === 0;
    },
    componentsSignUp() {
      // return this.$lodash.find(this.userGroups, (role) => {
      //   return role.name === this.myRole;
      // }).name;
      return this.$lodash.find(this.roles, (role) => {
        return role.name === this.myRole.name;
      }).activeStep;
    },
    ...mapState({
      userGroups: (state) => state.signUp.groupRoles,
    }),
  },
  methods: {
    onTouch() {
      this.isTouched = true;
    },
    start() {
      if (this.isInvalid) {
        console.log("error");
      } else {
        this.isStart = true;
        //this.$store.dispatch("signUp/getTypes", this.userRole.id);
        this.$store.dispatch("signUp/getTypes", this.myRole.id);
        this.$store.commit("signUp/SET_ROLE", this.myRole);

        //this.$store.commit("signUp/SET_ROLE", this.userRole);
      }
    },
    ...mapActions({
      groupFromApi: "signUp/getGroups",
      getPositionUser: "signUp/getPositionUser",
      getAllCountries: "signUp/getAllCountries",
    }),
  },
  created() {
    this.$bus.off("CHANGE_SIGN_UP_STEP");
    this.$bus.on("CHANGE_SIGN_UP_STEP", (step) => {
      // this.$lodash.find(this.userGroups, (role) => {
      //   return role.name === this.myRole;
      // }).name = step;
      this.$lodash.find(this.roles, (role) => {
        return role.name === this.myRole.name;
      }).activeStep = step;
    });
    this.groupFromApi();
    this.getPositionUser();
    this.getAllCountries();
  },
};
</script>

<style scoped lang="scss">
.active {
  border: 1px solid aqua;
}
.error-role {
  display: block;
  color: $color-secondary;
  font-style: italic;
  margin-bottom: 3%;
}
.registration-page {
  &__title {
    text-align: center;
  }
  &__subtitle {
    margin-top: 40px;
    text-align: center;
  }
}
.sign-up {
  margin: auto;
  margin-top: 40px;
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
  &__select {
    margin-top: 5%;
    margin-bottom: 7%;
  }
  &__btn {
    width: 100%;
  }
}
.sign-up__title {
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
}
</style>
