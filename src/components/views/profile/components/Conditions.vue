<template>
  <div class="conditions">
    <div class="conditions__panel">
      <p class="conditions__panel-content">
        Create your list of required data to get full view of a clinical case.
        You can select questionnaire or particular questions from our Library
      </p>
    </div>
    <div class="block__wrap">
      <div class="col col_1-2">
        <h2 class="block__title">Medical data query</h2>

        <div class="block__drop">
          <vue-dropzone
            class="dropzone_file"
            id="fileZone"
            :options="dropzoneImageOptions"
            :useCustomSlot="true"
          >
            <span class="dropzone__title"
              >Drag & drop question from Library</span
            >
          </vue-dropzone>
        </div>
      </div>
      <div class="col col_1-2">
        <h2 class="block__title">Library of Questions</h2>
        <div class="block__library">
          <div class="block__input-wrap">
            <Input
              size="middle"
              purpose="default"
              class="section__input language__input"
              v-model="priceConsult"
              legend="Enter keywords or biomarker to find question"
              placeholder="Enter keywords or biomarker to find question"
            />
          </div>
          <div class="block__random">
            <h2 class="block__random-title">Random</h2>
            <ul class="block__random-items">
              <li
                class="block__random-item"
                v-for="(item, index) in 8"
                :key="index"
              >
                Celiac Disease
              </li>
            </ul>
          </div>
          <div class="block__results">
            <h2 class="block__results-title">Searching results</h2>
            <span class="block__results-prompt"
              >no search request, below are random questions from Library</span
            >
          </div>
          <div class="block__type">
            <ul class="type__items">
              <li
                class="type__item"
                v-for="(i, index) in items"
                :key="index"
                :class="{ type__active: isSelected == i.name }"
                @click="isSelected = i.name"
              >
                {{ i.item }}
              </li>
            </ul>
          </div>
          <div class="">
            <component v-bind:is="isSelected"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import CardsQuestion from "@/components/views/profile/components/CardsQuestion";
import CardsBlock from "@/components/views/profile/components/CardsBlock";
import CardsChapters from "@/components/views/profile/components/CardsChapters";
import CardsQuestionary from "@/components/views/profile/components/CardsQuestionary";
export default {
  name: "Conditions",
  data() {
    return {
      isSelected: "CardsQuestionary",
      items: [
        { id: 0, item: "Questionnaires", name: "CardsQuestionary" },
        { id: 1, item: "Chapters", name: "CardsChapters" },
        { id: 2, item: "Blocks", name: "CardsBlock" },
        { id: 3, item: "Questions", name: "CardsQuestion" },
      ],
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
    CardsQuestion,
    CardsBlock,
    CardsChapters,
    CardsQuestionary,
  },
};
</script>

<style lang="scss" scoped>
.conditions {
  &__panel {
    background: #bff2ea;
    border-radius: 10px;
    height: 57px;
    margin-bottom: 20px;

    &-content {
      padding: 20px;

      @include below(md) {
        padding: 5px;
        font-size: 10px;
      }
    }
  }
}
.block {
  &__wrap {
    display: flex;
    justify-content: space-between;

    box-shadow: 0px 5px 45px -25px rgba(226, 235, 241, 0.6);
    border-radius: 10px;
  }
  &__title {
    margin: 20px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #2c323f;
  }
  &__drop {
    width: 98%;
    margin: auto;
    background: #f8f8f8;
    border-radius: 6px;
  }
  &__library {
    width: 98%;
    margin: auto;
    border-radius: 6px;
  }
  &__input {
    &-wrap {
      margin-bottom: 20px;
    }
  }
  &__random,
  &__results {
    border-bottom: 1px solid #f1f1f5;
    padding-bottom: 10px;
    &-title {
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      text-align: left;
    }
    &-item {
      display: inline-flex;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 4px 11px;
      background: #f8f8f8;
      border: 1px solid #bfc1c5;
      border-radius: 3px;
    }
  }
  &__results {
    margin-top: 20px;
    border-bottom: none;
    &-prompt {
      font-style: italic;
      font-weight: normal;
      font-size: 13px;
      color: #80848c;
    }
  }
  &__type {
    margin-top: 30px;
    margin-bottom: 20px;
  }
}
.col {
  width: 49%;
  background: #ffffff;
  border-radius: 10px;
  padding-bottom: 30px;
}
.type {
  &__items {
    display: flex;
    border: 1px solid #565b65;
    box-sizing: border-box;
    border-radius: 6px 0px 0px 6px;
  }
  &__item {
    width: 25%;
    text-align: center;
    cursor: pointer;
    align-items: center;
    padding: 6px 10px;
    border: 1px solid #565b65;
    box-sizing: border-box;
    border-radius: 0px;
  }
  &__active {
    background: #565b65;
    color: $body-bg;
  }
}
</style>
