export default {
  movies (state) {
    return state.movies;
  },

  movie (state) {
    return (id) => state.movies.find(movie => movie.id === id)
  },

  loading (state) {
    return state.loading
  }
}
