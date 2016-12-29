// import * as types from './mutation-types.js'

export const addNote = ({ commit }, text) => {
  commit('addNote', text)
}
export const deleteNote = ({ commit }) => {
  commit('decrement')
}
export const editNote = ({ commit }, n) => {
  commit('editNote', n)
}