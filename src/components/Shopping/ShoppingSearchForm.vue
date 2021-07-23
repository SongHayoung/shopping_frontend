<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          :label="searchItemLabel"
          v-model="searchItemName"
          filled
          dense
        ></v-text-field>
      </v-col>

      <v-col>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <money-input ref="moneyInput"></money-input>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col>
        <v-btn
          rounded
          color="success"
          large
          :disabled="searchFormInValid"
          @click="searchItem"
        >
          <v-icon left> mdi-magnify </v-icon>
          {{ search }}
        </v-btn>
      </v-col>
    </v-row>
    {{ item }}
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Utils from "../../utils/utils";
import { getIteamsQuery } from "../../graphql/shopping";
import moneyInput from "../utils/moneyInput.vue";

export default {
  name: "ShoppingSearchForm",
  components: { moneyInput },
  apollo: {
    item: {
      query: getIteamsQuery,
      variables: {
        name: "asdf",
        ShoppingSearchParam: null,
      },
      update: (data) => {
          console.log(data)
          return data
      },
    },
  },
  computed: {
    ...mapGetters({
      getMinimumAmount: "searchParamMinimumCost",
      getMaximumAmount: "searchParamMaximumCost",
    }),
    searchItemName: {
      get() {
        return this.$store.getters.searchParamItemName;
      },
      set(value) {
        this.$store.commit("updateSearchParamItemName", value);
      },
    },
    searchFormInValid() {
      return this.searchItemName == "";
    },
  },
  data() {
    return {
      title: "상세 검색",
      searchItemLabel: "상품명",
      search: "검색",
      test2: "",
    };
  },
  methods: {
    async searchItem() {
      const result = await this.$apollo.query({
        query: getIteamsQuery,
        variables: {
          name: this.searchItemName,
          ShoppingSearchParam: this.getShoppingSearchParam(),
        },
      });
      console.log(result);
    },
    getShoppingSearchParam() {
      let shoppingSearchParam = null;

      if (
        !!this.getMinimumAmount &&
        !!this.getMinimumAmount &&
        Utils.isNumber(this.getMinimumAmount) &&
        Utils.isNumber(this.getMaximumAmount) &&
        parseInt(this.getMinimumAmount) < parseInt(this.getMaximumAmount)
      ) {
        Object.assign(shoppingSearchParam, {
          minCost: this.getMinimumAmount,
          maxCost: this.getMaximumAmount,
        });
      }
      console.log(shoppingSearchParam);
      return shoppingSearchParam;
    },
  },
};
</script>
