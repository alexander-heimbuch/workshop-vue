export default {
  setMovies (state, movies) {
    state.movies = movies;
    state.loading = false;
  },

  loading (state) {
    state.loading = true;
  }
}
