<template>
	<div>
	<textarea>{{ note.text }}
    id: {{ note.id }}
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

      return this.$store.getters.getActiveNote[0]
    }
  }
}
</script>