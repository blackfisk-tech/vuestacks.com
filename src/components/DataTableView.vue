<template lang="pug">
  .container
    h1.is-size-1 Data Tables

    h2.is-size-3 Table Configuration Payload
    .columns
      .column
        h4.title.is-5 Description
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
        h4.title.is-5 Defaults
        pre.javascript {{ configurationStruct() }}

    h2.is-size-3 Table Columns Payload
    .columns
      .column
        h4.title.is-5 Description
      .column
        h4.title.is-5 Defaults
        pre.javascript {{ configurationStruct() }}

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
      return require('../../..//vstx-data-table/src/constants/defaults.js')
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
  }
}
</script>
