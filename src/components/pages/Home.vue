<template>
  <div>
    <NotAuthLayout />
  </div>
</template>

<script>
import NotAuthLayout from "@/components/layouts/base/NotAuthLayout";
//import SignIn from "@/components/modals/SignIn/SignIn";

export default {
  name: "Home",

  components: {
    NotAuthLayout,
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
