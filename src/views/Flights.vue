<template>
  <div class="full-wrapper">
         <a href="/#/"> <div class="icontop" style=""><img src="~/@/assets/logo.png" style="" alt=""></div></a>

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

    <div class="plane-flights"><img src="~/@/assets/flights-plane.png" alt=""></div>

    <div class="flightbooking" style="position:fixed;left:4rem;top:calc(10% + 8rem)">
    <div class="row" style="cursor:pointer;"  v-on:click="returning = !returning">

    <div class="oneway"> 
    
      <h1 v-if="!returning" style="color:#ed1c24;border-color:#ed1c24;">One Way</h1>
      <h1 v-if="returning" style="color:white;">One Way</h1>
      </div>

      <div class="twoway">
      <h1 v-if="returning" style="color:#ed1c24;border-color:#ed1c24;">Return</h1>
      <h1 v-if="!returning" style="color:white;">Return</h1>
    </div>

    </div>
    <div class="row">
    
    <div class="from">
      <p><b><i>FROM</i></b></p>
      <input placeholder="New York, NY, USA" type="text">
    </div>

    <div class="to">
      <p><b><i>TO</i></b></p>
      <input placeholder="Los Angeles, CA, USA" type="text">
    </div>

    </div>

    <div class="row">

    <div class="departure-date">
      <p><b><i>DEPARTURE DATE</i></b></p>
      <input placeholder="6/29/2022" type="text">
    </div>

    <div class="departure-time">
      <p><b><i>TIME</i></b></p>
      <input placeholder="12:00 AM" type="text">
    </div>


    </div>

    
    <div v-if="returning" class="row return">

    <div class="return-date">
      <p><b><i>RETURN DATE</i></b></p>
      <input type="text">
    </div>

    <div class="return-time">
      <p><b><i>TIME</i></b></p>
      <input type="text">
    </div>


    </div>


  </div>
 
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      menu: true,
      returning: false,
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
  input{max-width:200px;padding:0.5rem 1rem;margin-right:3rem;margin-left:-1rem;border-radius:3rem;border:1px solid #ed1c24;background:transparent;color:white!important;}
::placeholder{color:white;opacity:0.5;}
  .oneway > h1{
    transition:all 0.2s ease;
    
  border-bottom:2px solid;padding-right:2rem;}

  .twoway > h1{transition:all 0.2s ease;
  border-bottom:2px solid;padding-left:2rem;}

  .row{display:flex;flex-flow:row;margin-bottom:2rem;margin-top:2rem;}

 .cta{width:300px;top:30rem;left:calc(50% - 150px);position:relative;display:flex;flex-flow:row;justify-content:center;}
  .bookbutton{transition:all 0.2s ease;width:180px;height:auto;border-radius:2rem;padding:0.5rem 1rem;border:1px solid #ed1c24;color:#ed1c24;text-align:center;font-weight:bolder;
  }
  .bookbutton:hover{color:white;background-color:#ed1c24;cursor:pointer;
  }

@keyframes zoom{
    0%{transform:scale(2)translatex(100%)}
    100%{transform:scale(1)translatex(0%)}
  }
  
   .line-left-a{bottom:85%!important;}
  .line-left-b{top:75%!important;}
  
  .plane-flights{width:80%;left:20%;position:absolute;bottom:5%;height:auto;animation:zoom 1s ease-out;}



  @media screen and (max-height:800px){
  
  }
  
  
  @media screen and (max-width:1200px) {
  .about-flights{margin:0rem 1rem;width: calc(100vw - 6rem);
position: fixed;
top: 6.5rem;
left: 2rem;}
.line-box{  top:8rem;
}

  }
  
  @media screen and (max-width:900px) { 
    .flights-desc{width:auto;margin:1rem;margin-top:2rem;}
  }
  
  @media screen and (max-width:600px){
 
  }
  @media screen and (max-width:550px){  
   
  }
  
</style>

