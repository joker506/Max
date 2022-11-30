<template>
  <DefaultLayout>
    <DashBoard />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import DashBoard from "@/components/views/dashboard/DashBoard";

export default {
  name: "Dashboard",
  components: {
    DefaultLayout,
    DashBoard,
  },
};
</script>

<style scoped></style>
