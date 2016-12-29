import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

Vue.use(Vuex)
// init state
const state = {
  count: 0,
  notes: []
}

export default new Vuex.Store({
  actions,
  state,
  mutations: {
    increment (state) {
      state.count ++
    },

    decrement (state, number) {
      state.notes.pop()
    },

    addNote (state, text) {
      state.notes.forEach((value) => {
        console.log(value)
        value.active = false
      })
      state.notes.push(text)
    },

    editNote (state, note) {
      console.log(note)
    }
  }
})
