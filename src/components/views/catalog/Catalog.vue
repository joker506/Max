<template>
  <div>
    <FindExpress :DocSpeciality="specialty" :DocCompany="docCompany" />

    <div class="grid">
      <div class="grid__wide">
        <div class="row" v-if="filterDoctor">
          <!-- <div class="col col_1-2" v-for="doc in physicin" :key="doc.id">
            <router-link :to="'/catalog/card/' + doc.id">
              <Card
                :name="doc.name"
                :adress="doc.email"
                :city="doc.address.city"
                hasFooter
                size="middle"
              />
            </router-link>
          </div> -->
          <div class="col col_1-2" v-for="doc in showDoc" :key="doc.id">
            <router-link :to="'/catalog/card/' + doc.id">
              <Card
                :name="doc.name"
                :adress="doc.email"
                :city="doc.address.city"
                hasFooter
                size="middle"
              />
            </router-link>
          </div>
        </div>
        <Button
          size="middle"
          class="button_outline button_light button_full"
          label="See another expert"
          @click="showeMore"
        />
      </div>
      <div class="grid__narrow grid__narrow_small">
        <Subscribe />
        <SpecialtyFilter :DocSpeciality="specialty" />
        <ClinTopics :ClinicalTheme="clinicalTopics" />
        <AgeGroup :AgeGroupPatients="ageGroup" />
        <PriceService :PriceServ="rateService" />
      </div>
      <Special :ClinicalTheme="clinicalTopics" />
      <FilterName :DocSpeciality="specialty" />
      <FilterLocation :DocSpeciality="specialty" :AgeGroupPatients="ageGroup" />
      <Bio />
    </div>
    <button @click="show">click</button>
    <button @click="showFilterModal">click</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import FindExpress from "@/components/views/catalog/components/Filter/FindExpress";
import SpecialtyFilter from "@/components/views/catalog/components/Filter/SpecialtyFilter";
import ClinTopics from "@/components/views/catalog/components/Filter/ClinTopics";
import AgeGroup from "@/components/views/catalog/components/Filter/AgeGroup";
import PriceService from "@/components/views/catalog/components/Filter/PriceService";
import Special from "@/components/views/catalog/components/Modal/Special";
import FilterName from "@/components/views/catalog/components/Modal/FilterName";
import FilterLocation from "@/components/views/catalog/components/Modal/FilterLocation";
import Bio from "@/components/views/catalog/components/Modal/Bio";

export default {
  name: "Catalog",
  data() {
    return {};
  },
  components: {
    FindExpress,
    AgeGroup,
    SpecialtyFilter,
    ClinTopics,
    PriceService,
    Special,
    FilterName,
    FilterLocation,
    Bio,
  },
  computed: {
    ...mapState({
      physicin: (state) => state.physicin.physicins,
      specialty: (state) => state.speciality.specialty,
      ageGroup: (state) => state.speciality.ageGroup,
      clinicalTopics: (state) => state.speciality.clinicalTopics,
      rateService: (state) => state.speciality.rateService,
    }),

    ...mapGetters({
      filterDoctor: "physicin/getDoctor",
      docCompany: "physicin/getDocCompany",
    }),
    showDoc() {
      if (this.filterDoctor.length) {
        return this.filterDoctor;
      } else {
        return this.physicin;
      }
    },
  },
  methods: {
    showeMore() {
      console.log("showeMore");
    },
    show() {
      this.$modal.show("FilterName");
    },
    hide() {
      this.$modal.hide("Special");
    },
    showFilterModal() {
      this.$modal.show("Special");
    },
    hideFilterModal() {
      this.$modal.hide("FilterName");
    },
  },
  mounted() {
    this.filterDoctor;
    this.$store.dispatch("physicin/docUser");
  },
};
</script>

<style lang="scss" scoped></style>
