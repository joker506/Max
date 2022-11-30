<template>
  <div>
    <div class="grid">
      <div class="grid__wide">
        <div class="row">
          <div class="col col_1-3">
            <DashCard
              name="Joe B"
              adress="doc.email"
              city="doc.address.city"
              hasFooter
              size="middle"
            >
            </DashCard>
          </div>
          <div class="dashboard__content col col_1-2">
            <DashContent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashCard from "@/components/views/dashboard/components/DashCard";
import DashContent from "@/components/views/dashboard/components/DashContent";

export default {
  name: "DashBoard",
  components: {
    DashCard,
    DashContent,
  },
  created() {
    this.$axios
      .get(`https://api.medd.pro/questionnaire-service/question/all/`)
      .then((r) => console.log(r.data));
  },
};
</script>

<style lang="scss" scoped>
.col_1-3 {
  @include below(md) {
    width: 100%;
  }
}
</style>
