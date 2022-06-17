<template>
  <div class="full-wrapper">
         <a href="/#/"> <div class="icontop" style=""><img src="~/@/assets/logo-2.png" style="" alt=""></div></a>

        <div class="iconmenu" style="">
          <div class="menu-top-line" style="background-color:white!important;"></div>
          <div class="menu-bottom-line" style="background-color:white!important;"></div>
        </div>

      <div class="line-box">
        <div class="line-top-a"></div>
        <div class="line-top-b"></div>
        <div class="line-bottom-a"></div>
        <div class="line-bottom-b"></div>
        <div class="line-left-a"></div>
        <div class="line-left-b"></div>
        <div class="line-right-a"></div>
        <div class="line-right-b"></div>
      </div>
      


    <div class="about-mobile">
    <h1>THE FLY APP</h1>
    <p class="description">The world’s first ever blockchain-powered air miles rewards program. The rewards mobile will be called “FLY”. Fly will be issued on the Ethereum protocol and will trade under the ticker symbol “FLY” on Uniswap’s decentralized exchange.  
 <br><br></p> 
<div class="approw" style=" ">
<a href=""><img src="~/@/assets/google-play.png" alt=""></a>
<a href=""><img src="~/@/assets/apple-store.png" alt=""></a>
</div>

    </div>

        <div class="app-big"><img src="~/@/assets/phone.png" alt=""></div>
      



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
.app-big{position:fixed;bottom:0px;left:0px;}
  .description{
    width:520px;position:relative;font-size:1rem;text-align:right;
  }
  .learnmore:hover{color:#ed1c24;background-color:white;cursor:pointer;
  }
  .about-mobile{z-index:10;position:fixed;right:14rem;height:auto;width:auto;height:300px;top: 14rem;text-align:right;}
  .mobile-big{width:80vw;right:0px;position:fixed;bottom:0px;}
  .cta{width:300px;bottom:3rem;left:calc(50% - 150px);position:fixed;display:flex;flex-flow:row;justify-content:center;}

.approw{display:flex;flex-flow:wrap;width:inherit; max-width:450px;margin-left:auto;justify-content:space-between;}
  .full-wrapper{background-image:linear-gradient(black, red);}
.line-box > div{background:white!important;}

  @media screen and (max-width:1200px) {
  .app-big{width:100vw;left:unset;right:2rem;position:absolute;bottom:0%;animation:zoom 1s ease-out;}
    .about-mobile{position:fixed;left:4rem;height:auto;width:calc(100vw - 8rem);height:auto;top: 6.5rem;padding-right:3rem;text-align:left;}

  .description{text-align:left;
    width:calc(100vw - 8rem);position:relative;font-size:1rem;
  }
  }
</style>

