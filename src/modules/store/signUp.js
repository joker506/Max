//import router from "../router";
//import AuthService from "@/modules/services/auth.service";
import SignService from "@/modules/services/signup.service";
const signService = new SignService();

const state = {
  allCountries: [],
  userRole: [],
  role: {
    //idGroup: null,
    //idType: null,
    // identifier: null,
    // password: null,
    // password_repeat: null,
    // profile_group: null,
    // profile_type: null
  },
  rolePhone: {},
  params: {},
  userCountry: {},
  userCity: {},
  userLang: {},
  groupRoles: [],
  typesRoles: [],
  isAuthenticated: false,
  authenticatedPromise: null,
  error: {
    error: false
  }
};

const getters = {
  getGroup() {
    return state.role.profile_group;
  },
  profileTypes() {
    return state.typesRoles;
  },
  typeRole() {
    let arr = state.typesRoles;
    let p = Object.keys(arr);
    return arr[p].id;
  }
};
const mutations = {
  // GET_PARAMS(state, payload) {
  //   state.params = payload;
  // },
  GET_ERROR(state, payload) {
    state.error.error = payload.error;
    state.error.message = payload.message;
    //console.log(state.error.error);
  },
  CLEAR_ERROR(state, payload) {
    state.error.message = payload;
    state.error.error = payload;

    //console.log(state.error);
  },
  SIGN_UP_EMAIL(state, payload) {
    state.role.identifier = payload.identifier;
    state.role.password = payload.password;
    state.role.password_repeat = payload.password_repeat;
  },
  SIGN_UP_PHONE(state, payload) {
    //console.log(payload);
    if (payload.identifier) {
      state.role.identifier = payload.identifier;
      //state.role.profile_type = payload.profile_type;
      //console.log(state.role.profile_type);
    } else if (payload.password && payload.password_repeat) {
      state.role.password = payload.password;
      state.role.password_repeat = payload.password_repeat;
    }
  },
  SIGN_UP_MERCHANT(state, payload) {
    //console.log(payload);
    state.role.identifier = payload.identifier;
    state.role.profile_type = payload.profile_type;
    //console.log(state.role.profile_type);
  },

  GET_CHECK_TYPES(state, payload) {
    state.role.profile_type = payload;
    console.log(payload);
  },
  GET_TYPES(state, payload) {
    state.typesRoles = payload.types;
    //console.log(payload.types);
  },
  SET_ROLE(state, payload) {
    state.role.profile_group = payload.id;
    //console.log(payload);
  },
  GET_GROUP_ROLES(state, value) {
    state.groupRoles = value;
  },
  SET_USER_PROMISE(state, promise) {
    state.authenticatedPromise = promise;
  },
  GET_POSITION(state, payload) {
    // console.log(payload);
    state.userCountry.id = 0;
    state.userCountry.name = payload.country_name;
    state.userCity.id = 0;
    state.userCity.name = payload.city;
    state.userLang.id = 0;
    state.userLang.name = payload.country_name;
  },
  GET_ALL_COUNTRY(state, payload) {
    state.allCountries = payload;
  }
};

const actions = {
  getGroups: async ({ commit }) => {
    try {
      const res = await signService.getGroups();
      if (res.status === 200) {
        // localStorage.setItem("token", res.data.token);
        // Добавил ?
        console.log(res.data);
        commit("GET_GROUP_ROLES", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getTypes: async ({ commit }, idGroup) => {
    try {
      const res = await signService.sendGroup(idGroup);
      if (res.status === 200) {
        // localStorage.setItem("token", res.data.token);
        // Добавил ?
        console.log(res.data);
        commit("GET_TYPES", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpAnonum: async ({ commit }, data) => {
    try {
      data = state.role;
      // console.log(data);
      const res = await signService.signUpAnonum(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpVerifyEmailUser: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpVerifyEmailUser(data);
      if (res.status === 200) {
        console.log(res.data);
        //commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        //commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpVerifyEmailCompany: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpVerifyEmailCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        //commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        //commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpResendVerifyPhoneCompany: async ({ commit }, data) => {
    try {
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpResendVerifyPhoneCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        //commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        //commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpResendVerifyEmailCompany: async ({ commit }, data) => {
    console.log(data);
    try {
      const res = await signService.signUpResendVerifyEmailCompany(data);
      if (res.status === 200) {
        res.data;
        //commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        //commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpSetCompany: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpSetCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpVerifyPhoneCompany: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpVerifyPhoneCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpCodePhoneCompany: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpCodePhoneCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpVerifyPhoneUser: async ({ commit }, data) => {
    try {
      console.log(data);
      // data = state.role;
      // console.log(data);
      const res = await signService.signUpVerifyPhoneUser(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        console.log(res);
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpPassword: async ({ commit }, data) => {
    try {
      const res = await signService.signUpPassword(data);
      if (res.status === 200) {
        console.log(res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  setInfoAnonymUser: async ({ commit }, data) => {
    try {
      console.log(data);
      const res = await signService.setInfoAnonymUser(data);
      if (res.status === 200) {
        res.data;
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  signUpCompany: async ({ commit }, data) => {
    try {
      data = state.role;
      console.log(data);
      const res = await signService.signUpCompany(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("GET_ERROR", res.data);
      } else {
        commit("GET_ERROR", res.data);
      }
      return res;
    } catch (error) {
      return commit("GET_ERROR", error.response);
    }
  },
  getPositionUser: async ({ commit }) => {
    try {
      const res = await signService.getPositionUser();
      if (res.status === 200) {
        //console.log(res.data.data);
        commit("GET_POSITION", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getAllCountries: async ({ commit }) => {
    try {
      const res = await signService.getAllCountries();
      if (res.status === 200) {
        commit("GET_ALL_COUNTRY", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  SetUserLocation: async ({ commit }, data) => {
    try {
      const res = await signService.SetUserLocation(data);

      if (res.status === 200) {
        console.log(res.data.data);
        commit("GET_POSITION", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },
  SetCompanyLocation: async ({ commit }, data) => {
    try {
      const res = await signService.SetCompanyLocation(data);

      if (res.status === 200) {
        console.log(res.data.data);
        commit("GET_POSITION", res.data);
      }
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
