<template>
  <div>
    <h2 class="aplic-title">Application for Consultant status</h2>
    <div class="aplication">
      <div class="aplication__wrap">
        <AplicMenu />
      </div>
      <div class="block__wrap">
        <div class="block">
          <div class="block__section">
            <h2 class="block__title">Job experience</h2>
            <div class="input__wrap">
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.clinicName"
                  required="true"
                  size="middle"
                  class="section__input"
                  purpose="default"
                  legend="Clinic Name"
                  placeholder="Clinic Name"
                />

                <span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <datepicker
                  v-model="userDashboardInfo.dates"
                  wrapper-class="datepicker"
                  input-class="datepicker__input"
                  calendar-class="datepicker__calendar"
                  :full-month-name="true"
                >
                  <span slot="afterDateInput" class="datepicker__legend"
                    >Dates</span
                  >
                </datepicker>
                <span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.jobPosition"
                  size="middle"
                  class="section__input"
                  purpose="default"
                  legend="Job position in Сlinic"
                  placeholder="Job position in Сlinic"
                />
                <span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <vue-dropzone
                  class="dropzone_file"
                  id="fileZone"
                  :options="userDashboardInfo.dropzoneImageOptions"
                  :useCustomSlot="true"
                >
                  <span class="dropzone__title"
                    >Upload scan of any evidence document (drag & drop file here
                    or browse file)</span
                  >
                </vue-dropzone>
                <span class="input__wrap-desc">Prompt text</span>
              </div>
            </div>
          </div>
          <div class="block__section">
            <h2 class="block__title">Location</h2>
            <div class="input__wrap">
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.locationCountry"
                  size="middle"
                  class="section__input"
                  purpose="default"
                  legend="Country"
                  placeholder="Country"
                />
                <span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.locationCity"
                  size="middle"
                  class="section__input"
                  purpose="default"
                  legend="City"
                  placeholder="City"
                /><span class="input__wrap-desc">Prompt text</span>
              </div>
            </div>
          </div>
          <div class="block__bottom">
            <div class="block__bottom-wrap">
              <button class="specialty__btn" @click="showMore = !showMore">
                {{ showMore ? "-" + " " + "less" : "+" + " " + "more" }}
                Add more in Job experience
              </button>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block__section">
            <h2 class="block__title">Education and Trainings</h2>
            <div class="input__wrap">
              <div class="question__wrap">
                <Multiselect
                  class="multiselect_middle multiselect_light multiselect_single wrap-multi"
                  track-by="prof"
                  v-model="userDashboardInfo.graduationSelect"
                  placeholder="Year of graduation"
                  :searchable="false"
                  :options="genderSelect"
                  label="prof"
                  :close-on-select="true"
                /><span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.medicalSchool"
                  size="middle"
                  class="section__input"
                  purpose="default"
                  legend="Medical High School or other Insituition"
                  placeholder="Medical High School or other Insituition"
                /><span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <Input
                  v-model="userDashboardInfo.diplomSpeciality"
                  size="middle"
                  purpose="default"
                  class="section__input"
                  legend="Diploma specialty"
                  placeholder="Diploma specialty"
                /><span class="input__wrap-desc">Prompt text</span>
              </div>
              <div class="question__wrap">
                <vue-dropzone
                  class="dropzone_file"
                  id="fileZone"
                  :options="userDashboardInfo.dropzoneImageOptions"
                  :useCustomSlot="true"
                >
                  <span class="dropzone__title"
                    >Upload scan of any evidence document (drag & drop file here
                    or browse file)</span
                  > </vue-dropzone
                ><span class="input__wrap-desc">Prompt text</span>
              </div>
            </div>
          </div>

          <div class="block__bottom">
            <div class="block__bottom-wrap">
              <button class="specialty__btn" @click="showMore = !showMore">
                {{ showMore ? "-" + " " + "less" : "+" + " " + "more" }}
                Add more in Education and Trainings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AplicationPanel @changeBtn="aplClick" :valid="validation" />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AplicMenu from "@/components/views/dashboard/components/AplicMenu";
import Datepicker from "vuejs-datepicker";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Multiselect from "vue-multiselect";
import AplicationPanel from "@/components/blocks/AplicationPanel";

export default {
  name: "Aplication",
  data() {
    return {
      validations: {
        userDashboardInfo: {
          clinicName: {
            required,
          },
        },
      },
      validation: true,
      userDashboardInfo: {
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
      genderSelect: [
        {
          id: 0,
          prof: "1990",
        },
        {
          id: 1,
          prof: "2000",
        },
      ],
    };
  },
  components: {
    AplicMenu,
    Datepicker,
    vueDropzone: vue2Dropzone,
    Multiselect,
    AplicationPanel,
  },
  methods: {
    showMore() {
      console.log("click");
    },
    aplClick() {
      this.$store.commit("physicin/SET_DASHBORD_INFO", this.userDashboardInfo);
      this.$store.commit("physicin/CHANGE_REGISRATION", true);
      this.$router.push("/dashboard");
    },
  },
  mounted: function getP() {
    return this.$axios
      .get("http://api.medd.pro:1337/accounts/groups/all/")
      .then((response) => console.log(response.data));
    // var axios = require("axios");
    // var config = {
    //   method: "get",
    //   url: "http://api.medd.pro:1337/accounts/groups/all/",
    // };
    // axios(config)
    //   .then(function(response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
};
</script>

<style lang="scss" scoped>
.aplication__wrap {
  display: none;
  @include above(md) {
    display: flex;
  }
}
.aplic-title {
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  margin-bottom: 30px;

  @include below(md) {
    font-size: 20px;
    text-align: center;
  }
}
.question__wrap {
  padding-bottom: 20px;
}
.input__wrap {
  &-desc {
    font-style: italic;
    font-size: 13px;
    line-height: 16px;
    color: #6b6f78;
    display: block;
    margin-top: 6px;
  }
}
.aplication {
  display: flex;
  justify-content: space-between;
}

.dropzone_file {
  &:after {
    //background-image: url("~@/assets/img/svg/Pic.svg");
    width: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.block {
  width: 650px;
  background: #ffffff;
  box-shadow: 0px 6px 6px rgba(153, 155, 168, 0.3);
  border-radius: 10px;

  @include below(md) {
    width: 100%;
  }
  &__wrap {
    @include below(md) {
      width: 100%;
    }
  }
  &__section,
  &__bottom {
    width: 590px;
    margin: 0 auto;
    @include below(md) {
      width: 100%;
    }
  }
  &__bottom {
    margin-top: 30px;
  }
  &__title {
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
  &__bottom {
    width: 100%;
    border-top: 2px solid #f8f8f8;

    &-wrap {
      width: 590px;
      padding-top: 20px;
      padding-bottom: 30px;
      margin: 0 auto;
    }
  }
}

.specialty__btn {
  font-weight: 600;
  text-align: left;
  color: #00cbad;
}
</style>
