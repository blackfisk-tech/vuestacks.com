<template lang="pug">
  .default
    section.hero.is-medium.is-primary
      .hero-body
        .container.has-text-centered
          h1.title.is-1.is-spaced
            strong VueStacks.com
          .columns
            .column
            .column.is-three-quarters
              h5.subtitle.is-5 A #[strong modular] framework wrapper &amp; a #[strong collection of powerful components] for Vue.js working together #[strong to build powerful interfaces] that manipulate and present complex data.
            .column
    section.section
      h3.title.is-3 Open-Source Projects
      h4.subtitle.is-5 A collection of Vue Components designed to work together to make usable interfaces that present and manipulate data structures.
      hr
      .columns.is-multiline
        .column
          //- Data Table Card
          .card.project-card
            header.card-header
              router-link.has-text-link(to="/data-table")
                h4.title.is-4.card-header-title Data Table
            .card-image
              router-link.has-text-link(to="/data-table")
                figure.image
                  img.is-16by9(
                    src="../assets/example-table-1.png"
                    alt="Data Table"
                  )
            .card-content
              h4.title.is-4
                router-link.has-text-link(to="/data-table") vstxDataTable
              h5.subtitle.is-6
                em A responsive Data-Table designed for reporting complete with exporting, multi-column sorting, dynamic columns, computed columns, hidden columns, and many other powerful features.
            .card-footer
              router-link.has-text-link.card-footer-item(to="/data-table") Documentation
              router-link.has-text-link.card-footer-item(to="/data-table#examples") Examples
        .column
    section.section
      h3.title.is-3 Development Projects
      h5.subtitle.is-5 Coming Soon to Open Source!
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

<style>
  .project-card {
    max-width: 30rem;
  }
</style>
