import api from '../lib/api'

export default {
  async load({ commit }, q) {
    const movies = await api.get({ q })
    commit('setMovies', movies);
  }
}
