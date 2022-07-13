<template>
  <div class="full-wrapper" style="background:black;">
        <div class="token-big"><img src="~/@/assets/token.png" alt=""></div>

        <div class="iconmenu" style="" v-on:click="menu = !menu">
          <div class="menu-top-line" style=""></div>
          <div class="menu-bottom-line" style=""></div>
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

    <div class="about-token">
    <h1>THE <b style="color:#ed1c24;">FLY TOKEN</b></h1>
    <p class="description">The world’s first ever blockchain-powered air miles rewards program. The rewards token will be called “FLY”. Fly will be issued on the Ethereum protocol and will trade under the ticker symbol “FLY” on Uniswap’s decentralized exchange.  
 <br><br></p> 
 <a href="/#/flights">  <div class="learnmore">
        LEARN MORE
      </div></a>
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

  .description{
    width:520px;position:relative;font-size:1rem;
  }
  .learnmore:hover{color:white;background-color:#ed1c24;cursor:pointer;
  }
  .about-token{position:fixed;left:20rem;height:auto;width:500px;height:300px;top: 6.5rem;padding-right:3rem;}
  .token-big{width:80vw;right:0px;position:fixed;bottom:0px;}
  .cta{width:300px;bottom:3rem;left:calc(50% - 150px);position:fixed;display:flex;flex-flow:row;justify-content:center;}
  .learnmore{transition:all 0.2s ease;width:180px;height:auto;border-radius:2rem;padding:0.5rem 1rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }

  .line-right-a{bottom:50%!important;}
  .line-right-b{top:70%!important;}
  .line-top-a{right:90%!important;}
  .line-top-b{left:40%!important;}
  
  
  
  @media screen and (max-height:800px){
  
    .about-token{position:fixed;left:4rem;height:8rem;width:100%;height:auto;top:calc(10% + 5rem)!important;padding-right:3rem;}
  
  }
  
  
  @media screen and (max-width:1200px) {
  .token-big{width:calc(100vw - 20rem);left:unset;right:2rem;position:absolute;bottom:10%;animation:zoom 1s ease-out;}
    .about-token{position:fixed;left:4rem;height:auto;width:calc(100vw - 8rem);height:auto;top: 6.5rem;padding-right:3rem;}

  .line-top-b{left:60%!important;}
  .description{
    width:calc(100vw - 8rem);position:relative;font-size:1rem;
  }
  .line-right-a{bottom:50%!important;}
  .line-right-b{top:50%!important;}
  }
  
  @media screen and (max-width:900px) {.line-box{  top:8rem;
}
    .learnmore{width:auto;height:auto;border-radius:2rem;font-size:1.5rem;padding:0.5rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }
  .token-big{width:calc(100vw - 8rem);left:4rem;position:absolute;bottom:10%;animation:zoom 1s ease-out;}
  
 
    }
  
  @media screen and (max-width:600px){
  
  .description{
  }
  }
  @media screen and (max-width:550px){  
 
  }
  </style>

