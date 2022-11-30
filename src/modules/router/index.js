import Vue from "vue";
import Router from "vue-router";
import Store from "../store";
//
// import find from 'lodash-es/find';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      props: true,
      meta: {
        title: "Главная"
      },
      component: () =>
        import(/* webpackChunkName: "Home" */ "../../components/pages/Home.vue")
    },
    {
      path: "/signup",
      name: "Signup",
      meta: {
        title: "Регистрация"
      },
      component: () =>
        import(/* webpackChunkName: "Signup" */ "../../components/pages/SignUpPage.vue")
    },
     {
      path: "/sign_up",
      name: "SignUp",
      meta: {
        title: "Регистрация"
      },
      component: () =>
        import( /* webpackChunkName: "SignUp" */ "../../components/pages/SignUp.vue")
    },
    {
      path: "/catalog",
      name: "Catalog",
      meta: {
        title: "Каталог"
      },

      component: () =>
        import(
          /* webpackChunkName: "Catalog" */ "../../components/pages/Catalog.vue"
        )
    },
    {
      path: "/catalog/card/:id",
      name: "Physician",

      meta: {
        title: "Врач"
      },
      // beforeEnter: function(to, from, next) {
      //   if (Store.state["auth/isAuthenticated"]) {
      //     next("/dashboard");
      //   } else {
      //     next("/");
      //   }
      // },
      component: () =>
        import(
          /* webpackChunkName: "Card" */ "../../components/pages/Physician.vue"
        )
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      props: true,
      meta: {
        title: "Dashboard"
      },
      // beforeEach: function(to, from, next) {
      //   if (Store.state["auth/isAuthenticated"]) {
      //     next("/dashboard");
      //   } else {
      //     next("/");
      //   }
      // },
      component: () =>
        import(
          /* webpackChunkName: "Dashboard" */ "../../components/pages/Dashboard.vue"
        )
    },
    {
      path: "/dashboard/aplication",
      name: "Aplication",
      props: true,
      meta: {
        title: "Aplication"
      },

      component: () =>
        import(
          /* webpackChunkName: "AplicationPage" */ "../../components/pages/AplicationPage.vue"
        )
    },
    {
      path: "/clinic",
      name: "Clinic",
      meta: {
        title: "Клиника"
      },

      component: () =>
        import(
          /* webpackChunkName: "Clinic" */ "../../components/pages/Clinic.vue"
        )
    },
    {
      path: "/consultation",
      name: "Consultation",
      props: true,
      meta: {
        title: "Consultation"
      },

      component: () =>
        import(
          /* webpackChunkName: "Consultation" */ "../../components/pages/ConsultationPage.vue"
        )
    },
    {
      path: "*",
      name: "PageNotFound",
      meta: {
        title: "Страница не найдена"
      },
      component: () =>
        import(
          /* webpackChunkName: "PageNotFound" */ "../../components/pages/PageNotFound.vue"
        )
    }
  ]
});

const DEFAULT_TITLE = "Some Default Title";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

// router.beforeEach((to, from, next) => {
// const accessDeniedToInnerPages = [
//   'Home',
// ];
// const accessDeniedToOuterPages = [
//   'SignIn',
//   'SignUp',
// ];
// store.dispatch('user/getUser').then(() => {
//   let isAuthenticated = store.state.auth.isAuthenticated;
//   let isFindDeniedPage = (pages) => find(pages, (name) => name === to.name);
//   if (to.name !== 'SignIn' && !isAuthenticated && !!isFindDeniedPage(accessDeniedToInnerPages)) {
//     next({
//       name: 'SignIn',
//     });
//   } else if (isAuthenticated && !!isFindDeniedPage(accessDeniedToOuterPages)) {
//     next({
//       name: 'Home',
//     });
//   } else {
//     next({});
//   }
// });
// });

export default router;
