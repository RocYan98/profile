import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem("user") == null ? -1 : JSON.parse(window.localStorage.getItem("user")),
    eduList: window.localStorage.getItem("eduList") == null ? -1 : JSON.parse(window.localStorage.getItem("eduList")),
  },
  mutations: {
    login(state, data) {
      state.user = data.user;
      state.eduList = data.eduList;
      window.localStorage.setItem("user", JSON.stringify(data.user));
      window.localStorage.setItem("eduList", JSON.stringify(data.eduList));
    },
    updateUser(state, user) {
      state.user = user;
      window.localStorage.setItem("user", JSON.stringify(user));
    },
    updateEdu(state, edu, index) {
      state.eduList[index] = edu;
      window.localStorage.setItem("eduList",  JSON.stringify(state.eduList));
    },
    logout(state) {
      state.user = -1;
      state.eduList = -1;
      window.localStorage.clear();
    }
  },
  actions: {},
  modules: {}
})
