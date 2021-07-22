import Vue from 'vue'
import App from './App.vue'
import VueStomp from "vue-stomp"
import vuetify from './plugins/vuetify'
import router from './router'
import VueApollo from 'vue-apollo'
import getApolloClient from './vue-apollo'


Vue.config.productionTip = false
Vue.use(VueStomp)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: getApolloClient(),
})


new Vue({
  vuetify,
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
