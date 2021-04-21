<template>
  <div class="block">
 
    <div class="logo-center-wrapper" style="">
      <vh-copy class="copy-button"
      :data="'0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec'"
      :label="'Contract'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      <img class="copy-icon" src="~/@/assets/favicon.png" width="48px" height="48px" style="" alt="$RHO">
      </vh-copy>
 <vh-copy class="sale-button"
      :data="'0x51528858b5F7E37aC5976F2E09a07cF2F63Fd664'"
      :label="'Sale'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      <img class="copy-icon" src="~/@/assets/wallet.png" width="48px" height="48px" style="" alt="$BETA">
      </vh-copy>
<jj-parallax-card class="mt-6 para-desktop" lightColor="transparent" style="margin:auto;float:left; width: 512px; height: 450px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/RHO.svg" width="512px;" class="" alt="">
      </div>
</jj-parallax-card>

<jj-parallax-card class="mt-6 para-mobile" lightColor="transparent" style="margin:auto;float:left; width: 300px; height: 260px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/RHO.svg" width="512px;" class="" alt="">
      </div>
</jj-parallax-card>



      <div class="logo-title"><h1 style="">$RHO</h1></div>

    </div>
    <div class="data-wrapper" style="">
      <div class="data-title" style="">ACCESS THE CONTRACT </div>
      <div class="data-triangles"  style="">
      <a class="triangle-module" target="_blank" href="https://www.dextools.io/app/uniswap/pair-explorer/0xf28e099827cb05c9c35397859b4b626218c5a1cc">
          <img width="64px" height="64px" src="~/@/assets/dextools.png" alt="">
          </a>
       <a class="triangle-module" target="_blank" href="https://app.uniswap.org/#/swap">
          <img width="64px" height="64px" src="~/@/assets/uniswap.png" alt="">
        </a>
        <a class="triangle-module" target="_blank" href="https://etherscan.io/token/0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec">
          <img width="64px" height="64px" src="~/@/assets/etherscan.png" alt="">
        </a>
        <a class="triangle-module" target="_blank" href="https://app.uniswap.org/#/add/0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec/ETH">
          <img width="64px" height="64px" src="~/@/assets/liquidity.png" alt="">
       </a>
        </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import JJParallaxCard from 'jj-parallax-card'
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
  },components: {
    'jj-parallax-card':JJParallaxCard,
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

