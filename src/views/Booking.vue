<template>
  <div class="full-wrapper">
         <a href="/#/"> <div class="icontop" style=""><img src="~/@/assets/logo.png" style="" alt=""></div></a>

        <div class="iconmenu" style="">
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

    <div class="plane-booking"><img src="~/@/assets/booking-plane.png" alt=""></div>

      <div class="about-booking">
      <h1>The Ultimate Concierge</h1>
      <p class="booking-desc">Fly is unmatched in the customizing of your entire travel experience. 
Use the power of your voice to select all your flight options including</p>
      </div>

<div class="featurecolumn">
      <div class="featurerow">

          <div class="navleft"></div>

          <div class="features" style="">
            <div class="featurebox">
              <img class="featurebox-img"  src="~/@/assets/dine.png" height="32px" alt="">
              <p>
            Fine dining & drinks</p>
            </div>
            <div class="featurebox">
              <img class="featurebox-img"  src="~/@/assets/luggage.png" height="32px" alt="">
              <p>Special luggage handling</p>
            </div>
            <div class="featurebox">
              <img class="featurebox-img" src="~/@/assets/arrangements.png" height="32px" alt="">
              <p>Cabin & sleeping arrangements</p>
            </div>
            <div class="featurebox">
              <img class="featurebox-img"  src="~/@/assets/pets.png"  height="32px" alt="">
              <p>Traveling with your pets</p>
            </div>

          </div>

          <div class="navright"></div>

      </div>

      
<div class="cta" style="">
      <a href="/#/booking">  <div class="bookbutton">
        <b style="color:white;font-weight:700;">LEARN MORE</b>
      </div></a>
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
<style scoped>

 .cta{width:300px;top:30rem;left:calc(50% - 150px);position:relative;display:flex;flex-flow:row;justify-content:center;}
  .bookbutton{transition:all 0.2s ease;width:180px;height:auto;border-radius:2rem;padding:0.5rem 1rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }
  .bookbutton:hover{color:white;background-color:#ed1c24;cursor:pointer;
  }

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

.featurebox{text-align:center;font-size:1rem;display:flex;flex-flow:column; justify-content:flex-start; max-width:128px;}
.featurebox-img{height:64px!important;width:64px!important;margin:1rem auto ;}
.features{display:flex;flex-flow:row;position:absolute;width:100%;max-width:600px;display:flex;flex-flow:row;justify-content:space-between;top:calc(8rem + 150px);left:calc(50vw - 300px);}
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

