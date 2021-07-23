<template>
  <v-container>
    <shopping-search-form></shopping-search-form>
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex md4>
          <v-card class="card-container"> </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import ShoppingSearchForm from "./ShoppingSearchForm.vue";

export default {
  name: "Shopping",
  components: { ShoppingSearchForm },
  data() {
    return {
    };
  },
  methods: {
    
  }
};
</script>
