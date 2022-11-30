<template>
  <div class="has-panel-page">
    <Breadcrumb :login="doc.email" />
    <Info :cover="cover" :title="doc.name" :login="doc.email" />
    <div class="grid">
      <div class="grid__wide">
        <ProfessActivity />

        <TabsBlock />
        <Tracks />
        <div class="block">
          <div class="block__header">
            <div class="block__title">User reviews</div>
          </div>
          <div class="block__content">
            <Review />
            <div class="block__control">
              <Button
                size="middle"
                class="info__button button_light button_outline button_full"
                >See another review</Button
              >
            </div>
          </div>
        </div>
      </div>
      <!-- .grid__wide -->
      <div class="grid__narrow">
        <div class="block">
          <div class="block__item">
            <span class="block__legend">Operating since 1990</span>
          </div>
          <div class="block__item">
            <Icon class="block__item-icon" :name="placeIconName" />
            <span class="block__legend" v-if="doc.address"
              >{{ doc.address.city }}, CA, USA</span
            >
          </div>
          <div class="block__content">
            <div class="block__group">
              <div class="block__subtitle">Langauges Spoken</div>
              <div class="block__text">English, German</div>
            </div>
            <div class="block__group">
              <div class="block__subtitle">Executive physicians</div>
              Должен быть компонен List
            </div>
            <div class="block__group">
              <div class="block__subtitle">MEDD rank</div>
              <Rank />
            </div>
          </div>
        </div>
        <div class="block">
          <div class="block__header">
            <div class="block__title">Equipment and Capabilities</div>
          </div>
          <div class="block__content">
            Должен быть компонен List
          </div>
        </div>
        <div class="block">
          <div class="block__header">
            <div class="block__title">Insurance accepted</div>
          </div>
          <div class="block__content">
            Должен быть компонен List
          </div>
        </div>
        <div class="block">
          <div class="block__header">
            <div class="block__title">Memberships of executive experts</div>
          </div>
          <div class="block__content">
            Должен быть компонен List
          </div>
        </div>
      </div>
      <!-- .grid__narrow -->
    </div>
    <!-- .grid -->
    <Slider />
    <Panel />
  </div>
</template>

<script>
//import axios from "axios";
import Info from "@/components/views/clinic/components/Info";
import TabsBlock from "@/components/views/clinic/components/TabsBlock";
import Tracks from "@/components/views/clinic/components/Tracks";
import Slider from "@/components/views/clinic/components/Slider";
import Panel from "@/components/blocks/Panel";
import ProfessActivity from "@/components/views/physician/components/ProfessActivity";
import { mapState } from "vuex";

export default {
  name: "Physicin",
  components: {
    Info,
    TabsBlock,
    Tracks,
    Slider,
    Panel,
    ProfessActivity,
  },
  data() {
    return {
      //doc: {},
      cover: require("./../../../assets/img/cover-3.jpg"),
      //title: "Dr. Charlez Norman Friedlander",
      login: "@friedlandercharlez",
      placeIconName: "icon-place",
    };
  },
  computed: {
    ...mapState({
      doc: (state) => state.physicin.physicin,
    }),
  },
  mounted() {
    this.fetchPost();
  },

  methods: {
    fetchPost() {
      let _id = this.$route.params.id;
      this.$store.dispatch("physicin/setPhysicin", _id);
      // return axios
      //   .get("https://jsonplaceholder.typicode.com/users/" + _id)
      //   .then((response) => (this.doc = response.data));
    },
  },
};
</script>

<style lang="scss" scoped></style>
