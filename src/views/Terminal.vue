<template>
  <div class="full-wrapper">
    

    <div class="about-fly">
    <h3>ABOUT FLY</h3>
    <h1>BOOK PRIVATE JETS AT THE <b style="color:#ed1c24;">SPEED OF SOUND </b> <img src="~/@/assets/black-plane.svg" width="32px" alt=""></h1>
    <p class="description">There’s literally nothing else like it in the 
world. Whether you’re traveling domestically or internationally, Fly sets the new standard for traveling experience.</p>
    </div>
    <div class="plane-about"><img src="~/@/assets/about-plane.png" alt=""></div>

    <div class="cta" style="">
      <div class="bookbutton">
        BOOK A FLIGHT
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
 components: {
  },
};
</script>
<style >
  @import url('../assets/styles/Terminal.scss');
</style>

