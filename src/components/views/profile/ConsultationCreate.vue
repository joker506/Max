<template>
  <div class="create">
    <div class="create__wrap">
      <div class="create__block">
        <Breadcrumb />
      </div>
      <div class="create__block">
        <h2 class="create__block-title">
          Create consultation
        </h2>
        <Tabs />
      </div>
    </div>
    <!-- <AplicationPanel /> -->
  </div>
</template>

<script>
import Tabs from "@/components/views/profile/components/Tabs";
// import AplicationPanel from "@/components/blocks/AplicationPanel";
export default {
  name: "ConsultationCreate",
  components: {
    Tabs,
    // AplicationPanel,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
