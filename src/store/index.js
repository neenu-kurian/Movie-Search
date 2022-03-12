import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    movies: {},
    loading: false,
    movie: {},
    apikey: "6c3a2d45",
  },
  getters: {
    movies: (state) => state.movies.Search,
    movie: (state) => state.movie,
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.movies = payload;
    },
    GET_MOVIE(state, payload) {
      state.movie = payload;
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
    async fetchMovieDetails({ commit, state }, payload) {
      try {
        state.loading = true;
        let url = `http://www.omdbapi.com/?apikey=${state.apikey}&i=${payload}`;
        const res = await fetch(url);
        const data = await res.json();
        state.loading = false;
        commit("GET_MOVIE", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
