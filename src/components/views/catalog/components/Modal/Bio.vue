<template>
  <modal
    :height="850"
    :width="750"
    :scrollable="true"
    :adaptive="true"
    name="Bio"
  >
    <div class="bio">
      <div class="bio__top">
        <div class="bio__wrap">
          <h2 class="bio__title">My Bio</h2>
          <button @click="$modal.hide('Bio')">
            ❌
          </button>
        </div>
      </div>
      <div class="bio__body">
        <div class="bio__wrap-body">
          <!-- <p class="body__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod volutpat aliquam sagittis iaculis. Nunc nec adipiscing
            natoque lectus iaculis cursus velit. Ultrices ut non ut lacus.
            Ultrices eget nulla cursus diam tristique convallis. Lectus sagittis
            et sed orci vel velit malesuada odio. Venenatis tortor sit neque
            turpis mi odio. Vestibulum condimentum tincidunt vivamus a tristique
            laoreet. Sed ante pellentesque id felis fringilla ornare in sem
            enim. Cras tristique urna, leo pulvinar enim mus. Praesent id
            venenatis consequat, sed semper vitae dui fermentum, quam. Vitae at
            quis orci tempus, gravida arcu, maecenas non bibendum.
          </p>
          <p class="body__content">
            Nulla risus ac nibh sapien tortor eget viverra. Ultricies proin
            curabitur pellentesque justo sagittis. Sapien massa a at nullam.
            Lorem sed velit malesuada ut ac, in massa. Feugiat molestie est
            rhoncus, tincidunt. At quis accumsan donec egestas cras est, elit.
            Enim nascetur id amet, mauris aliquet quam pellentesque eget a.
            Aliquam purus et feugiat imperdiet varius nam penatibus. Dignissim
            condimentum ut auctor in bibendum sed habitasse. Sit quisque vitae
            vulputate mi est risus consequat. Elit amet non sit suscipit
            ullamcorper auctor feugiat. Velit odio semper molestie nec malesuada
            adipiscing. Arcu ut venenatis magna non amet, purus ut tellus
            libero. Volutpat dui rhoncus ornare scelerisque interdum.
            Vestibulum, nec at leo quis nibh at parturient. Neque, turpis nibh
            ipsum pharetra dictum imperdiet.
          </p>
          <p class="body__content">
            Placerat mus eget nisi, suspendisse pharetra, nulla velit volutpat
            ultrices. Eu urna pulvinar tortor pretium tortor. Auctor sed
            consectetur ut faucibus penatibus sed tincidunt mattis. Vitae etiam
            eu, enim enim maecenas quis et volutpat suscipit. Congue scelerisque
            tortor, sed odio id congue tortor elit in. Pharetra elit diam enim
            in vitae. Elit venenatis consectetur at lectus. Sapien malesuada
            adipiscing tempor nullam tincidunt eget vitae tincidunt.
          </p> -->
        </div>
      </div>
      <div class="bio__bottom">
        <div class="bio__wrap-bottom">
          <ul class="bottom__items">
            <li class="bottom__item">Official site</li>
            <li class="bottom__item">Blog</li>
            <li class="bottom__item">Mentor clinics site</li>
            <li class="bottom__item">LinkedIn</li>
          </ul>
          <ul class="bottom__items">
            <li class="bottom__item">
              <a class="bottom__item_link" href="#"> Official site</a>
            </li>
            <li class="bottom__item">
              <a class="bottom__item_link" href="#"> Blog</a>
            </li>
            <li class="bottom__item">
              <a class="bottom__item_link" href="#"> Mentor clinics site</a>
            </li>
            <li class="bottom__item">
              <a class="bottom__item_link" href="#"> LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </modal>
</template>

<script>
export default {
  name: "Bio",
};
</script>

<style lang="scss" scoped>
.bio {
  border-radius: 10px;
  &__top {
    border-bottom: 2px solid #f8f8f8;
    background: #ffffff;
  }
  &__title {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 28px;
    &-body {
      width: 95%;
      justify-content: space-between;
      margin: 0 auto;
    }
    &-bottom {
      width: 95%;
      margin: 0 auto;
      display: flex;
    }
  }

  &__body {
    border-bottom: 2px solid #f8f8f8;
  }
  &__bottom {
    margin-top: 30px;
  }
}
.body__content {
  margin-bottom: 40px;
  &:nth-child(1) {
    margin-top: 30px;
  }
}
.bottom__items {
  margin-right: 10px;
}
.bottom__item {
  margin: 5px 0;
  color: #80848c;
  &_link {
    color: #00cbad;
  }
}
</style>
