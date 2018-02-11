<template lang="pug">
  #app
    header.header
      nav.navbar.is-primary(role="navigation", aria-label="main navigation")
        .navbar-brand
          router-link.navbar-item(to="/")
            span VueStacks.com
          button.button.navbar-burger(@click='toggleMenu')
            span
            span
            span

        .navbar-menu
          .navbar-start
            .navbar-item.has-dropdown.is-hoverable
              a.navbar-link Components
              .navbar-dropdown.is-boxed
                router-link.navbar-item(to="/data-table") Data-Table

          .navbar-end
            a.navbar-item(href="https://github.com/blackfisk-tech/vuestacks.com", title="VueStacks.com GitHub")
              i.fab.fa-github
              span &nbsp; View on Github
    main.is-fluid.Site-content
      router-view
    footer.footer
      .container
        .content.has-text-centered
          span.logotype-font-family.copyright &copy; VueStacks.com {{ new Date().getFullYear() }}</template>

<script>
import '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-free-brands'
export default {
  name: 'app',
  methods: {
    toggleMenu () {
      document.getElementsByClassName('navbar-menu')[0].classList.toggle('is-active')
    }
  }
}
</script>

<style>
  @require "assets/stylus/site-styling"
</style>
