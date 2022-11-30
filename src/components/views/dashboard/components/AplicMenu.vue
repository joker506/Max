<template>
  <div class="aside">
    <div class="aside__wrap">
      <ul class="aside__menu-items">
        <li class="aside__menu-item" v-for="item in menuLinks" :key="item.id">
          <router-link class="aside__menu-item-link" to="/">
            {{ item.link }}</router-link
          >
          <Icon v-if="req" class="aside__icon" name="icon-checked " />
          <Icon v-else class="aside__icon" name="" />

          <!-- name='step-correct' -->
        </li>
      </ul>
      <Button class="aside__btn" label="Autosaved 5 seconds ago" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AplicationMenu",
  data() {
    return {
      req: true,
      menuLinks: [
        {
          id: 0,
          link: "General information",
        },
        {
          id: 1,
          link: "Basic info about Profession",
        },
        {
          id: 2,
          link: "Basic info about Medical Practice",
        },
        {
          id: 3,
          link: "Practice Offices",
        },
        {
          id: 4,
          link: "Job experience",
        },
        {
          id: 5,
          link: "Education and Trainings",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.aside {
  width: 350px;
  background: #414652;
  color: $body-bg;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &__wrap {
    width: 300px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  &__menu-items {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  &__menu-item {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding: 30px;

    &-link {
      color: $body-bg;
    }
  }
  &__btn {
    width: 170px;
    height: 34px;
    font-size: 12px;
    font-weight: normal;
    padding: 10px 18px;
    background: rgba(0, 203, 173, 0.15);
    border-radius: 6px;
    display: flex;
    margin: 0 auto;
  }
  &__icon {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 19px;
    right: -43px;
  }
}
</style>
