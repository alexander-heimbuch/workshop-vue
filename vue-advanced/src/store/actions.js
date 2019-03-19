import api from '../lib/api'

export default {
  async load({ commit }, q) {
    commit('loading');
    const movies = await api.get({ q });
    commit('setMovies', movies);
  }
}
