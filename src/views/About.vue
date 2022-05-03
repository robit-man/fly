<template>
  <div class="full-wrapper">
    
  <div class="about-wrap">
         <vh-copy class="para-desktop copy-button"
      :data="'0x3f3cd642e81d030d7b514a2ab5e3a5536beb90ec'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Contract Address
</vh-copy><br>
 <h1>RHO tokens correspond to the Y-Axis location value of LED pixels.</h1>
<br><p>

Present on the exposed surfaces and livestreamed from a satellite to be placed in LEO in OCTOBER 2022, These pixel's hue (KAPPA), luminosity (GAMMA), X-Axis (BETA) and Y-Axis (RHO) locations are acquired in exchange for the aforementioned tokens.
     </p>    <br>    <router-link :to="{ name: 'home' }" >
     <img src="~/@/assets/rho_icon-06.png" style="height:64px;filter:invert(1);" alt="">
    </router-link>
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
 components: {
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

