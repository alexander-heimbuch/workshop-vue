export default {
  load({ commit }, q) {
    commit('requestData', q);
  },

  resolveData({ commit }, movies) {
    commit('resolveData', movies);
  }
}
