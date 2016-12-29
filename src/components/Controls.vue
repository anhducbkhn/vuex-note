<template>
	<div>
	<button @click="addnew">new note</button>
  <button @click="deleteNote">delete note</button>
	</div>
</template>
<script>
	export default {

  name: 'control',
  methods: {
    addnew: function (event) {
      let d = new Date()
      var n = d.getTime()

      this.$store.dispatch('addNote', {text: 'new note', id: n, active: true})
    },

    deleteNote: function (event) {
      this.$store.dispatch('deleteNote')
    }
  }
	}
</script>