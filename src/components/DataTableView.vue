<template lang="pug">
  .default
    section.hero.is-dark.is-bold
      .hero-body
        .container
          h1.title.is-1 Data Table
          h2.subtitle.is-5 A responsive sortable data-table designed for displaying data, editing data, and responding to users requests much the same way a typical spreadsheet has worked for years!
    section.section
      h4.title.is-4 Code Snippet
      h4.subtitle.is-6 A simple vue.js example component
      hr
      pre.html
        |&lt;template&gt;
        |   &lt;div class="container"&gt;
        |     &lt;data-table :payload='data' /&gt;
        |   &lt;/div&gt;
        |&lt;/template&gt;
        |
        |&lt;script&gt;
        |import DataTable from 'vstx-data-table'
        |
        |export default {
        |  name: 'data-table-example',
        |  components: {
        |    'data-table': DataTable
        |  },
        |  data () {
        |    return {
        |      data: []
        |    }
        |  }
        |}
        |&lt;/script&gt;

    section.section
      h4.title.is-4 Table Configuration Payload
      hr
      .columns
        .column
          h4.subtitle.is-6 Description
          aside.menu(v-for='i in configurationOutput()')
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
          pre.javascript
            |{
            |  "collapsePages": Boolean,
            |  "isRanked": Boolean,
            |  "table": {
            |    "bordered": Boolean,
            |    "striped": Boolean,
            |    "cellbordered": Boolean,
            |    "overflow": Boolean,
            |    "hoverable": Boolean,
            |    "fullwidth": Boolean,
            |    "filename": String,
            |    "isSelectable": Boolean
            |  },
            |  "settings": {
            |    "isVisible": Boolean,
            |    "isAllowed": Boolean,
            |    "offset": Number
            |  },
            |  "sortIndicator": {
            |    "isVisible": Boolean,
            |    "isAllowed": Boolean
            |  },
            |  "filter": {
            |    "isVisible": Boolean,
            |    "isAllowed": Boolean,
            |    "isEvent": Boolean
            |  },
            |  "columns": {
            |    "isVisible": Boolean,
            |    "isAllowed": Boolean
            |  },
            |  "pagination": {
            |    "rowsPerPage": Number,
            |    "isAllowed": Boolean,
            |    "isVisible": Boolean
            |  },
            |  "orderBy": {
            |    "isVisible": Boolean,
            |    "isAllowed": Boolean
            |  },
            |  "totals": {
            |    "isVisible": {
            |      "all": Boolean,
            |      "page": Boolean,
            |      "count": Boolean
            |    },
            |    "isAllowed": Boolean
            |  }
            |}

    section.section
      h4.title.is-4 Table Columns Payload
      hr
      .columns
        .column
          h4.subtitle.is-6 Description
          aside.menu
            ul.menu-list
              li
                span.menu-label Array of Columns
                ul
                  li
                    p.menu-label Column
                    ul
                      li
                        span.menu-label name
                        span  : Column Title
                      li
                        span.menu-label format
                        span  : Format
                        p
                          span.menu-label &nbsp; &nbsp; enum :
                          em  (formatString, formatPercent, formatMoney, formatNumber)
                      li
                        span.menu-label field
                        span  : Field/Key Name
                      li
                        span.menu-label align
                        span  : Alignment
                        p
                          span.menu-label &nbsp; &nbsp; enum :
                          em  (right, left, center)
                      li
                        span.menu-label position
                        span  : Column Display Position
                      li
                        span.menu-label isVisible
                        span  : Show or Hide column
                      li
                        span.menu-label editing
                        ul
                          li
                            span.menu-label edit
                            span  : Is Editable
                          li
                            span.menu-label isAllowed
                            span  : Allow editing
                      li
                        span.menu-label sort
                        ul
                          li
                            span.menu-label isSortable
                            span  : Allow sorting
                          li
                            span.menu-label direction
                            span  : Sort Direction
                            p
                              span.menu-label &nbsp; &nbsp; enum :
                              em  (asc, desc)
                          li
                            span.menu-label order
                            span  : Sort Order
        .column
          h4.subtitle.is-6 Column Payload Data-Type
          pre.javascript
            |{
            |   "name": String,
            |   "format": String,
            |   "field": String,
            |   "align": String,
            |   "position": Number,
            |   "isVisible": Boolean,
            |   "editing": {
            |     "edit": Boolean,
            |     "isAllowed": Boolean
            |   },
            |   "sort": {
            |     "isSortable": Boolean,
            |     "direction": String,
            |     "order": Number
            |   }
            |}

    section.section
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
import ConfigurationData from '../../../vstx-data-table/docs/configuration.json'

export default {
  name: 'data-table-example-views',
  data () {
    return {
      config: []
    }
  },
  methods: {
    configurationStruct () {
      return require('../../..//vstx-data-table/src/constants/defaults.js')['defaults']['configuration']
    },
    configurationOutput () {
      let data = []
      _.forEach(ConfigurationData, (obj, key) => {
        if (typeof obj === 'object') {
          data.push({key: key, data: obj})
        }
      })

      return data
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
