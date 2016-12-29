<template>
	<div class="listnote">
		<ul>
			<li v-for="n in listNotes" @click="editNote(n)">
				{{ n.text }}
			</li>
		</ul>
		<p>Total note: {{ totalCount }}</p>
	</div>
</template>
<script>
export default {
  name: 'ListNote',
  computed: {
    totalCount: function () {
      return this.$store.state.notes.length
    },

    listNotes: function () {
      return this.$store.state.notes
    }
  },
  methods: {
    editNote: function (n) {
      this.$store.dispatch('editNote', n)
    }
  }
}
</script>