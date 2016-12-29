<template>
	<div class="listnote">
		<ul>
			<li v-for="n in listNotes" @click="editNote(n)" v-bind:class="{active : n.active}">
				{{ n.text }}
			</li>
		</ul>
		<p>Total note: {{ totalCount }}</p>
	</div>
</template>
<style type="text/css">
  .active {
    color: red;
  }
</style>
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