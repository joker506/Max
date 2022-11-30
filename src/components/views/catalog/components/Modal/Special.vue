<template>
  <modal :width="750" :height="730" :adaptive="true" name="Special">
    <div class="special">
      <div class="special__top">
        <div class="special__wrap">
          <h2 class="special__title">Specialty: Gastroenterology</h2>
          <button @click="$modal.hide('Special')">
            ❌
          </button>
        </div>
      </div>
      <div class="special__body">
        <div class="special__wrap special__wrap--body">
          <h3 class="special__title">Conditions and health problems</h3>
          <Input placeholder="Health problematics and/or Conditions" />
          <ClinicTopics style="width:100%" :ClinicalTheme="ClinicalTheme" />
        </div>
      </div>
      <div class="special__bottom">
        <div class="special__wrap special__wrap--bottom">
          <Button label="Apply" />
          <Button label="Cancel" />
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import ClinicTopics from "@/components/views/catalog/components/Filter/ClinTopics";
export default {
  name: "SpecialModal",
  components: {
    ClinicTopics,
  },
  props: {
    "Clinical-Theme": {},
  },
  methods: {
    showModal() {
      this.$modal.show("Special");
    },
  },
};
</script>

<style lang="scss" scoped>
.special {
  &__top {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f8f8f8;
    margin-top: 30px;
    background: #ffffff;
    border-radius: 10px;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    align-items: center;
    color: #2c323f;
    margin-bottom: 20px;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    &--body {
      flex-direction: column;
    }
    &--bottom {
      justify-content: start;
      margin-right: 30px;
    }
  }
}
</style>
