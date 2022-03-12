import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    movies: {},
    loading: false,
    apikey: "6c3a2d45",
  },
  getters: {
    movies: (state) => state.movies.Search,
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    async fetchMovies({ commit, state }, payload) {
      try {
        state.loading = true;
        let url = `http://www.omdbapi.com/?apikey=${state.apikey}&s=${payload}`;
        const res = await fetch(url);
        const data = await res.json();
        state.loading = false;
        commit("GET_MOVIES", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
