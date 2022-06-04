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

      <div class="about-booking">
      <h1>The Ultimate Concierge</h1>
      <p class="booking-desc">Fly is unmatched in the customizing of your entire travel experience. 
Use the power of your voice to select all your flight options including</p>
      </div>





    <div class="plane-booking"><img src="~/@/assets/booking-plane.png" alt=""></div>



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
    0%{transform:scale(1)translatex(-100%)}
    100%{transform:scale(1)translatex(0%)}
  } .line-left-a{bottom:50%!important;}
  .line-left-b{top:50%!important;}
 .line-top-a{right:calc(50% + 350px)!important;}
.line-top-b{left:calc(50% + 350px)!important;}
  .booking-desc{width:510px;margin:auto;margin-top:2rem;}
  .about-booking{ width:700px;position:fixed;top:6.5rem;left:calc(50% - 350px);}
  .about-booking > h1{text-align:center;color:#ed1c24;}
  
  .plane-booking{width:80%;left:10%;position:absolute;bottom:5%;height:auto;animation:zoom 1s ease-out;}



  @media screen and (max-height:800px){
  
  }
  
  
  @media screen and (max-width:1200px) {
  .about-booking{margin:0rem 1rem;width: calc(100vw - 6rem);
position: fixed;
top: 6.5rem;
left: 2rem;}
.line-box{  top:8rem;
}

  }
  
  @media screen and (max-width:900px) { 
    .booking-desc{width:auto;margin:1rem;margin-top:2rem;}
  }
  
  @media screen and (max-width:600px){
 .line-top-a{right:90%!important;}
.line-top-b{left:90%!important;} 
 
  }
  @media screen and (max-width:550px){  
   
  }
  
</style>

