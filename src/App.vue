<template lang="pug">
  #app
    header.header
      nav.navbar.is-black(role="navigation", aria-label="main navigation")
        .navbar-brand
          router-link.navbar-item(to="/")
            span VueStacks.com

        .navbar-start
          router-link.navbar-item(to="/data-table") Data-Table

        .navbar-end
          a.navbar-item(href="https://github.com/blackfisk-tech/vuestacks.com", title="VueStacks.com GitHub")
            i.fa.fa-github

        button.button.navbar-burger
          span
          span
          span
    main.is-fluid.Site-content
      router-view
    footer.footer
      .container
        .content.has-text-centered
          span.logotype-font-family.copyright &copy; VueStacks.com {{ new Date().getFullYear() }}</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @require "assets/stylus/site-styling"
</style>
