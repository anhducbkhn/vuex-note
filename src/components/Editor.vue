<template>
	<div>
	<textarea>{{ note }}</textarea>
	</div>
</template>
<script>
export default {
  name: 'editor',
  computed: {
    note: function () {
      let note = this.$store.state.notes.filter(note => {
        if (note.active === true) return note
      })

      console.log(note.text)
      return note.text
    }
  }
}
</script>