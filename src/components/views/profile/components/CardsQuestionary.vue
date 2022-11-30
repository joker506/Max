<template>
  <div>
    <div class="cards-question" v-for="item in questions" :key="item.id">
      <CardQuestion :question="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardQuestion from "@/components/views/profile/components/CardQuestion";
export default {
  name: "CardsQuestionary",
  components: {
    CardQuestion,
  },
  computed: {
    ...mapState({
      questions: (state) => state.speciality.question,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
