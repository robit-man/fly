<template>
  <div>
    <div id="app" class="" style="">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div style="" v-else>
      

      <div class="menutop" style="">

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
