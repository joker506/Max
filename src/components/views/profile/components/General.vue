<template>
  <div class="general">
    <div class="general__wrap">
      <div class="">
        <div class="general__card">
          <div
            class="card__cover"
            :style="{
              'background-image':
                'url(' + require('@/assets/img/cover-2.jpg') + ')',
            }"
          ></div>
          <div class="card__body">
            <div class="card__heading">
              <div class="icon__wrap">
                <Avatar size="middle" :image="avatar" class="card__avatar" />
                <router-link to="#">
                  <Icon class="general__icon" name="correct-edit" />
                </router-link>
              </div>
              <div class="card__caption">
                <div class="general__title">
                  Dr. Charlez Norman Friedlander
                  <!-- {{ name }} -->
                </div>
                <div class="general__login">
                  @ Some Doc
                  <!-- {{ adress }} -->
                </div>
              </div>
            </div>
            <div class="card__bottom">
              <h2 class="card__bottom-title">My bio</h2>
              <Textarea
                legend="Describe here your pieces of knowledge as an expert in medicine"
                v-model="user.biography"
              />
            </div>
          </div>
        </div>
        <div class="session">
          <div class="session__wrap">
            <div class="session__top">
              <h2 class="session__title language__title">
                Consultation matters
              </h2>
            </div>
            <div class="session__body language__body">
              <Multiselect
                v-model="user.clinicalSpecialities"
                class="multiselect_middle multiselect_light multiselect_single"
                track-by="prof"
                placeholder="Clinical specialties"
                :searchable="false"
                :show-labels="false"
                :options="genderSelect"
                label="prof"
                :close-on-select="true"
                multiple
              >
              </Multiselect>

              <div class="additional__group bottom__add"></div>
              <div class="age">
                <div class="session__top">
                  <h2 class="session__title language__title">
                    Age group of patients
                  </h2>
                </div>
                <Button
                  variant="light"
                  class="general__age-btn"
                  v-for="(i, index) in ageParam"
                  :label="i.age"
                  :key="index"
                  :class="{ active_btn: i.selected }"
                  @click="$set(i, 'selected', !i.selected)"
                />
                <div class="additional__group">
                  <a
                    class="additional__add-link"
                    @click="selectAll = !selectAll"
                    >select all</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="session">
          <div class="session__wrap">
            <div class="session__top">
              <h2 class="session__title language__title">
                Your professional skills and expertise
              </h2>
              <span
                >You can list more languages in which you can communicate with
                patients</span
              >
            </div>
            <div class="session__body language__body">
              <Multiselect
                v-model="mult"
                class="multiselect_middle multiselect_light multiselect_single select_skils"
                track-by="prof"
                placeholder="Clinical threads and Career topics"
                :searchable="false"
                :show-labels="false"
                :options="genderSelect"
                label="prof"
                :close-on-select="true"
                multiple
              >
              </Multiselect>
              <Input
                size="middle"
                purpose="default"
                class="section__input language__input"
                v-model="user.priceConsult"
                legend="Treated conditions"
                placeholder="Treated conditions"
              />

              <Input
                size="middle"
                purpose="default"
                class="section__input language__input"
                v-model="user.averageCase"
                legend="Performed procedures"
                placeholder="Performed procedures"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <ConsultPrice />
        <AdditionalOpt />
        <div class="session">
          <div class="session__wrap">
            <div class="session__top">
              <h2 class="session__title">
                Сommunication session with patients
              </h2>
            </div>
            <div class="session__body">
              <Checkbox
                name="video"
                id="video"
                class="session__checkbox"
                title="Video call for Question&Answer session"
                v-model="user.videoCall"
              />
              <Input
                size="middle"
                purpose="default"
                class="section__input session__input"
                v-model="user.priceConsult"
                legend="Price per each 10 minutes"
                placeholder="Price per each 10 minutes"
              />
              <Checkbox
                name="audio"
                id="audio"
                class="session__checkbox"
                title="Video call for Question&Answer session"
                v-model="user.audioCall"
              />
              <Input
                size="middle"
                purpose="default"
                class="section__input session__input"
                v-model="user.averageCase"
                legend="Price per each 10 minutes"
                placeholder="Price per each 10 minutes"
              />
            </div>
          </div>
        </div>
        <div class="session">
          <div class="session__wrap">
            <div class="session__top">
              <h2 class="session__title language__title">Langauges spoken</h2>
              <span
                >You can list more languages in which you can communicate with
                patients</span
              >
            </div>
            <div class="session__body language__body">
              <Input
                size="middle"
                purpose="default"
                class="section__input language__input"
                v-model="user.languageInput"
                legend="Language"
                placeholder="Language"
              />

              <Input
                size="middle"
                purpose="default"
                class="section__input language__input"
                v-model="user.languageInput"
                legend="Language"
                placeholder="Language"
              />
              <div class="additional__group">
                <a href="#" class="additional__add-link">+ Add more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConsultPrice from "@/components/views/profile/components/ConsultPrice";
import AdditionalOpt from "@/components/views/profile/components/AdditionalOpt";
import Multiselect from "vue-multiselect";
import { mapState } from "vuex";

