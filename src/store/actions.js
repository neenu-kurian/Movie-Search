const actions = {
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
  async fetchfeaturedMovies({ commit, state }, payload) {
    try {
      state.loading = true;
      let results = payload.map(async (eachMovie) => {
        let url = `http://www.omdbapi.com/?apikey=${state.apikey}&i=${eachMovie}&plot=full`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
      });

      const movies = await Promise.all(results);
      commit("SET_FEATURED_MOVIES", movies);
      state.loading = false;
    } catch (err) {
      console.log(err);
    }
  },
};

export default actions;
