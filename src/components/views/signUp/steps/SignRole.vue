<template>
  <section class="sign-up">
    <div class="sign-up__wrap">
      <h2 class="sign-up__title">Who do you want to be on MEDD?</h2>
    </div>
    <div class="sign-up__wrap">
      <Multiselect
        v-model="userRole"
        class="sign-up__select multiselect_middle multiselect_light multiselect_single"
        track-by="id"
        placeholder="My role"
        :searchable="false"
        :show-labels="false"
        :options="userGroups"
        label="name"
        :close-on-select="true"
      >
      </Multiselect>
    </div>
    <div class="sign-up__wrap">
      <Button class="sign-up__btn" label="Get started" @click="getStarted" />
    </div>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapState } from "vuex";
export default {
  name: "SignRole",
  props: {},
  data() {
    return {
      //step: 1,
      userRole: null,
      // userGroups: [],
    };
  },
  components: {
    Multiselect,
  },
  methods: {
    getStarted() {
      this.$emit("nextStep", this.userRole);
      //this.step++;
      //this.$router.push("/emailstep");
    },
    clickHandler() {
      if (this.$props.to !== "") {
        this.$router.push(this.$props.to);
        this.$emit("close");
      } else if (this.$props.isClose) {
        this.$emit("close");
      } else {
        this.$emit("click");
      }
    },
    ...mapActions({
      groupFromApi: "signUp/getGroups",
    }),
  },
  computed: {
    ...mapState({
      userGroups: (state) => state.signUp.groupRoles,
    }),
  },
  created() {
    this.groupFromApi();
  },
};
</script>

<style scoped lang="scss">
.sign-up {
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
    margin-bottom: 8%;
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
