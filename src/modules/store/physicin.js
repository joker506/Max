//import axios from "axios";
import DocService from "@/modules/services/doc.service";

const docService = new DocService();

const state = {
  registrUser: false,
  physicins: [],
  physicin: [],
  searchDoctor: {},
  userDashboardInfo: {}
};

const getters = {
  getDoctor(state) {
    let _nArr = [];
    let _name = state.physicins;
    let _s = state.searchDoctor.userProblem;
    let _clinic = state.searchDoctor.clinicPosition;
    _name.forEach(e => {
      if (
        e.name.toLowerCase().includes(_s) ||
        e.company.name.includes(_clinic)
      ) {
        _nArr.push(e);
      }
    });
    return _nArr;
  },
  getDocCompany(state) {
    let _arr = [];
    state.physicins.forEach(e => {
      _arr.push(e.company.name);
    });
    return _arr;
  }
};

const mutations = {
  SET_PHYSICIN(state, payload) {
    state.physicins = payload;
  },
  SET_DOC(state, payload) {
    state.physicin = payload;
  },
  CHANGE_SEARCH(state, payload) {
    state.searchDoctor = payload;
  },
  CHANGE_REGISRATION(state, payload) {
    state.registrUser = payload;
    //console.log(state.registrUser);
  },
  SET_DASHBORD_INFO(state, payload) {
    state.userDashboardInfo = payload;
  }
};
const actions = {
  docUser: async ({ commit }, data) => {
    try {
      const res = await docService.DOCS(data);
      if (res.status === 200) {
        console.log(res.data);
        commit("SET_PHYSICIN", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  },

  // const actions = {
  //   setPhysicins({ commit }) {
  //     return axios.get("https://jsonplaceholder.typicode.com/users").then((
  //       response
  //       //console.log(response.data)
  //     ) => commit("SET_PHYSICIN", response.data));
  //   },
  setPhysicin: async ({ commit }, data) => {
    try {
      const res = await docService.DOC(data);
      if (res.status === 200) {
        //console.log(res);
        commit("SET_DOC", res.data);
      }
      return res;
    } catch (error) {
      return error.response;
    }
  }
  // setPhysicin({ commit }, payload) {
  //   return axios
  //     .get("https://jsonplaceholder.typicode.com/users/" + payload)
  //     .then(response => commit("SET_DOC", response.data));
  // }
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
  root: true
};
