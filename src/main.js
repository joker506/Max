import Vue from "vue";
import App from "./App.vue";
import bus from "./modules/utils/bus";
import router from "./modules/router";
import store from "./modules/store";
import "./plugins/axios";
import "./plugins/buefy";

import {
  filter,
  forEach,
  isUndefined,
  isEmpty,
  isArray,
  includes,
  find,
  cloneDeep,
  assign
} from "lodash-es";
import "./baseComponents";
import vmodal from "vue-js-modal";
import Autocomplete from "@trevoreyre/autocomplete-vue";
import "@trevoreyre/autocomplete-vue/dist/style.css";
import Vuelidate from "vuelidate";

import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

Vue.use(vmodal);
Vue.use(Autocomplete);
Vue.use(Vuelidate);

Vue.prototype.$lodash = {
  isUndefined,
  isEmpty,
  isArray,
  includes,
  filter,
  find,
  forEach,
  cloneDeep,
  assign
};

Vue.prototype.$bus = bus;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
