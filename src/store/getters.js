const getters = {
  movies: (state) => state.movies.Search,
  movie: (state) => state.movie,
  error: (state) => state.movies.Response,
};

export default getters;
