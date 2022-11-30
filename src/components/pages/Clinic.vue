<template>
  <DefaultLayout>
    <Clinic />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import Clinic from "@/components/views/clinic/Clinic";

export default {
  name: "ClinicPage",
  components: { Clinic, DefaultLayout },
};
</script>

<style scoped></style>
