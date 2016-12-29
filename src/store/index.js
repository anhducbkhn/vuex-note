import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
// init state
const state = {
  count: 0,
  notes: []
}

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations: {
    increment (state) {
      state.count ++
    },

    decrement (state, number) {
      state.notes.pop()
    },

    addNote (state, text) {
      state.notes.forEach((value) => {
        value.active = false
      })

      state.notes.push(text)
    },

    editNote (state, note) {
      console.log(note)
    }
  }
})
