<template>
  <div>
    <DefaultLayout>
      <Aplication />
      <!-- <AplicationPanel /> -->
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/components/layouts/base/DefaultLayout";
import Aplication from "@/components/views/dashboard/Aplication";
//import AplicationPanel from "@/components/blocks/AplicationPanel";
export default {
  name: "AplicationPage",
  components: {
    DefaultLayout,
    Aplication,
    //AplicationPanel,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
