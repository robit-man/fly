<template>
  <div class="full-wrapper">
    
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
    <div class="plane-about"><img src="~/@/assets/about-plane.png" alt=""></div>

    <div class="about-fly">
    <h3>ABOUT FLY</h3>
    <h1>BOOK PRIVATE JETS AT THE <b style="color:#ed1c24;">SPEED OF SOUND </b> <img src="~/@/assets/black-plane.svg" width="32px" alt=""></h1>
    <p class="description">There’s literally nothing else like it in the 
world. Whether you’re traveling domestically or internationally, Fly sets the new standard for traveling experience.</p>
    </div>

    <div class="cta" style="">
      <a href="/#/booking">  <div class="bookbutton">
        BOOK A FLIGHT
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

@keyframes zoom{
    0%{transform:scale(0)translatey(-30%)translatex(-80%);}
    100%{transform:scale(1)translatey(0%)translatex(0%);}
  }
  .description{
    width:400px;left:30%;position:absolute;font-size:1rem;
  }
  .cta{width:300px;bottom:3rem;left:calc(50% - 150px);position:fixed;display:flex;flex-flow:row;justify-content:center;}
  .bookbutton{transition:all 0.2s ease;width:180px;height:auto;border-radius:2rem;padding:0.5rem 1rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }
  .bookbutton:hover{color:white;background-color:#ed1c24;cursor:pointer;
  }
  .plane-about{width:calc(100vw - 8rem);left:4rem;position:absolute;bottom:10%;animation:zoom 1s ease-out;}
  .about-fly{position:fixed;left:3rem;height:8rem;width:500px;height:300px;top:calc(30% + 6rem);padding-right:3rem;}
  .line-left-a{bottom:70%!important;}
  .line-left-b{top:calc(30% + 300px)!important;}
  
  
  
  @media screen and (max-height:800px){
  
    .about-fly{position:fixed;left:3rem;height:8rem;width:500px;height:300px;top:calc(20% + 5rem)!important;padding-right:3rem;}
  
    .line-right-a{bottom:60%!important;}
  .line-right-b{top:calc(50% + 300px)!important;}
    .line-left-a{bottom:60%!important;}
  .line-left-b{top:calc(50% + 300px)!important;}
  }
  
  
  @media screen and (max-width:1200px) {
  .plane-about{width:calc(100vw - 20rem);left:unset;right:2rem;position:absolute;bottom:10%;animation:zoom 1s ease-out;}
  
  }
  
  @media screen and (max-width:900px) {.line-box{  top:8rem;
}
    .bookbutton{width:350px;height:auto;border-radius:2rem;font-size:2rem;padding:0.5rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }
  .plane-about{width:calc(100vw - 8rem);left:4rem;position:absolute;top:10%;animation:zoom 1s ease-out;}
  
 
  .cta{width:calc(100% - 10rem);bottom:5rem;left:5rem;position:fixed;display:flex;flex-flow:row;justify-content:center;}
    }
  
  @media screen and (max-width:600px){
  
    .line-right-a{bottom:50%!important;}
  .line-right-b{top:calc(35% + 300px)!important;}
  .description{
    width:400px;left:30%;position:absolute;font-size:1rem;
  }
  }
  @media screen and (max-width:550px){  
    
    .about-fly{position:fixed;left:2rem;height:8rem;width:calc(100% - 2rem);height:300px;top:calc(20% + 6rem);padding-right:0rem;}
  .line-left-a{bottom:85%!important;}
  .line-left-b{top:50%!important;}
    .description{
    width:calc(100% - 6rem);left:2rem;position:absolute;font-size:1rem;
  }
 
  .cta{width:calc(100% - 10rem);bottom:2rem;left:5rem;position:fixed;display:flex;flex-flow:row;justify-content:center;}
  .line-right-a{bottom:85%!important;}
  .line-right-b{top:50%!important;}
  .line-box{bottom:4rem;}
  .line-bottom-a{right:98%!important;}
  .line-bottom-b{left:98%!important;}
  }
  </style>

