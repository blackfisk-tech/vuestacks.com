<template lang="pug">
  .container
    h1.is-size-1 Data Tables

    h2.is-size-3 Table Configuration
    .columns
      .column
        aside.menu(v-for='i in configurationOutput()')
          ul.menu-list
            p.menu-label {{ i.key }}
            li
              ul
                template(v-for='(k, o) in i.data')
                  li
                    span.menu-label {{ o }}
                    span  : {{ k }}
      .column
        pre
          code.javascript
            | {
            |  configuration: {
            |    collapsePages: false,
            |    isRanked: false,
            |    table: {
            |      bordered: false,
            |      striped: true,
            |      cellbordered: false,
            |      overflow: false,
            |      hoverable: true,
            |      fullwidth: false,
            |      filename: '',
            |      isSelectable: false
            |    },
            |    settings: {
            |      isVisible: true,
            |      isAllowed: true,
            |      offset: 0
            |    },
            |    sortIndicator: {
            |      isVisible: true,
            |      isAllowed: true
            |    },
            |    filter: {
            |      isVisible: false,
            |      isAllowed: true,
            |      isEvent: false
            |    },
            |    columns: {
            |      isVisible: false,
            |      isAllowed: true
            |    },
            |    pagination: {
            |      rowsPerPage: 10,
            |      isAllowed: true,
            |      isVisible: true
            |    },
            |    orderBy: {
            |      isVisible: false,
            |      isAllowed: true
            |    },
            |    totals: {
            |      isVisible: {
            |        all: false,
            |        page: false,
            |        count: false
            |      },
            |      isAllowed: true
            |    }
            |  }
            |}

    h2.is-size-3 Examples
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
import ConfigurationData from '../../node_modules/vstx-data-table/docs/configuration.json'

export default {
  name: 'data-table-example-views',
  data () {
    return {
      config: []
    }
  },
  methods: {
    configurationStruct () {
      return require('../../node_modules/vstx-data-table/src/constants/defaults.js')
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
  }
}

// eslint-disable-next-line
hljs.initHighlightingOnLoad()
</script>
