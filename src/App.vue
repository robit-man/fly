<template>
  <div>
    <div id="app" class="" style="">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div style="" v-else>
      
      <div class="icontop" style=""><img src="~/@/assets/logo.png" style="" alt=""></div>

      <div class="menutop" style="">
        <div class="iconmenu" style="">
          <div class="menu-bottom-line" style="width:2rem;height:4px;border-radius:2rem;background-color:#ed1c24;margin-left:auto;"></div>
          <div class="menu-bottom-line" style="width:4rem;height:4px;border-radius:2rem;background-color:#ed1c24;margin-top:8px;"></div>
        </div>

        <div class="menulist">
          <a class="menuitem" href="">About</a>

          <div class="services">
            <div class="menuitem">Services</div>
            <div class="dropdown"></div>
          </div>

          <a class="menuitem" href="">Features</a>
          <a class="menuitem" href="">Contact Us</a>
        </div>

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
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['settings'])
  },
  methods: {
    ...mapActions(['init'])
  },
  async created() {
    this.init();
  }
};
</script>
