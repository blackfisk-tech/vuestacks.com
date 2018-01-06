<template lang="pug">
  .container
    h1.is-size-1 List of Data Table Examples
    example1
    example2
</template>

<script>
import Example1 from './examples/publicAPIsList'
import Example2 from './examples/stockAPIReport'

export default {
  name: 'data-table-example-views',
  components: {
    'example1': Example1,
    'example2': Example2
  },
  data () {
    return {
    }
  }
}
</script>
