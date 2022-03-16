const getters = {
  movies: (state) => state.movies.Search,
  movie: (state) => state.movie,
  error: (state) => state.movies.Response,
  searchText: (state) => state.searchText,
};

export default getters;
