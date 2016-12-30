<template>
	<div>
  <p> ID: {{ note.id }} </p>
	<textarea>
  {{ note.text }}
	</textarea>
	</div>
</template>
<script>
export default {
  name: 'editor',
  computed: {
    note: function () {
      if (this.$store.state.notes.length === 0) {
        return {text: '', id: ''}
      }

      if (typeof this.$store.getters.getActiveNote[0] === 'undefined') {
        return {text: '', id: ''}
      }

      return this.$store.getters.getActiveNote[0]
    }
  }
}
</script>