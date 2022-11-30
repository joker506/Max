<template>
  <NotAuthLayout>
    <SignUp />
  </NotAuthLayout>
</template>

<script>
import NotAuthLayout from "@/components/layouts/base/NotAuthLayout";
//import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import SignUp from "@/components/views/auth/signUp/SignUp";

export default {
  name: "CatalogPage",
  components: {
    SignUp,

    NotAuthLayout,
  },
};
</script>

<style scoped></style>
