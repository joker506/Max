<template>
    <modal class="modal" :width="648" height="auto" :adaptive="true" name="modalShare">
        <div class="modal__header">
            <div class="modal__title">Share it</div>
            <button class="modal__close" @click="$modal.hide('modalShare')">
                <Icon name="icon-cross" />
            </button>
        </div>
        <div class="modal__body">
            <div class="share">
                <div class="share__user">
                    <div class="share__user-ava">
                        <img src="../../assets/img/avatar-user.jpg" alt="">
                    </div>
                    <div class="share__user-content">
                        <div class="share__user-title">Dr. Charlez Norman Friedlander</div>
                        <div class="share__user-login">@friedlandercharlez</div>
                        <div class="share__user-tags">Gastroenterology | Obstetrics & Gynecology | Reproductive Endocrinology</div>
                    </div>
                </div>
                <ul class="share__items">
                    <li
                        v-for="item in shareItems"
                        :key="item.id"
                        class="share__item">
                        <a :href="item.link" target="_blank" class="share__item-link">
                            <Icon class="share__item-icon" :name="item.iconName" />
                        </a>
                    </li>
                </ul>
                <div class="share__group">
                    <div class="share__subtitle">or Copy Link</div>
                    <div class="share__field">
                        <input ref="text" type="text" class="share__input" readonly="readonly" value="medd.pro/friedlandercharlez">
                        <Button @click="copyLink" class="share__button">Copy</Button>
                    </div>
                </div>
                <div class="share__group">
                    <div class="share__subtitle">or Email</div>
                    <div class="share__field">
                        <input type="email" class="share__input" placeholder="name@mail.com">
                        <Button class="share__button">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        name: "Share",
        data() {
            return {
                shareItems: [
                    {
                        id: 0,
                        iconName: "icon-fb",
                        link: "#",
                    },
                    {
                        id: 1,
                        iconName: "icon-tw",
                        link: "#",
                    },
                    {
                        id: 2,
                        iconName: "icon-inst",
                        link: "#",
                    } ,
                    {
                        id: 3,
                        iconName: "icon-pinterest",
                        link: "#",
                    } ,
                    {
                        id: 4,
                        iconName: "icon-in",
                        link: "#",
                    }
                ]
            }
        },
        methods: {
            copyLink() {
                this.$refs.text.select();
                document.execCommand('copy');
            }
        },
    }
</script>

<style lang="scss" scoped>
    .share {
        &__user {
            display: flex;
            align-items: flex-start;
            margin-bottom: 35px;
        }
        &__user-ava {
            flex: none;
            width: 64px;
            height: 64px;
            overflow: hidden;
            border-radius: 50%;
            position: relative;
            top: 1px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &__user-content {
            margin-left: 20px;
        }
        &__user-title {
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 0.2px;
            color: $color-dark;
            line-height: 1.2;
            margin-bottom: 2px;
        }
        &__user-login {
            color: $color-primary;
        }
        &__user-tags {
            color: #80848C;
            margin-top: 1px;
        }
        &__items {
            display: flex;
            align-items: center;
            line-height: 1;
            margin-bottom: 39px;
        }
        &__item {

            & + & {
                margin-left: 30px;
            }
        }
        &__item-link {
            display: block;
            font-size: 45px;
        }
        &__group {
            margin-bottom: 29px;

            &:last-child {
                margin-bottom: 0;
            }
        }
        &__subtitle {
            font-weight: bold;
            margin-bottom: 11px;
        }
        &__field {
            border: 1px solid #ABADB2;
            box-sizing: border-box;
            border-radius: 6px;
            height: 48px;
            position: relative;
        }
        &__input {
            height: 100%;
            width: 100%;
            border: none;
            background: transparent;
            padding: 0 90px 0 15px;

            @include placeholder {
                color: #ABADB2;
            }
        }
        &__button {
            min-width: 75px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 4px;
        }
    }
</style>
