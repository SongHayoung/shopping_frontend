<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./header/Header";

export default {
  name: "App",
  components: {
      Header,
    },
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
