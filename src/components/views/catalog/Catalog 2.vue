<template>
  <div>
    <FindExpress :DocSpeciality="specialty" />
    <div class="grid">
      <div class="grid__wide">
        <div class="row">
          <div class="col col_1-2" v-for="index in 8" :key="index">
            <Card hasFooter size="middle" />
          </div>
        </div>
        <Button size="middle" class="button_outline button_light button_full"
          >See another expert</Button
        >
      </div>

      <div class="grid__narrow grid__narrow_small">
        <Subscribe />
        <SpecialtyFilter :DocSpeciality="specialty" />
        <ClinTopics :ClinicalTheme="clinicalTopics" />
        <AgeGroup :AgeGroupPatients="ageGroup" />
        <PriceService :PriceServ="rateService" />
      </div>
      <Special :ClinicalTheme="clinicalTopics" />
    </div>
    <button @click="onClick">
      CLICK HERE!
    </button>
  </div>
</template>

<script>
import FindExpress from "@/components/views/catalog/components/Filter/FindExpress";
import SpecialtyFilter from "@/components/views/catalog/components/Filter/SpecialtyFilter";
import ClinTopics from "@/components/views/catalog/components/Filter/ClinTopics";
import AgeGroup from "@/components/views/catalog/components/Filter/AgeGroup";
import PriceService from "@/components/views/catalog/components/Filter/PriceService";
import Special from "@/components/views/catalog/components/Modal/Special";

export default {
  name: "Catalog",
  data() {
    return {
      specialty: [
        {
          id: 0,
          prof: "Gastroenterology",
        },
        {
          id: 1,
          prof: "Endocrinology",
        },
        {
          id: 2,
          prof: "Neurology",
        },
        {
          id: 3,
          prof: "Obstetrician-Gynecology",
        },
        {
          id: 4,
          prof: "Ophthalmology",
        },
        {
          id: 5,
          prof: "Pediatrics",
        },
        {
          id: 6,
          prof: "Reproductive Endocrinology",
        },
      ],
      ageGroup: [
        {
          id: 0,
          age: "Adult",
        },
        {
          id: 1,
          age: "Child",
        },
        {
          id: 2,
          age: "Babies and Infants",
        },
        {
          id: 3,
          age: "Teens and Young Adults",
        },
        {
          id: 4,
          age: "Elderly",
        },
      ],
      clinicalTopics: [
        {
          id: 0,
          theme: "Barrett's Esophagus",
        },
        {
          id: 1,
          theme: "Celiac Disease",
        },
        {
          id: 2,
          theme: "GERD",
        },
        {
          id: 3,
          theme: "Colorectal Cancer",
        },
        {
          id: 4,
          theme: "Gallbladder and Biliary Disease",
        },
        {
          id: 5,
          theme: "Peptic Ulcer Disease",
        },
        {
          id: 6,
          theme: "Hepatitis B",
        },
        {
          id: 7,
          theme: "Microbiome",
        },
        {
          id: 8,
          theme: "Inflammatory Bowel Disease",
        },
      ],
      rateService: [
        {
          id: 0,
          theme: "$10 - $50",
        },
        {
          id: 1,
          theme: "$51 - $150",
        },
        {
          id: 2,
          theme: "$151 - $250",
        },
        {
          id: 3,
          theme: "$251 -  $350",
        },
        {
          id: 4,
          theme: "$350 - $450",
        },
        {
          id: 5,
          theme: "$450 - $550",
        },
      ],
    };
  },
  components: {
    FindExpress,
    AgeGroup,
    SpecialtyFilter,
    ClinTopics,
    PriceService,
    Special,
  },
  methods: {
    onClick() {
      this.$modal.show("Special", {});
    },
  },
};
</script>

<style lang="scss" scoped></style>
