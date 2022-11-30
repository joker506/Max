<template>
  <div>
    <div class="cards-question" v-for="item in questions" :key="item.id">
      <CardQuestion :question="item" />
    </div>
  </div>
</template>

<script>
import CardQuestion from "@/components/views/profile/components/CardQuestion";
import { mapState } from "vuex";
export default {
  name: "CardsChapters",
  components: {
    CardQuestion,
  },
  computed: {
    ...mapState({
      questions: (state) => state.speciality.specialty,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
