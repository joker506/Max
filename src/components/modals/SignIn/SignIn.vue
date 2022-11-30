<template>
  <section class="sign-in">
    <h2 class="sign-in__title">Log in</h2>
    <ul class="sign-tabs">
      <li
        :class="[
          'sign-tabs__item',
          { 'sign-tabs__item--active': tab.component === tabActive },
        ]"
        v-for="(tab, index) in tabs"
        @click="tabActive = tab.component"
        :key="index"
      >
        {{ tab.title }}
      </li>
    </ul>
    <component :is="tabActive"></component>

    <!-- <button @click="signIn">send</button> -->
  </section>
</template>

<script>
import Phone from "@/components/modals/SignIn/components/Phone";
import Email from "@/components/modals/SignIn/components/Email";

export default {
  name: "SignIn",
  props: {},
  data() {
    return {
      tabActive: "Phone",
      tabs: [
        {
          component: "Phone",
          title: "by Mobile Phone",
        },
        {
          component: "Email",
          title: "by Email",
        },
      ],
    };
  },
  components: {
    Phone,
    Email,
  },
  methods: {
    signIn() {
      console.log("sgn");
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
  },
  created() {
    console.log(localStorage);
    // if (localStorage.token) {
    //   this.$store
    //     .dispatch("auth/signIn")
    //     .then((res) =>
    //       res.status === 200 ? console.log("succes") : console.log("e")
    //     );
    // }
    //onsole.log(localStorage.token);
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 560px;
  background: #ffffff;
  box-shadow: 3px -5px 40px rgba(205, 205, 212, 0.1);
  border-radius: 16px;
  padding: 30px;
  padding-bottom: 40px;
  min-height: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $font;
  @include below(md) {
    width: 100%;
  }
}
.sign-in__title {
  font-weight: 700;
  font-size: 24px;
  align-self: flex-start;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
}

.sign-tabs {
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  &::before {
    position: absolute;
    content: "";
    display: block;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-radius: 4px;
    background: #f8f8f8;
  }
}
.sign-tabs__item {
  padding: 14px;
  position: relative;
  font-weight: 700;
  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    border-radius: 4px;
    background: #00cbad;
    display: none;
  }
  &--active {
    &::before {
      display: block;
    }
  }
}
</style>
