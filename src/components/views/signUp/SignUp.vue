<template>
  <div class="sign-wrap">
    <SignRole @nextStep="getStarted" v-if="step === 1" />
    <SignEmailStep @secStep="getStarted" v-if="step === 2" />
  </div>
</template>

<script>
import SignRole from "@/components/views/signUp/steps/SignRole";
import SignEmailStep from "@/components/views/signUp/steps/SignEmailStep";
//import { mapActions, mapState } from "vuex";
export default {
  name: "SignUp",
  props: {},
  data() {
    return {
      step: 1,
      userRole: null,

      // userGroups: [],
    };
  },
  components: {
    SignRole,

    SignEmailStep,
  },
  methods: {
    getStarted(payload) {
      this.userRole = payload;
      this.step += 1;
    },

    clickHandler() {
      // if (this.$props.to !== "") {
      //   this.$router.push(this.$props.to);
      //   this.$emit("close");
      // } else if (this.$props.isClose) {
      //   this.$emit("close");
      // } else {
      //   this.$emit("click");
      // }
    },
    // ...mapActions({
    //   groupFromApi: "signUp/getGroups",
    // }),
  },
  computed: {
    //   ...mapState({
    //     userGroups: (state) => state.signUp.groupRoles,
    //   }),
    // },
    // created() {
    //   this.groupFromApi();
    // },
  },
};
</script>

<style scoped lang="scss">
.sign-wrap {
  margin: auto;
}
</style>
