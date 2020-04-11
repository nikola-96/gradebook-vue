import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserLogin: false,
    gradebooks: [],
    loadedGradebooks: [],
    loader: 10,
    disableLoadButton: false

  },
  getters,
  mutations,
  actions,
  modules: {
  }
})
