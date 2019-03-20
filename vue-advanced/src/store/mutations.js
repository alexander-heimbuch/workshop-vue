export default {
  requestData (state, query) {
    state.query = query;
    state.loading = true;
  },

  resolveData (state, movies) {
    state.movies = movies
    state.loading = false;
  }
}
