<template>
  <section>
    <Steps class="sign-up__steps" :step="1" />
    <h2 class="sign-up__title">Would you like to use your real name?</h2>
    <form class="sign-up">
      <div class="content__wrap" v-if="anonimPatient == 'true'">
        <span class="sign-up__content"
          >Do you want to use your legal name or anonym cover name? <br />
          <a class="label_link" @click="modalShow">
            MEDD Terms of Service</a
          ></span
        >
      </div>
      <div class="content__wrap" v-if="anonimPatient == 'false'">
        <h2>What difference is it?</h2>
        <p>
          1. The use of real name and personal data on the platform will allow
          you to receive official case reports and other documents addressed to
          the patient's legal name. Thus, the documents become legally
          significant.
        </p>
        <p>
          2. In addition, for anonymous users, the function of uploading medical
          images and documents is closed, because they may contain personal
          information.
        </p>
      </div>

      <div class="sign-step__checkbox">
        <div class="check__wrap" v-if="!openModal">
          <Radio
            id="patient-true"
            @change="changed"
            value="false"
            name="patient"
            label="I want to use real name and full-featured service"
            v-model="anonimPatient"
          />
          <Radio
            id="patient-false"
            @change="changed"
            value="true"
            name="patient"
            label="I want to be anonym patient"
            v-model="anonimPatient"
            :checked="true"
          />
        </div>
      </div>
      <Button
        class="sign-up__btn"
        @click="changeStep(anonimPatient)"
        label="Continue"
      />
    </form>
    <Modal
      v-if="openModal"
      @closeM="closeModal"
      @change="changed(e)"
      @changeStep="changeStep"
    />
  </section>
</template>

<script>
import Modal from "@/components/views/auth/signUp/patient/phone/Modal";
import Steps from "@/components/blocks/Steps";
import { mapGetters } from "vuex";

export default {
  name: "Step1",
  components: {
    Steps,
    Modal,
  },
  data() {
    return {
      openModal: false,
      anonimPatient: "true",
      typeSignUp: "PatientStepEmail2",
    };
  },

  methods: {
    modalShow() {
      this.openModal = !this.openModal;
    },
    closeModal() {
      this.openModal = false;
    },
    changed(e) {
      //console.log("Change handler says...");
      console.log(e);
    },
    changeStep(anonimPatient) {
      this.idProf.forEach((element) => {
        if (element.name === "Anonym patient" && anonimPatient === "true") {
          this.$store.commit("signUp/GET_CHECK_TYPES", element.id);
          this.$bus.emit("CHANGE_SIGN_UP_STEP", this.typeSignUp);
        } else {
          this.$store.commit("signUp/GET_CHECK_TYPES", element.id);
          this.$bus.emit("CHANGE_SIGN_UP_STEP", "PatientStepPhone2");
        }
      });

      // this.$store.commit("signUp/GET_CHECK_TYPES", 11);
      //this.$bus.emit("CHANGE_SIGN_UP_STEP", this.typeSignUp);
      // this.$store.dispatch("auth/pushSignUpData", {
      //   type: this.typeSignUp,
      //   id: this.idGroup,
      //   //anonimPatient: Boolean(anonimPatient),
      // });
      // this.$bus.emit("CHANGE_SIGN_UP_STEP", this.typeSignUp);
    },
  },
  computed: {
    ...mapGetters({
      idGroup: "signUp/getGroup",
      idProf: "signUp/profileTypes",
    }),
  },
  watch: {
    anonimPatient: function() {
      if (this.anonimPatient === "true") {
        return this.$lodash.find(this.idProf, (prof) => {
          return prof.name === "Anonym patient";
        });
      }
    },
  },

  // watch: {
  //   realPatient: function() {
  //     if (this.realPatient) {
  //       return (this.realPatient = false);
  //     } else {
  //       return (this.realPatient = true);
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.content__wrap {
  width: 100%;
}
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
  &__steps {
    margin: auto;
    margin-bottom: 60px;
    width: 560px;
    @include below(md) {
      width: 100%;
    }
  }
  &__wrap {
    width: 100%;
  }
  &__content {
    width: 100%;
  }
  &__select {
    margin-top: 5%;
    margin-bottom: 8%;
  }
  &__btn {
    margin-top: 40px;
    width: 100%;
  }
}
.sign-up__title {
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-align: center;
  color: $color-dark;
}
.label_link {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.10000000149011612px;
  text-align: left;
  color: $color-primary;
  text-decoration: underline;
}
.sign-step__checkbox {
  margin-top: 30px;
  width: 100%;
}
</style>
