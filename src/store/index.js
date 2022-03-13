import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

const store = new Vuex.Store({
  state: {
    movies: {},
    loading: false,
    movie: {},
    featuredMovies: {},
    apikey: "6c3a2d45",
    featured: ["tt0372784", "tt4154796"],
  },
  getters: {
    movies: (state) => state.movies.Search,
    movie: (state) => state.movie,
    error: (state) => state.movies.Response
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.movies = payload;
    },
    GET_MOVIE(state, payload) {
      state.movie = payload;
    },
    SET_FEATURED_MOVIES(state,payload) {
      state.featuredMovies = payload;
    },
    CLEAR_MOVIE_DETAILS(state){
      state.movie={}
    }
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
        let url = `http://www.omdbapi.com/?apikey=${state.apikey}&t=${payload}&plot=full`;
        const res = await fetch(url);
        const data = await res.json();
        state.loading = false;
        commit("GET_MOVIE", data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchfeaturedMovies({ state }, payload) {
      try {
        state.loading = true;
        let results = payload.map(async (eachMovie) => {
          let url = `http://www.omdbapi.com/?apikey=${state.apikey}&i=${eachMovie}&plot=full`;
          const res = await fetch(url);
          const data = await res.json();
          return data;
        });
        
        const movies = await Promise.all(results);
        this.commit("SET_FEATURED_MOVIES", movies);
        state.loading = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
