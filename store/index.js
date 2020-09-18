export const state = () => ({
  authors: [],
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('setAuthors')
  },

  async setAuthors({ commit }) {
    const categories = await this.$content('authors').fetch()
    commit('SET_AUTHORS', categories)
  },
}

export const mutations = {
  SET_AUTHORS(state, authors) {
    state.authors = authors
  },
}
