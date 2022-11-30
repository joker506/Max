<template>
  <section>
    <h2 class="sign-up__title">Congratulations!</h2>
    <h2 class="sign-up__subtitle">Now you are a member of MEDD</h2>

    <form class="sign-up">
      <div class="section__top">
        <!-- <div class=""> -->
        <span class="sign-up__subtitle-body"
          >List ultimate
          <a class="label-link" href="">information to your profile </a> (not
          obligatory right now) and begin to surf on our medical platform!</span
        >
        <!-- </div> -->
        <div class="sign-up__wrap">
          <vue-dropzone
            class="dropzone_file"
            id="fileZone"
            :options="userDashboardInfo.dropzoneImageOptions"
            :useCustomSlot="true"
          >
            <h3 class="dropzone-custom-title">
              Upload your avatar (drag & drop image here or browse file)
            </h3></vue-dropzone
          >
        </div>
      </div>
      <div class="section__top">
        <div class="sign-up__wrap">
          <Multiselect
            class="multiselect_middle multiselect_light multiselect_single final__multi-select"
            track-by="name"
            v-model="userDashboardInfo.gender"
            placeholder="Gender"
            :searchable="true"
            :options="genderSelect"
            label="name"
            :close-on-select="true"
          />
          <!-- <span class="input__wrap-desc">Prompt text</span> -->
          <Multiselect
            class="multiselect_middle multiselect_light multiselect_single final__multi-select"
            track-by="name"
            v-model="userDashboardInfo.yearOfBirth"
            placeholder="Year of birth"
            :searchable="true"
            :options="dateBirthSelect"
            label="name"
            :close-on-select="true"
          />
          <!-- <span class="input__wrap-desc">Prompt text</span> -->
        </div>
      </div>
      <div class="section__top">
        <div class="sign-up__wrap">
          <Input
            :class="{ input__error: $v.firstName.$error }"
            size="middle"
            class="sign-up__name"
            legend="First Name"
            placeholder="First Name"
            type="text"
            maxlength="10"
            v-model.trim="$v.firstName.$model"
          />
          <Input
            size="middle"
            class="sign-up__name"
            legend="Middle Name"
            placeholder="Middle Name"
            type="text"
            maxlength="10"
            v-model.trim="userDashboardInfo.middleName"
          />
          <Input
            :class="{ input__error: $v.lastName.$error }"
            size="middle"
            class="sign-up__name"
            legend="Last Name"
            placeholder="Last Name"
            type="text"
            maxlength="10"
            v-model.trim="$v.lastName.$model"
          />
          <!-- <span class="input__wrap-desc">Prompt text</span> -->
        </div>
      </div>
      <div class="section__top">
        <div class="sign-up__wrap">
          <Input
            :class="{ input__error: $v.language.$error }"
            size="middle"
            class="sign-up__name"
            legend="Language"
            placeholder="Language"
            type="text"
            maxlength="10"
            v-model.trim="userDashboardInfo.language"
          />
          <Input
            size="middle"
            class="sign-up__name"
            legend="Additional Language"
            placeholder="Additional Language"
            type="text"
            maxlength="10"
            v-model.trim="userDashboardInfo.additionalLanguage"
          />
          <div class="wrap">
            <span class="sign-up__add">+ Add more</span>
          </div>
          <!-- <span class="input__wrap-desc">Prompt text</span> -->
        </div>
      </div>
      <div class="section__top">
        <div class="sign-up__wrap">
          <Input
            :class="{ input__error: $v.email.$error }"
            size="middle"
            class="sign-up__name"
            legend="Email address"
            placeholder="Email address"
            type="text"
            maxlength="10"
            v-model.trim="$v.email.$model"
          />
        </div>
        <div class="btn__wrap">
          <Button
            size="middle"
            class="sign-up__btn-final"
            @click="changeStep('MerchantStep6')"
            label="Save and Go next"
          />
          <div class="">
            <Button
              size="middle"
              class="button_light sign-up__btn-link"
              @click="skipStep"
              label="Skip this form"
            >
              <Icon
                class="btn-icon"
                name="icon-arrowNext"
                width="24px"
                height="24px"
                color="#00CBAD"
              />
            </Button>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </form>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { email, required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  name: "Step5",
  data() {
    return {
      genderSelect: [
        {
          id: 0,
          name: "Male",
        },
        {
          id: 1,
          name: "Female",
        },
      ],
      dateBirthSelect: [
        {
          id: 0,
          name: "1990",
        },
        {
          id: 1,
          name: "2000",
        },
      ],
      userDashboardInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        yearOfBirth: null,
        additionalLanguage: "",
        clinicName: "",
        dates: "",
        jobPosition: "",
        locationCountry: "",
        locationCity: "",
        graduationSelect: "",
        medicalSchool: "",
        diplomSpeciality: "",
        dropzoneImageOptions: {
          url: "https://httpbin.org/post",
          maxFiles: 1,
          addRemoveLinks: true,
        },
      },
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    language: {
      required,
    },
  },
  components: {
    Multiselect,
    vueDropzone: vue2Dropzone,
  },
  methods: {
    changeStep(step) {
      if (this.$v.$invalid) {
        console.log("ERROR");
      } else {
        this.$store.commit("signUp/SIGN_UP_PHONE", {
          user_name: this.userName,
          last_name: this.lastName,
        });
        this.$bus.emit("CHANGE_SIGN_UP_STEP", step);
      }
    },

    skipStep() {
      console.log("click");
    },

    ...mapActions({
      getPositionUser: "signUp/getPositionUser",
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
  //padding: 30px;
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
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
    &-body {
      display: block;
      padding: 30px;
      padding-bottom: 0px;
      font-weight: normal;
      font-size: 15px;
      line-height: 23px;
      //margin-bottom: 30px;
      color: #565b65;
    }
  }

  &__wrap {
    margin-top: 20px;
    padding: 0 30px;
  }

  &__name {
    width: 100%;
    margin-bottom: 20px;
  }
  &__title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
    color: $color-dark;
  }
  &__add {
    color: $color-primary;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
  }
  &__btn-final {
    margin-top: 10px;
    width: 100%;
  }
  &__btn-link {
    font-size: 14px;
    width: 100%;
    color: $color-primary;
    justify-content: center;
    background: #ffffff;
    &:hover {
      background: #ffffff;
    }
  }
}
.section__top {
  width: 100%;
  border-bottom: 2px solid #f8f8f8;
}
.section__top:last-child {
  border-bottom: none;
}
.label-link {
  font-size: 15px;
  font-style: bold;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: $color-primary;
}
.dropzone_file {
  margin-bottom: 20px;
}
.dropzone-custom-title {
  padding-top: 3%;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: $color-primary;
}
.final__multi-select {
  margin-top: 20px;
  margin-bottom: 20px;
}
.wrap {
  margin-bottom: 20px;
}
.btn {
  &__wrap {
    padding: 0 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  &-icon {
    padding: 0 10px;
  }
}
</style>
