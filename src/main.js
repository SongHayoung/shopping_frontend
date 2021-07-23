import Vue from 'vue'
import App from './App.vue'
import VueStomp from "vue-stomp"
import vuetify from './plugins/vuetify'
import router from './router'
import VueApollo from 'vue-apollo'
import store from './store/index'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false
Vue.use(VueStomp)
Vue.use(VueApollo)

new Vue({
  vuetify,
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
