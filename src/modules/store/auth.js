//import router from "../router";
import AuthService from "@/modules/services/auth.service";

const authService = new AuthService();

const state = {
  isAuthenticated: false,
  authenticatedPromise: null,
  error: null
};

const getters = {};

const mutations = {
  SET_IS_AUTHENTICATED(state, value) {
    state.isAuthenticated = value;
  },
  SET_USER_PROMISE(state, promise) {
    state.authenticatedPromise = promise;
  }
};

const actions = {
  signIn: async ({ commit }, data) => {
    try {
      const res = await authService.signIn(data);

      if (res.status === 200) {
        //console.log(res.data);
        localStorage.setItem("token", res.data.access);
        // Добавил ?
        commit("SET_IS_AUTHENTICATED", true);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  pushSignUpData: async ({ commit }, data) => {
    try {
      const res = await authService.signIn(data);
      console.log(data);
      // if (res.status === 200) {
      //   localStorage.setItem("token", res.data.token);
      //   // Добавил ?
      //   commit("SET_IS_AUTHENTICATED", true);
      // }
      return res;
    } catch (error) {
      return error.response;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
  root: true
};
