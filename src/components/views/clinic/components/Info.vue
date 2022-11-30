<template>
  <div class="info">
    <div
      class="info__cover"
      :style="{ backgroundImage: 'url(' + cover + ')' }"
    ></div>
    <div class="info__content info__content_top">
      <div class="info__caption">
        <h1 class="info__title">{{ title }}</h1>
        <div class="info__login">{{ login }}</div>
      </div>
      <Button class="info__button" label="$200 / consultation" />
    </div>
    <div class="info__content info__content_bottom">
      <ul class="info__details">
        <li class="info__details-item">
          <div class="info__details-legend">Online</div>
          <div class="info__details-value">4 Hours ago</div>
        </li>
        <li class="info__details-item">
          <div class="info__details-legend">Case solving</div>
          <div class="info__details-value">3-5 days</div>
        </li>
        <li class="info__details-item">
          <div class="info__details-legend">Fast-track</div>
          <div class="info__details-value">
            <span class="highlight">Yes</span>
          </div>
        </li>
        <li class="info__details-item">
          <div class="info__details-legend">Solved</div>
          <div class="info__details-value">21 cases</div>
        </li>
        <li class="info__details-item">
          <div class="info__details-legend">Views</div>
          <div class="info__details-value">418 users</div>
        </li>
      </ul>
    </div>
    <Avatar :image="avatar" class="info__avatar" />
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    cover: String,
    title: String,
    login: String,
  },
  data() {
    return {
      avatar: require("../../../../assets/img/avatar.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.info {
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 5px 45px 25px rgba(226, 235, 241, 0.6);
  position: relative;
  margin-bottom: 40px;

  @include below(lg) {
    margin-bottom: 30px;
  }
  @include below(md) {
    margin-bottom: 20px;
  }

  &__cover {
    height: 150px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px 10px 0 0;

    @include below(lg) {
      height: 120px;
    }
    @include below(md) {
      height: 100px;
    }
    @include below(sm) {
      height: 70px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding-left: 250px;
    padding-right: 30px;

    @include below(lg) {
      padding-left: 180px;
    }
    @include below(md) {
      padding-left: 135px;
      padding-right: 20px;
    }
    @include below(sm) {
      padding: 20px;
    }

    &_top {
      align-items: flex-start;
      padding-top: 27px;
      padding-bottom: 17px;
      min-height: 100px;

      @include below(lg) {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      @include below(md) {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      @include below(sm) {
        padding-top: 30px;
        padding-bottom: 20px;
        flex-direction: column;
        align-items: center;
      }
    }

    &_bottom {
      border-radius: 0 0 10px 10px;
      background-color: #f8f8f8;
      padding-top: 19px;
      padding-bottom: 16px;

      @include below(lg) {
        padding-top: 15px;
        padding-left: 20px;
        padding-bottom: 15px;
      }
      @include below(md) {
        padding: 10px 20px;
      }
      @include below(sm) {
        padding: 15px 20px;
      }
    }
  }

  &__caption {
    flex: auto;
    padding-right: 40px;

    @include below(md) {
      padding-right: 20px;
    }
    @include below(sm) {
      padding-right: 0;
      margin-bottom: 10px;
      text-align: center;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: 0.2px;
    color: $color-dark;
    margin-bottom: 3px;

    @include below(lg) {
      font-size: 20px;
    }
    @include below(md) {
      font-size: 18px;
    }
    @include below(sm) {
      font-size: 16px;
    }
  }

  &__login {
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.1px;
    color: $color-primary;
  }

  &__button {
    flex: none;
    position: relative;
    top: 3px;

    @include below(sm) {
      top: auto;
    }
  }

  &__details {
    display: flex;

    @include below(sm) {
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: -20px;
    }
  }

  &__details-item {
    margin-right: 41px;

    @include below(md) {
      margin-right: 30px;
    }
    @include below(sm) {
      margin-right: 0;
      width: percentage(1/2);
      text-align: center;
      margin-bottom: 20px;
    }
  }

  &__details-legend {
    margin-bottom: 1px;

    @include below(sm) {
      margin-bottom: -2px;
    }
  }

  &__details-value {
    font-weight: bold;
  }

  &__avatar {
    position: absolute;
    top: 100px;
    left: 30px;

    @include below(lg) {
      top: 70px;
      left: 20px;
    }
    @include below(md) {
      top: 50px;
      left: 15px;
    }
    @include below(sm) {
      top: 15px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
}
</style>
