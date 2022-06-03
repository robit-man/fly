<template>
  <div class="full-wrapper">
    

    <div class="about-fly">
    <h3>ABOUT FLY</h3>
    <h1>BOOK PRIVATE JETS AT THE <b style="color:#ed1c24;">SPEED OF SOUND </b> <img src="~/@/assets/black-plane.svg" width="32px" alt=""></h1>
    <p style="width:400px;left:30%;position:absolute;font-size:1rem;">There’s literally nothing else like it in the 
world. Whether you’re traveling domestically or internationally, Fly sets the new standard for traveling experience.</p>
    </div>
<div class="plane-about"><img src="~/@/assets/about-plane.png" alt=""></div>
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
@keyframes zoom{
  0%{transform:scale(0)translatey(-30%)translatex(-80%);}
  100%{transform:scale(1)translatey(0%)translatex(0%);}
}
.plane-about{width:calc(100vw - 8rem);left:4rem;position:absolute;bottom:10%;animation:zoom 1s ease-out;}
.about-fly{position:fixed;left:3rem;height:8rem;width:500px;height:300px;top:calc(30% + 6rem);padding-right:3rem;}
.line-left-a{bottom:70%!important;}
.line-left-b{top:calc(30% + 300px)!important;}
</style>

