import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    getUser: state => state.user
  },
  mutations: {
    settingUser: (state, user) => (state.user = user)
  },
  actions: {
    setUset: ({ commit }, user) => commit('settingUser', user)
  },

})
