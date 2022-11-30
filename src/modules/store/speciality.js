//import axios from "@/plugins/axios";

const state = {
  specialty: [
    {
      id: 0,
      prof: "Gastroenterology"
    },
    {
      id: 1,
      prof: "Gendocrinology"
    },
    {
      id: 2,
      prof: "Neurology"
    },
    {
      id: 3,
      prof: "Obstetrician-Gynecology"
    },
    {
      id: 4,
      prof: "Ophthalmology"
    },
    {
      id: 5,
      prof: "Pediatrics"
    },
    {
      id: 6,
      prof: "Reproductive Endocrinology"
    }
  ],
  ageGroup: [
    {
      id: 0,
      age: "Adult"
    },
    {
      id: 1,
      age: "Child"
    },
    {
      id: 2,
      age: "Babies and Infants"
    },
    {
      id: 3,
      age: "Teens and Young Adults"
    },
    {
      id: 4,
      age: "Elderly"
    }
  ],
  clinicalTopics: [
    {
      id: 0,
      theme: "Barrett's Esophagus"
    },
    {
      id: 1,
      theme: "Celiac Disease"
    },
    {
      id: 2,
      theme: "GERD"
    },
    {
      id: 3,
      theme: "Colorectal Cancer"
    },
    {
      id: 4,
      theme: "Gallbladder and Biliary Disease"
    },
    {
      id: 5,
      theme: "Peptic Ulcer Disease"
    },
    {
      id: 6,
      theme: "Hepatitis B"
    },
    {
      id: 7,
      theme: "Microbiome"
    },
    {
      id: 8,
      theme: "Inflammatory Bowel Disease"
    }
  ],
  rateService: [
    {
      id: 0,
      theme: "$10 - $50"
    },
    {
      id: 1,
      theme: "$51 - $150"
    },
    {
      id: 2,
      theme: "$151 - $250"
    },
    {
      id: 3,
      theme: "$251 -  $350"
    },
    {
      id: 4,
      theme: "$350 - $450"
    },
    {
      id: 5,
      theme: "$450 - $550"
    }
  ],
  languages: [
    {
      id: 0,
      prof: "English"
    },
    {
      id: 1,
      prof: "German"
    },
    {
      id: 2,
      prof: "Hindi"
    },
    {
      id: 3,
      prof: "Russian"
    },
    {
      id: 4,
      prof: "Japanese"
    }
  ],
  question: [
    {
      id: 0,
      title: "first"
    },
    {
      id: 2,
      title: "second"
    },
    {
      id: 3,
      title: "third"
    },
    {
      id: 4,
      title: "fourth"
    },
    {
      id: 1,
      title: "fifth"
    },
    {
      id: 5,
      title: "sixth"
    },
    {
      id: 6,
      title: "seventh"
    }
  ]
};

const getters = {};

const mutations = {
  //   SET_IS_AUTHENTICATED(state, value) {
  //     state.isAuthenticated = value;
  //   },
  //   SET_USER_PROMISE(state, promise) {
  //     state.authenticatedPromise = promise;
  //   }
};

const actions = {
  //   signIn: async ({ commit }, data) => {
  //     try {
  //       const res = await authService.signIn(data);
  //       if (res.status === 200) {
  //         localStorage.setItem("token", res.data.token);
  //       }
  //       return res;
  //     } catch (error) {
  //       return error.response;
  //     }
  //   }
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
  root: true
};
