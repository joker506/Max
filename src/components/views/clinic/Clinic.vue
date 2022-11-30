<template>
  <div class="has-panel-page">
    <Breadcrumb />
    <Info :cover="cover" :title="title" :login="login" />

    <div>
      <div class="grid">
        <div class="grid__wide">
          <Notation />
          <Block title="Executive experts (Clinical board)">
            <Cards />
          </Block>
          <TabsBlock />
          <Tracks />
          <div class="block">
            <div class="block__header">
              <div class="block__title">User reviews</div>
            </div>
            <div class="block__content">
              <Review />
              <div class="block__control">
                <Button size="middle" variant="light" outline class="button_full">See another review</Button>
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
              <Icon class="block__item-icon" name="icon-place" />
              <span class="block__legend">Los Angeles, CA, USA</span>
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
    </div>

    <div class="grid grid_reverse">
      <div class="grid__wide">
        <Block title="Clinic reviews">
          <Review v-for="(index) in 8" :key="index" />
        </Block>
      </div>
      <!-- .grid__wide -->
      <div class="grid__narrow">
        <Block title="Recommended experts" linkUrl="#" linkText="More">
          <div class="row">
            <div class="col col_1-1" v-for="index in 4" :key="index">
              <Expert />
            </div>
          </div>
        </Block>
      </div>
      <!-- .grid__narrow -->
    </div>
    <!-- .grid -->

    <Question />

    <Panel />
    <Share />
  </div>
</template>

<script>
import Info from "@/components/views/clinic/components/Info";
import Cards from "@/components/views/clinic/components/Cards";
import TabsBlock from "@/components/views/clinic/components/TabsBlock";
import Tracks from "@/components/views/clinic/components/Tracks";
import Slider from "@/components/views/clinic/components/Slider";
import Panel from "@/components/blocks/Panel";
import Question from "@/components/views/clinic/components/Question";

export default {
  name: "Clinic",
  components: {
    Info,
    Cards,
    TabsBlock,
    Tracks,
    Slider,
    Panel,
    Question
  },
  data() {
    return {
      cover: require("./../../../assets/img/cover.jpg"),
      title: "Dignity Health - California Hospital Medical Center",
      login: "@friedlandercharlez",
    };
  },
};
</script>

<style lang="scss" scoped></style>
