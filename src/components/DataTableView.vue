<template lang="pug">
  .default
    section.hero.is-light
      .hero-body
        .container
          h1.title.is-1 Data Table
          h2.subtitle.is-5 A responsive sortable data-table designed for displaying data, editing data, and responding to users requests much the same way a typical spreadsheet has worked for years!
    section.section
      h4.title.is-4 Code Snippet
      h4.subtitle.is-6 A simple vue.js example component
      hr
      .columns
        .column
          pre.html.has-text-code
            span {{ codeSnippets.basicExample }}
    section.section
      h4.title.is-4 Table Configuration Payload
      hr
      .columns
        .column
          h4.subtitle.is-6 Description
          aside.menu(v-for='i in getPayloadConfigurationDocs')
            ul.menu-list
              p.menu-label {{ i.key }}
              li
                ul
                  template(v-for='(k, o) in i.data')
                    li(v-if="typeof k === 'object'")
                      span.menu-label {{ o }}
                      ul
                        template(v-for='(a, b) in k')
                          li
                            span.menu-label {{ b }}
                            span  : {{ a }}
                    li(v-else="")
                      span.menu-label {{ o }}
                      span  : {{ k }}
        .column
          h4.subtitle.is-6 Configuration Payload Data-Type
          pre.javascript.has-text-code
            span {{ codeSnippets.configurationExample.example }}

    section.section
      h4.title.is-4 Table Columns Payload
      hr
      .columns
        .column
          h4.subtitle.is-6 Description
          aside.menu(v-for='i in getColumnsConfigurationDocs')
            ul.menu-list
              p.menu-label {{ i.key }}
              li
                ul
                  template(v-for='(k, o) in i.data')
                    li(v-if="typeof k === 'object'")
                      span.menu-label {{ o }}
                      ul
                        template(v-for='(a, b) in k')
                          li
                            span.menu-label {{ b }}
                            span  : {{ a }}
                    li(v-else="")
                      span.menu-label {{ o }}
                      span  : {{ k }}
        .column
          h4.subtitle.is-6 Column Payload Data-Type
          pre.javascript.has-text-code
            span {{ codeSnippets.columnsExample.example }}

    section.section#examples
      h4.title.is-4 Examples
      hr
      ul
        li
          router-link(to='/data-table/example-1') Public APIs List
          span  - A data-table example of public apis pulled from APIs.guru. This data-table example features usage of slot cell replacement and slot title replacement
        li
          router-link(to='/data-table/example-2') Top 100 Stock Symbols
          span  - A data-table example of the top 100 stock symbols displayed. This data-table example features usage of current formatting, Data-Table Title Override &amp; row/page totals.
</template>

<script>
import _ from 'lodash'
import ConfigurationDocs from '../../../vstx-data-table/docs/configuration.js'
import ExampleDocs from '../../../vstx-data-table/docs/examples.js'

export default {
  name: 'data-table-example-views',
  created () {
    // console.log(this.$components)
    // console.log('Configuration', )
  },
  data () {
    return {
      config: [],
      codeSnippets: {
        basicExample: ExampleDocs.basic.vue,
        configurationExample: ConfigurationDocs.configuration.payload,
        columnsExample: ConfigurationDocs.configuration.columns
      }
    }
  },
  computed: {
    getPayloadConfigurationDocs () {
      return _.map(ConfigurationDocs.configuration.payload.documentation, (obj, key) => {
        return (typeof obj === 'object' ? {key: key, data: obj} : false)
      })
    },
    getColumnsConfigurationDocs () {
      return _.map(ConfigurationDocs.configuration.columns.documentation, (obj, key) => {
        return (typeof obj === 'object' ? {key: key, data: obj} : false)
      })
    }
  },
  mounted () {
    _.forEach(document.getElementsByClassName('javascript'), obj => {
      // eslint-disable-next-line
      hljs.highlightBlock(obj)
    })
    _.forEach(document.getElementsByClassName('html'), obj => {
      // eslint-disable-next-line
      hljs.highlightBlock(obj)
    })
  }
}
</script>
