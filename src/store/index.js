import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as _ from 'lodash'

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

    deleteNote (state, note) {
      state.notes = _.remove(state.notes, (n) => {
        return n !== note
      })

      // console.log(remove)
      // state.notes = remove
    },

    addNote (state, text) {
      state.notes.forEach((value) => {
        value.active = false
      })

      state.notes.push(text)
    },

    editNote (state, note) {
      state.notes.forEach((value) => {
        if (note === value) {
          value.active = true
        } else {
          value.active = false
        }
      })
    },

    updateMessage (state, note) {
      state.notes.forEach((value) => {
        let isActive = value.active
        if (isActive === true) {
          value.text = note
        }
      })
    }
  }
})
