<template>
  <div>
    <DefaultLayout>
      <Consultation />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import Consultation from "@/components/views/profile/ConsultationCreate";
export default {
  name: "ConsultationPage",
  components: {
    DefaultLayout,
    Consultation,
  },
};
</script>

<style lang="scss" scoped></style>
