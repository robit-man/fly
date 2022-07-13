<template>
  <div>
    <div id="app" class="" style="">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div style="" v-else>
      
<div class="menu-click iconmenu" style="z-index:1000;height: 100px;
width: 200px;" v-on:click="menu = !menu"></div>
      <div class="menutop" style="" v-if="menu">

        <div class="menulist">
          <a class="menuitem" href="">About</a>

          <div class="services more">
            <div class="menuitem" style="margin-top:-4px;">Services</div>
            <div class="dropdown" style="max-width:300px;display:flex;flex-flow:column;">
            <h4 style="color:red;font-weight:bold;" >How we're better</h4>
            <p>Faster, cheaper, smarter.</p>
            <p>Integrated A.I & blockchain to cut costs and increase efficiency.</p>
            <p>Offer 3 classes of aircraft.</p>
            <a href=""><p style="font-weight:bold;text-decoration:underline;color:red;">Fly is global.</p></a>
            <p>We're on-demand.</p>

            </div>
          </div>

          <RouterLink to="/token">
              <div class="menuitem">Token</div>
          </RouterLink>
          <RouterLink to="/mobile">
              <div class="menuitem">App</div>
          </RouterLink>
          <RouterLink to="/flights">
              <div class="menuitem">Flights</div>
          </RouterLink>
          <RouterLink to="/booking">
              <div class="menuitem">Booking</div>
          </RouterLink>
          <a class="menuitem" href="">Features</a>
          <a class="menuitem" href="">Contact Us</a>
        </div>

      </div>

        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
 data() {
        return {
            menu: false,
            form: {
                quantity: ''
            },
            modalLoginOpen: false,
        };
    },
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
