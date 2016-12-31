<template>
	<div>
  <p> ID: {{ note.id }} </p>
	<textarea :value="noteMessage" @input="updateNote">
  
	</textarea>
	</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'editor',
  computed: {
    ...mapState({
      noteMessage: function (state) {
        if (state.notes.length === 0) {
          return ''
        }

        if (typeof this.$store.getters.getActiveNote[0] === 'undefined') {
          return ''
        }

        let noteActive = this.$store.getters.getActiveNote[0]
        return noteActive.text
      }
    }),
    note: function () {
      if (this.$store.state.notes.length === 0) {
        return {text: '', id: ''}
      }

      if (typeof this.$store.getters.getActiveNote[0] === 'undefined') {
        return {text: '', id: ''}
      }

      return this.$store.getters.getActiveNote[0]
    }
  },
  methods: {
    updateNote (e) {
      this.$store.commit('updateMessage', e.target.value)
    }
  }
}
</script>