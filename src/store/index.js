import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingSearchParam: {
      searchItemName: "",
      minimumCost: 0,
      maximumCost: 0,
    },
    header: {
      messageCount: 0,
    }
  },
  getters: {
    searchParamItemName: function (state) {
      return state.shoppingSearchParam.searchItemName;
    },
    searchParamMinimumCost: function (state) {
      return state.shoppingSearchParam.minimumCost;
    },
    searchParamMaximumCost: function (state) {
      return state.shoppingSearchParam.maximumCost;
    },
    headerMessageCount: function (state) {
      return state.header.messageCount;
    }
  },
  mutations: {
    updateSearchParamItemName: function (state, payload) {
      state.shoppingSearchParam.searchItemName = payload;
    },
    updateSearchParamMinimumCost: function (state, payload) {
      state.shoppingSearchParam.minimumCost = payload;
    },
    updateSearchParamMaximumCost: function (state, payload) {
      state.shoppingSearchParam.maximumCost = payload;
    },
    updateHeaderMessageReadCount: function (state, payload) {
      state.header.messageCount += payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