export default {
  name: "General",
  data() {
    return {
      user: {
        biography: null,
        clinicalSpecialities: [],
        priceConsult: null,
        averageCase: null,
        videoCall: false,
        audioCall: false,
        languageInput: null,
      },

      selectedBtn: {},
      selected: undefined,
      selectAll: false,
      //selectedBtnAll: null,

      qqq: null,
      avatar: require("@/assets/img/avatar.jpg"),
      genderSelect: [
        {
          id: 0,
          prof: "Male",
        },
        {
          id: 1,
          prof: "Female",
        },
      ],
    };
  },
  components: {
    ConsultPrice,
    AdditionalOpt,
    Multiselect,
  },
  methods: {
    selectAllBtn() {
      this.ageParam.forEach((e) => {
        e.selected = true;
      });
    },
  },
  computed: {
    ...mapState({
      ageParam: (state) => state.speciality.ageGroup,
    }),
  },
};
</script>

<style lang="scss">
.general {
  &__wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    //width: 560px;
    @include below(md) {
      width: 100%;
      flex-direction: column;
      margin-bottom: 10px;
    }
  }
  &__card {
    width: 560px;
    @include below(md) {
      width: 100%;
    }
  }
  &__icon {
    position: absolute;
    top: 30px;
    right: 0px;
    width: 30px !important;
    height: 30px !important;
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    letter-spacing: 0.2px;
    color: $color-dark;
    margin-bottom: 2px;
    @include below(md) {
      font-size: 14px;
      line-height: 1.2;
    }
  }
  &__login {
    font-size: 12px;
    color: $color-primary;
  }
  &__age {
    &-btn {
      padding: 10px !important;
      font-size: 12px !important;
      margin: 1%;
      background-color: grey;
    }
  }
}
.icon__wrap {
  position: relative;
  margin-right: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;

  $this: &;

  &__cover {
    flex: none;
    width: 100%;
    height: 60px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px 10px 0 0;

    #{$this}_middle & {
      @include above(md) {
        height: 100px;
      }
    }

    @include below(md) {
      height: 60px;
    }
  }
  &__bottom {
    margin-top: 40px;
    margin-bottom: 20px;
    padding: 0 20px 16px;
    flex: none;
    &-title {
      font-size: 13px;
      font-weight: 700;
      text-align: left;
    }
  }

  &__body {
    flex: auto;
    display: flex;
    flex-direction: column;
    border-top: none;
    border-radius: 0 0 10px 10px;
    background-color: #ffffff;
    //border: 1px solid #d5d6d9;

    #{$this}_middle & {
      @include above(md) {
        border: none;
      }
    }
  }
  &__heading {
    display: flex;
    padding: 0 20px 16px;
    //border-bottom: 2px solid #f8f8f8;
    flex: none;

    @include below(md) {
      padding: 0 15px 10px;
    }
  }
  &__avatar {
    margin-top: -35px;
    margin-right: 9px;

    @include below(md) {
      margin-top: -15px;
    }
    #{$this}_middle & {
      @include above(md) {
        margin-top: -25px;
        margin-right: 14px;
        width: 120px;
        height: 120px;
      }
    }
  }
  &__caption {
    padding-top: 11px;

    @include below(md) {
      padding-top: 7px;
    }

    #{$this}_middle & {
      @include above(md) {
        padding-top: 20px;
      }
    }
  }
}
.session {
  margin-top: 30px;
  width: 560px;
  background: #ffffff;
  border-radius: 10px;

  @include below(md) {
    width: 100%;
  }
  &__wrap {
    padding: 20px 16px;
  }
  &__title {
    color: $color-dark;
    padding-top: 30px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
  }
  &__input {
    margin-top: 10px;
    &:last-child {
      margin-bottom: 10px;
    }
  }
  &__checkbox {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
    &:nth-child(3) {
      padding-top: 20px;
    }
    @include below(md) {
      &:nth-child(3) {
        padding-top: 10px;
      }
    }
  }
  &__body {
    margin-top: 30px;
  }
}
.additional {
  &__group {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  &__add-link {
    color: $color-primary;
    font-weight: bold;
  }
}
.language {
  &__input {
    margin-top: 20px;
  }
  &__body {
    margin-top: 10px;
  }
  &__title {
    padding-bottom: 20px;
  }
}
.checked {
  &__items {
    display: inline-flex;
    margin-right: 30px;
    width: 150px;
    background: aqua;
  }
  &__item {
    margin-right: 30px;
  }
}
.multiselect__tags-wrap {
  position: absolute;
  top: 55px;
}
.multiselect__tag {
  color: $body-bg;
  background: $color-primary;
  padding: 5px;
  padding-left: 3px;
}
.multiselect__tag {
  margin-right: 10px;
}
.multiselect__tag-icon::after {
  color: $body-bg;
}
.bottom__add {
  margin-top: 15px;
  padding-bottom: 0px;
}
.active_btn {
  color: $body-bg !important;
  background: $color-primary !important;
}
.select_skils {
  margin-bottom: 50px;
}
</style>
