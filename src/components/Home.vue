<template lang="pug">
  .container
    .columns
      .column
        h1.is-size-1 Welcome to VueStacks.com

        h3.is-size-3 Our Current Open-Source Projects

        ul
          li
            router-link(to="/data-table") vstx-data-table
            span  - A responsive Data-Table designed for reporting complete with exporting, multi-column sorting, dynamic columns, computed columns, hidden columns, and many other powerful features.

            h5.is-size-5 Example of the Data-Table component
            figure.image
              img(src="../assets/example-table-1.jpg")

        hr

        h3.is-size-3 Our Private Projects
        blockquote.content
          i.is-italic We will be open-sourcing the projects below over the next few months! We have to refactor them to make them usable by the vue community. The components below are wired into our main in-house application and very dependent on the way we operate.
        ul
          li vstx-modal
          li vstx-select
          li vstx-tabs
          li vstx-search-bar
          li vstx-input
          li vstx-autocomplete
          li vstx-textarea
          li vstx-draggable-list
          li vstx-loader
          li vstx-report-collections
          li vstx-template
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
