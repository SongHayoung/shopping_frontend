<template>
  <div class="about">
    <h1>This is an about pageasdf</h1>
    <v-btn @click="addAuthor"> add Author </v-btn>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'About',
  apollo: {
    allAuthor: gql`{
      allAuthor {
        id
        name
        books {
          title
          author
        }
      }
    }`,
  },
  methods: {
    async addAuthor() {
      console.log("addAuthor");
      const { data } = await this.$apollo.mutate({
        mutation: gql`mutation ($name: String!) {
          createAuthor(name: $name) {
            id
          }
        }`,
        variables: {
          name: 'song'
        }
      })

      this.$apollo.queries.allAuthor.refetch()
      console.log(this.allAuthor);
      console.log(data);
    }
  }
}
</script>
