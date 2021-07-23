<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-text-field v-model="minimumAmount" label="최저가"></v-text-field>
      </v-col>
      <v-col cols="1">
        <br />
        <v-label> ~ </v-label>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="maximumAmount" label="최고가"></v-text-field>
      </v-col>
    </v-row>
    <p v-if="!isNumber" style="color: red">숫자를 입력해 주세요.</p>
    <p v-else-if="isNotValidRange" style="color: red">올바른 범위를 입력하세요.</p>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Utils from "../../utils/utils"

export default {
  name: "moneyInput",
  computed: {
    ...mapGetters({
      getMinimumAmount: "searchParamMinimumCost",
      getMaximumAmount: "searchParamMaximumCost",
    }),
    minimumAmount: {
      get() {
        return this.getMinimumAmount;
      },
      set(value) {
        this.$store.commit("updateSearchParamMinimumCost", value);
      },
    },
    maximumAmount: {
      get() {
        return this.getMaximumAmount;
      },
      set(value) {
        this.$store.commit("updateSearchParamMaximumCost", value);
      },
    },
    isNumber() {
      return (
        (!this.minimumAmount || Utils.isNumber(this.minimumAmount)) &&
        (!this.maximumAmount || Utils.isNumber(this.maximumAmount))
      );
    },
    isNotValidRange() {
        return (!this.minimumAmount && !this.minimumAmount) ? false : (!this.minimumAmount || !this.maximumAmount) ? true : parseInt(this.minimumAmount) > parseInt(this.maximumAmount);
    },
  },
  data() {
    return {};
  },
  methods: {
  },
};
</script>
