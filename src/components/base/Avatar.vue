<template>
  <div :class="['avatar', `avatar_${size}`]">
    <img class="avatar__img" :src="image" alt="" role="presentation" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    to: {
      type: String,
      default: "#",
    },
    href: {
      type: String,
      default: "#",
    },
    size: {
      type: String,
      default: "large", // middle
    },
    image: {
      type: String,
      default: "https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-68",
    },
    borderRadius: {
      type: String,
      default: "50%",
    },
    userName: {
      type: String,
      default: "/profile",
    },
  },
  methods: {
    clickHandler() {
      if (this.$props.userName === "") {
        this.$emit("click");
      } else {
        this.$router.push(`/profile`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  border-color: #ffffff;
  border-style: solid;
  flex: none;

  &_large {
    width: 189px;
    height: 189px;
    border-width: 8px;

    @include below(lg) {
      width: 140px;
      height: 140px;
      border-width: 6px;
    }
    @include below(md) {
      width: 110px;
      height: 110px;
      border-width: 4px;
    }
    @include below(sm) {
      width: 80px;
      height: 80px;
    }
  }
  &_middle {
    width: 100px;
    height: 100px;
    border-width: 5px;

    @include below(md) {
      width: 60px;
      height: 60px;
      border-width: 3px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
