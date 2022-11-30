<template>
  <DefaultLayout>
    <Physicin />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
//import Clinic from "@/components/views/clinic/Clinic";
import Physicin from "@/components/views/physician/Physicin";

export default {
  name: "PhysicianPage",
  components: {
    Physicin,
    DefaultLayout,
  },
};
</script>

<style scoped></style>
