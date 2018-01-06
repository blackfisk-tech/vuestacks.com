<template lang="pug">
  .default
    h1 Data Table
    example1
</template>

<script>
import Example1 from './examples/publicAPIsList'

export default {
  name: 'data-table-example-views',
  components: {
    'example1': Example1
  },
  data () {
    return {
    }
  }
}
</script>
