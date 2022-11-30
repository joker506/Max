<template>
  <div>
    <NotAuthLayout>
      <SignUp />
    </NotAuthLayout>
  </div>
</template>

<script>
import NotAuthLayout from "@/components/layouts/base/NotAuthLayout";
import SignUp from "@/components/views/signUp/SignUp";
//import SignIn from "@/components/modals/SignIn/SignIn";

export default {
  name: "SignUpPage",

  components: {
    NotAuthLayout,
    SignUp,
  },

  // created() {
  //   this.$buefy.modal.open({
  //     parent: this,
  //     component: SignIn,
  //     width: 560,
  //     hasModalCard: true,
  //   });
  // },
};
</script>

<style scoped></style>
