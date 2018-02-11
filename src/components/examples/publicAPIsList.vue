<template lang="pug">
  .container
    data-table(
      :payload='data',
      :columns='columns',
      :configuration='configuration'
    )
      template(slot="slot-title")
        div(style="margin-bottom:0.5rem;")
          h1.is-size-2
            strong Example #1 - <a href="https://apis.guru/">APIS.guru</a> Data-Table
          p This data is pulled from <code>https://api.apis.guru/v2/list.json</code> when the page is loaded &amp; refreshed. Category column has a direct table filter. And the search box also filters the table. This data table is sorted first by Category and then API Name.
          p The API is fetched via Axios and a simple transformation converts the json data into an array of objects.
          p This data table configuration uses slots to replace the basic `name` column with a more complicate if-else statement using the logo and name of the api to give it a richer feel.
      div(slot='name', slot-scope="data")
        template(v-if='data.item.logo.length')
          span {{ data.item.name }}
          figure.image.is-32x32
            img(:src='data.item.logo')
        span(v-else='') {{ data.item.name }}
</template>

<script>
import Axios from 'axios'
import Flat from 'flat'
import _ from 'lodash'
import DataTable from 'vstx-data-table'

export default {
  name: 'example-1-data-table',
  components: {
    'data-table': DataTable
  },
  data () {
    return {
      data: [],
      columns: [
        {
          name: 'API Name',
          field: 'name',
          isVisible: true,
          sort: {
            isSortable: true,
            direction: 'asc'
          }
        },
        {
          name: 'Category',
          field: 'category',
          isVisible: true,
          sort: {
            isSortable: true,
            direction: 'asc',
            order: 0
          }
        },
        {
          name: 'API Description',
          field: 'description',
          isVisible: true,
          sort: {
            isSortable: false
          }
        }
      ],
      configuration: {
        table: {
          bordered: true,
          striped: true,
          hoverable: true,
          fullwidth: true
        },
        filter: {
          isVisible: true,
          isAllowed: true,
          isEvent: false
        },
        columns: {
          isVisible: false,
          isAllowed: true
        }
      }
    }
  },
  created () {
    this.getData('https://api.apis.guru/v2/list.json')
  },
  methods: {
    getData (url, method = 'get', fomatter = this.formatData) {
      Axios(
        {
          method: method,
          url: url,
          responseType: 'json'
        })
        .then((res) => fomatter(res))
    },
    formatData (res) {
      return _.forEach(res.data, (obj, key) => {
        let thisIsFlat = Flat(obj)
        this.data.push({
          name: thisIsFlat[`versions.${thisIsFlat['preferred']}.info.title`],
          logo: thisIsFlat[`versions.${thisIsFlat['preferred']}.info.x-logo.url`],
          category: thisIsFlat[`versions.${thisIsFlat['preferred']}.info.x-apisguru-categories.0`],
          description: thisIsFlat[`versions.${thisIsFlat['preferred']}.info.description`]
        })
      })
    }
  }
}
</script>

<style>
  .data-table .table {
    margin-top: 0.5rem;
  }
</style>
