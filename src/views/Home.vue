<template>
  <div class="block">
 
    <div class="logo-center-wrapper" style="">
      <vh-copy class="copy-button"
      :data="'0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec'"
      :label="'Contract Address'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      <img class="copy-icon" src="~/@/assets/favicon.png" width="64px" height="64px" style="" alt="$RHO">
      </vh-copy>
      <img src="~/@/assets/RHO.svg" width="512px;" alt="">
      <div class="logo-title"><h1 style="">$RHO</h1></div>

    </div>
    <div class="data-wrapper" style="width:512px;margin:auto;min-width:256px;">
      <div class="data-title" style="">ACCESS THE CONTRACT: </div>
      <div class="data-triangles"  style="">
      <a class="triangle-module" href="https://etherscan.io/token/0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec">
          <img width="64px" height="64px" src="~/@/assets/dextools.png" alt="">
          </a>
       <a class="triangle-module" href="https://app.uniswap.org/#/swap">
          <img width="64px" height="64px" src="~/@/assets/uniswap.png" alt="">
        </a>
        <a class="triangle-module" href="https://etherscan.io/token/0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec">
          <img width="64px" height="64px" src="~/@/assets/etherscan.png" alt="">
        </a>
        <a class="triangle-module" href="https://app.uniswap.org/#/add/0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec/ETH">
          <img width="64px" height="64px" src="~/@/assets/liquidity.png" alt="">
       </a>
        </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
      modalMakepotionOpen: false
    };
  },
  computed: {
    ...mapState(['settings']),
    isValid() {
      return parseFloat(this.form.quantity);
    },
    maxStrike() {
      const exchangeRate = this.settings.exchangeRates[this.form.asset];
      return exchangeRate && exchangeRate.usd ? exchangeRate.usd : 1e9;
    }
  },
  methods: {
    
    ...mapActions(['SendDai']),
    handleSubmit() {
      this.SendDai({
        //address: '0xb72027693a5B717B9e28Ea5E12eC59b67c944Df7',
        value: this.form.quantity
      });
    },
    maxStake() {
      this.form.quantity = this.$store.state.settings.balance;
    }
  }
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

