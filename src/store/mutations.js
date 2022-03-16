const mutations = {
  GET_MOVIES(state, payload) {
    state.movies = payload;
  },
  GET_MOVIE(state, payload) {
    state.movie = payload;
  },
  SET_FEATURED_MOVIES(state, payload) {
    state.featuredMovies = payload;
  },
  CLEAR_MOVIE_DETAILS(state) {
    state.movie = {};
  },
  SET_SEARCH(state, payload) {
    state.searchText = payload;
  },
};

export default mutations;
