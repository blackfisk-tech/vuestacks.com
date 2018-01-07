<template lang="pug">
  .default
    section.hero.is-dark.is-bold
      .hero-body
        .container
          h1.title.is-1 VueStacks.com
          h5.subtitle.is-5 A work-in-progress framework wrapper &amp; a collection of powerful components for Vue.js

    section.section
      h3.title.is-3 Our Current Open-Source Projects
      hr
      ul
        li
          router-link(to="/data-table") vstx-data-table
          span  - A responsive Data-Table designed for reporting complete with exporting, multi-column sorting, dynamic columns, computed columns, hidden columns, and many other powerful features.

          h5.is-size-5 Example of the Data-Table component
          figure.image
            img(src="../assets/example-table-1.jpg")

    section.section
      h3.title.is-3 Our Private Projects
      h5.subtitle.is-5 Planned open-source projects
      hr
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
