<template>
  <div id="app" class='aa'>
  <controls></controls>
  <list></list>
  <editor></editor>
  </div>
</template>
<script>
import List from './components/List'
import Editor from './components/Editor'
import Controls from './components/Controls'

export default {
  name: 'app',
  components: {
    List,
    Editor,
    Controls
  }
}
</script>


